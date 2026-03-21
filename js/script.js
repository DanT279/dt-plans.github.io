(function() {
    "use strict";

    // Your existing code starts here...

// Portfolio data - Loaded dynamically from JSON file
let portfolioData = [];

// Language state
let currentLanguage = 'en';

// Project currently shown in modal (so we can refresh it on language switch)
let currentModalItem = null;

// DOM elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalGallery = document.getElementById('modalGallery');
const closeModal = document.getElementById('closeModal');
const langButtons = document.querySelectorAll('.lang-btn');
const galleryLeft = document.getElementById('galleryLeft');
const galleryRight = document.getElementById('galleryRight');

// About modal elements
const aboutModal = document.getElementById('about-modal');
const closeAbout = document.getElementById('closeAbout');
const aboutLink = document.querySelector('a[href="#about"]');

// Skills modal elements
const skillsModal = document.getElementById('skills-modal');
const closeSkillsBtn = document.getElementById('closeSkillsModal');
const skillsLink = document.querySelector('a[href="#skills"]');

// Tools / calculators modal elements
const toolsModal = document.getElementById('tools-modal');
const closeToolsBtn = document.getElementById('closeToolsModal');
const toolsLink = document.querySelector('a[href="#tools"]');
const calculatorFrame = document.getElementById('calculatorFrame');

// Contact modal elements
const contactModal = document.getElementById('contact-modal');
const closeContactBtn = document.getElementById('closeContactModal');
const contactLink = document.querySelector('a[href="#contact"]');

// Hero button elements
const heroBtnPrimary = document.querySelector('.hero-btn.primary');
const heroBtnSecondary = document.querySelector('.hero-btn.secondary');

// Contact button element
const contactBtn = document.querySelector('.contact-btn');

// Mobile menu elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.querySelector('.nav');

// Load portfolio data: legacy data/projects.json + folder-based projects from projects/<slug>/project.json
async function loadPortfolioData() {
    const legacy = [];
    try {
        const res = await fetch('data/projects.json');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data.projects)) legacy.push(...data.projects);
        }
    } catch (e) {
        console.warn('Could not load data/projects.json', e);
    }
    const fromFolders = [];
    try {
        const indexRes = await fetch('data/projects-index.json');
        if (!indexRes.ok) throw new Error('No index');
        const slugs = await indexRes.json();
        if (!Array.isArray(slugs)) throw new Error('Invalid index');
        const base = 'projects/';
        for (let i = 0; i < slugs.length; i++) {
            const slug = slugs[i];
            if (!slug || typeof slug !== 'string') continue;
            try {
                const prjRes = await fetch(`${base}${encodeURIComponent(slug)}/project.json`);
                if (!prjRes.ok) continue;
                const prj = await prjRes.json();
                const prefix = base + slug + '/';
                if (prj.image) prj.image = prefix + prj.image.replace(/^\/+/, '');
                if (Array.isArray(prj.gallery)) prj.gallery = prj.gallery.map(p => prefix + p.replace(/^\/+/, ''));
                prj.id = 'folder-' + slug;
                fromFolders.push(prj);
            } catch (_) {}
        }
    } catch (_) {
        // No projects-index or empty: use only legacy
    }
    portfolioData = legacy.concat(fromFolders);
    return portfolioData.length > 0;
}

// Initialize the portfolio
async function initPortfolio() {
    // Show loading state
    showLoading();
    
    // Load portfolio data
    const dataLoaded = await loadPortfolioData();
    
    if (dataLoaded && portfolioData.length > 0) {
        // Hide loading and render portfolio
        hideLoading();
        renderPortfolio();
    } else {
        // Show error message if no data loaded
        hideLoading();
        showError();
    }
    
    setupEventListeners();
    setupScrollEffects();
}

// Scroll effects for hero section - smooth as bourbon and honey
function setupScrollEffects() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (!hero || !heroContent) return;
    
    let ticking = false;
    
    // Direct scroll handler - no interpolation, no bounce back
    function updateScrollEffect() {
        const scrolled = window.pageYOffset;
        
        // Direct movement - no interpolation to prevent bounce back
        const translateY = scrolled * -0.4;
        heroContent.style.transform = `translate3d(0, ${translateY}px, 0)`;
        
        // Direct fade out - no easing curve
        const progress = Math.min(scrolled / window.innerHeight, 1);
        const opacity = Math.max(0, 1 - progress);
        heroContent.style.opacity = opacity;
        
        // Very subtle parallax background
        const backgroundY = scrolled * -0.1;
        hero.style.backgroundPosition = `center ${backgroundY}px`;
        
        ticking = false;
    }
    
    // Throttled scroll event handler
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffect);
            ticking = true;
        }
    }, { passive: true });
}

// Language switching functions
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.getElementById('html-lang').setAttribute('lang', lang);
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en][data-fr]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Update title
    document.title = document.querySelector('title').getAttribute(`data-${lang}`);
    
    // Update active language button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Re-render portfolio with new language
    renderPortfolio();

    // Update tools/calculators language
    updateCalculatorLanguage();

    // If project modal is open, refresh its title/description/image/gallery to the new language
    if (modal && modal.classList.contains('active') && currentModalItem) {
        const title = currentLanguage === 'fr' ? currentModalItem.titleFr : currentModalItem.title;
        const description = currentLanguage === 'fr' ? currentModalItem.descriptionFr : currentModalItem.description;
        if (modalTitle) modalTitle.textContent = title;
        setModalDescription(description);
        if (modalImage) modalImage.src = currentModalItem.image;
        modalGallery.innerHTML = '';
        (currentModalItem.gallery || []).forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${title} - Image ${index + 1}`;
            img.addEventListener('click', () => {
                modalImage.style.opacity = '0';
                setTimeout(() => {
                    modalImage.src = image;
                    modalImage.style.opacity = '1';
                    centerImageInGallery(img);
                }, 375);
            });
            modalGallery.appendChild(img);
        });
        updateGalleryNavigation();
    }
}

function getCalculatorSrcForLanguage(lang) {
    return lang === 'fr' ? 'Calculators/calc-fr.html' : 'Calculators/calc-en.html';
}

function updateCalculatorLanguage() {
    if (!calculatorFrame) return;
    const nextSrc = getCalculatorSrcForLanguage(currentLanguage);
    if (calculatorFrame.getAttribute('src') !== nextSrc) {
        calculatorFrame.setAttribute('src', nextSrc);
    }
}

// Render portfolio items
function renderPortfolio() {
    gallery.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        const title = currentLanguage === 'fr' ? item.titleFr : item.title;
        const category = currentLanguage === 'fr' ? item.categoryFr : item.category;
        const viewText = currentLanguage === 'fr' ? 'Voir Détails' : 'View Details';
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${title}" class="portfolio-image">
            <div class="portfolio-overlay">
                <div class="portfolio-overlay-text">${title}</div>
                <div class="portfolio-category">${category}</div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openModal(item));
        gallery.appendChild(portfolioItem);
    });
}

// Set modal description with paragraph breaks (\n\n in JSON = new paragraph)
function setModalDescription(description) {
    if (!modalDescription) return;
    modalDescription.innerHTML = description || '';
}

// Open modal with project details
function openModal(item) {
    currentModalItem = item;
    modalImage.src = item.image;
    
    const title = currentLanguage === 'fr' ? item.titleFr : item.title;
    const description = currentLanguage === 'fr' ? item.descriptionFr : item.description;
    
    modalTitle.textContent = title;
    setModalDescription(description);
    
    // Render gallery images
    modalGallery.innerHTML = '';
    item.gallery.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${title} - Image ${index + 1}`;
        img.addEventListener('click', () => {
            // Add fade out effect
            modalImage.style.opacity = '0';
            
            // After fade out, change image and fade back in
            setTimeout(() => {
                modalImage.src = image;
                modalImage.style.opacity = '1';
                // Center the clicked image in the gallery
                centerImageInGallery(img);
            }, 375);
        });
        modalGallery.appendChild(img);
    });
    
    // Update navigation buttons
    updateGalleryNavigation();
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    // Add scroll listener to redirect scroll to modal content
    addModalScrollListener();
}

// Close modal
function closeModalHandler() {
    currentModalItem = null;
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Remove scroll listener
    removeModalScrollListener();
}

// Center image in gallery
function centerImageInGallery(clickedImg) {
    const gallery = modalGallery;
    const galleryRect = gallery.getBoundingClientRect();
    const imgRect = clickedImg.getBoundingClientRect();
    
    const scrollLeft = clickedImg.offsetLeft - (galleryRect.width / 2) + (clickedImg.offsetWidth / 2);
    gallery.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}

// Update gallery navigation buttons
function updateGalleryNavigation() {
    const gallery = modalGallery;
    const scrollLeft = gallery.scrollLeft;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    
    galleryLeft.disabled = scrollLeft <= 0;
    galleryRight.disabled = scrollLeft >= maxScroll - 1; // -1 for rounding issues
}

// Gallery navigation functions
function scrollGalleryLeft() {
    const gallery = modalGallery;
    const scrollAmount = 150; // pixels to scroll
    const targetScroll = Math.max(0, gallery.scrollLeft - scrollAmount);
    
    // Smooth scroll with easing
    smoothScrollTo(gallery, targetScroll, 800);
}

function scrollGalleryRight() {
    const gallery = modalGallery;
    const scrollAmount = 150; // pixels to scroll
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const targetScroll = Math.min(maxScroll, gallery.scrollLeft + scrollAmount);
    
    // Smooth scroll with easing
    smoothScrollTo(gallery, targetScroll, 800);
}

// Smooth scroll with easing function
function smoothScrollTo(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        element.scrollLeft = start + change * easedProgress;
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

// Modal scroll management
let modalScrollListener = null;

function addModalScrollListener() {
    if (modalScrollListener) return; // Already added
    
    modalScrollListener = function(e) {
        e.preventDefault();
        
        // Find the active modal
        const activeModal = document.querySelector('.modal.active');
        if (!activeModal) return;
        
        // Find the scrollable content area - use the correct selector
        const scrollableContent = activeModal.querySelector('.modal-scrollable-content');
        if (!scrollableContent) return;
        
        // Apply scroll to the modal content
        const delta = e.deltaY || e.detail || e.wheelDelta;
        scrollableContent.scrollTop += delta;
    };
    
    // Add event listener with passive: false to allow preventDefault
    document.addEventListener('wheel', modalScrollListener, { passive: false });
    document.addEventListener('DOMMouseScroll', modalScrollListener, { passive: false }); // Firefox
}

function removeModalScrollListener() {
    if (modalScrollListener) {
        document.removeEventListener('wheel', modalScrollListener);
        document.removeEventListener('DOMMouseScroll', modalScrollListener);
        modalScrollListener = null;
    }
}

// Modal management functions
function closeAllModals() {
    // Close all modals
    aboutModal.classList.remove('active');
    skillsModal.classList.remove('active');
    toolsModal.classList.remove('active');
    contactModal.classList.remove('active');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Remove scroll listener
    removeModalScrollListener();
}

// About modal functions
function openAboutModal() {
    // Close any other open modals first
    closeAllModals();
    aboutModal.classList.add('active');
    document.body.classList.add('modal-open');
    // Add scroll listener to redirect scroll to modal content
    addModalScrollListener();
}

function closeAboutModal() {
    aboutModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Remove scroll listener
    removeModalScrollListener();
}

// Skills modal functions
function openSkillsModal() {
    // Close any other open modals first
    closeAllModals();
    skillsModal.classList.add('active');
    document.body.classList.add('modal-open');
    // Add scroll listener to redirect scroll to modal content
    addModalScrollListener();
}

function closeSkillsModal() {
    skillsModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Remove scroll listener
    removeModalScrollListener();
}

// Tools / calculators modal functions
function openToolsModal() {
    // Close any other open modals first
    closeAllModals();
    updateCalculatorLanguage();
    toolsModal.classList.add('active');
    document.body.classList.add('modal-open');
    // Add scroll listener to redirect scroll to modal content
    addModalScrollListener();
}

function closeToolsModal() {
    toolsModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Remove scroll listener
    removeModalScrollListener();
}

// Contact modal functions
function openContactModal() {
    // Close any other open modals first
    closeAllModals();
    contactModal.classList.add('active');
    document.body.classList.add('modal-open');
    // Add scroll listener to redirect scroll to modal content
    addModalScrollListener();
}

function closeContactModal() {
    contactModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Remove scroll listener
    removeModalScrollListener();
}

// Setup event listeners
function setupEventListeners() {
    // Language switcher
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Project modal events
    closeModal.addEventListener('click', closeModalHandler);
    
    // Close project modal when clicking backdrop
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            closeModalHandler();
        }
    });
    
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Custom smooth scroll function removed - using native browser smooth scroll

    // Scroll to top when button is clicked
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            if (window.scrollY > 10) {
                closeAllModals();
                // Use same reliable method as Home button
                window.location.hash = '';
                window.location.hash = '#home';
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 50);
            }
        });
    }

    // About modal events
    if (aboutLink) {
        // Home link functionality
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) {
            homeLink.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllModals();
                
                // Use location hash to force browser to scroll to top
                window.location.hash = '';
                window.location.hash = '#home';
                
                // Also try direct scroll as backup
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 50);
            });
        }

        // Projects link functionality
        const projectsLink = document.querySelector('a[href="#work"]');
        if (projectsLink) {
            projectsLink.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllModals();
                // Scroll to projects section
                const projectsSection = document.querySelector('#work');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            openAboutModal();
        });
    }
    
    if (closeAbout) {
        closeAbout.addEventListener('click', closeAboutModal);
    }
    
    // Skills modal events
    if (skillsLink) {
        skillsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openSkillsModal();
        });
    }
    
    if (closeSkillsBtn) {
        closeSkillsBtn.addEventListener('click', closeSkillsModal);
    }
    
    // Close skills modal when clicking backdrop
    if (skillsModal) {
        skillsModal.addEventListener('click', (e) => {
            if (e.target === skillsModal) {
                closeSkillsModal();
            }
        });
    }

    // Tools / calculators modal events
    if (toolsLink) {
        toolsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openToolsModal();
        });
    }

    if (closeToolsBtn) {
        closeToolsBtn.addEventListener('click', closeToolsModal);
    }

    // Close tools modal when clicking backdrop
    if (toolsModal) {
        toolsModal.addEventListener('click', (e) => {
            if (e.target === toolsModal || e.target.classList.contains('modal-backdrop')) {
                closeToolsModal();
            }
        });
    }
    
    // Contact modal events
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            openContactModal();
        });
    }
    
    if (closeContactBtn) {
        closeContactBtn.addEventListener('click', closeContactModal);
    }
    
    // Close contact modal when clicking backdrop
    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }
    
    // Close about modal when clicking backdrop
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                closeAboutModal();
            }
        });
    }
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closeModalHandler();
            }
            if (aboutModal && aboutModal.classList.contains('active')) {
                closeAboutModal();
            }
            if (skillsModal && skillsModal.classList.contains('active')) {
                closeSkillsModal();
            }
            if (toolsModal && toolsModal.classList.contains('active')) {
                closeToolsModal();
            }
            if (contactModal && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        }
    });
    
    // Gallery navigation events
    galleryLeft.addEventListener('click', scrollGalleryLeft);
    galleryRight.addEventListener('click', scrollGalleryRight);
    
    // Hero button events
    if (heroBtnPrimary) {
        heroBtnPrimary.addEventListener('click', () => {
            // Scroll to portfolio section
            document.getElementById('work').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    if (heroBtnSecondary) {
        heroBtnSecondary.addEventListener('click', () => {
            // Open contact modal
            openContactModal();
        });
    }
    
    // Contact button event
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const subject = encodeURIComponent('Project Inquiry');
            const body = encodeURIComponent(
                currentLanguage === 'fr'
                    ? "Bonjour,\n\nJe souhaiterais discuter d'un projet de plans.\n\n- Nom:\n- Type de projet:\n- Localisation:\n- Échéancier:\n- Budget (si applicable):\n\nMerci!"
                    : "Hi,\n\nI'd like to discuss a drafting project.\n\n- Name:\n- Project type:\n- Location:\n- Timeline:\n- Budget (if applicable):\n\nThanks!"
            );
            window.location.href = `mailto:contact@dt-plans.com?subject=${subject}&body=${body}`;
        });
    }
    
    // Update navigation buttons on scroll
    modalGallery.addEventListener('scroll', updateGalleryNavigation);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#about') {
                openAboutModal();
            } else if (targetId === '#tools') {
                openToolsModal();
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Mobile menu functionality
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // Close mobile menu when clicking on nav links
        nav.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
        
        // Close mobile menu on window resize if screen becomes larger
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }
}

// Add loading animation
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<div class="spinner"></div>';
    gallery.appendChild(loadingDiv);
}

// Remove loading animation
function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Show error message when data fails to load
function showError() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #d4d4d4;">
            <h3 style="margin-bottom: 15px; color: #dc3545;">⚠️ Unable to Load Projects</h3>
            <p style="margin-bottom: 20px;">There was an error loading the portfolio data.</p>
            <p style="font-size: 14px; color: #a0a0a0;">
                Make sure the <code>data/projects.json</code> file exists and is properly formatted.
            </p>
        </div>
    `;
    gallery.appendChild(errorDiv);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize portfolio immediately
    await initPortfolio();

    // Ensure calculators iframe matches current language
    updateCalculatorLanguage();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    
    
    // Portfolio items are visible by default - no animation needed
});

})(); 
