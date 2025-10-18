// Professional Portfolio Template - Customize for your projects
// Replace all YOUR_* placeholders with your actual content

document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Data - CUSTOMIZE THIS SECTION
    const portfolioData = [
        {
            id: "project-1",
            title: "YOUR_PROJECT_1_TITLE",
            titleFr: "YOUR_PROJECT_1_TITLE_FR",
            category: "YOUR_PROJECT_1_CATEGORY",
            categoryFr: "YOUR_PROJECT_1_CATEGORY_FR",
            image: "assets/images/YOUR_PROJECT_1_IMAGE.jpg",
            description: "YOUR_PROJECT_1_DESCRIPTION",
            descriptionFr: "YOUR_PROJECT_1_DESCRIPTION_FR",
            gallery: [
                "assets/images/YOUR_PROJECT_1_GALLERY_1.jpg",
                "assets/images/YOUR_PROJECT_1_GALLERY_2.jpg",
                "assets/images/YOUR_PROJECT_1_GALLERY_3.jpg"
            ]
        },
        {
            id: "project-2",
            title: "YOUR_PROJECT_2_TITLE",
            titleFr: "YOUR_PROJECT_2_TITLE_FR",
            category: "YOUR_PROJECT_2_CATEGORY",
            categoryFr: "YOUR_PROJECT_2_CATEGORY_FR",
            image: "assets/images/YOUR_PROJECT_2_IMAGE.jpg",
            description: "YOUR_PROJECT_2_DESCRIPTION",
            descriptionFr: "YOUR_PROJECT_2_DESCRIPTION_FR",
            gallery: [
                "assets/images/YOUR_PROJECT_2_GALLERY_1.jpg",
                "assets/images/YOUR_PROJECT_2_GALLERY_2.jpg",
                "assets/images/YOUR_PROJECT_2_GALLERY_3.jpg"
            ]
        },
        {
            id: "project-3",
            title: "YOUR_PROJECT_3_TITLE",
            titleFr: "YOUR_PROJECT_3_TITLE_FR",
            category: "YOUR_PROJECT_3_CATEGORY",
            categoryFr: "YOUR_PROJECT_3_CATEGORY_FR",
            image: "assets/images/YOUR_PROJECT_3_IMAGE.jpg",
            description: "YOUR_PROJECT_3_DESCRIPTION",
            descriptionFr: "YOUR_PROJECT_3_DESCRIPTION_FR",
            gallery: [
                "assets/images/YOUR_PROJECT_3_GALLERY_1.jpg",
                "assets/images/YOUR_PROJECT_3_GALLERY_2.jpg",
                "assets/images/YOUR_PROJECT_3_GALLERY_3.jpg"
            ]
        },
        {
            id: "project-4",
            title: "YOUR_PROJECT_4_TITLE",
            titleFr: "YOUR_PROJECT_4_TITLE_FR",
            category: "YOUR_PROJECT_4_CATEGORY",
            categoryFr: "YOUR_PROJECT_4_CATEGORY_FR",
            image: "assets/images/YOUR_PROJECT_4_IMAGE.jpg",
            description: "YOUR_PROJECT_4_DESCRIPTION",
            descriptionFr: "YOUR_PROJECT_4_DESCRIPTION_FR",
            gallery: [
                "assets/images/YOUR_PROJECT_4_GALLERY_1.jpg",
                "assets/images/YOUR_PROJECT_4_GALLERY_2.jpg",
                "assets/images/YOUR_PROJECT_4_GALLERY_3.jpg"
            ]
        },
        {
            id: "project-5",
            title: "YOUR_PROJECT_5_TITLE",
            titleFr: "YOUR_PROJECT_5_TITLE_FR",
            category: "YOUR_PROJECT_5_CATEGORY",
            categoryFr: "YOUR_PROJECT_5_CATEGORY_FR",
            image: "assets/images/YOUR_PROJECT_5_IMAGE.jpg",
            description: "YOUR_PROJECT_5_DESCRIPTION",
            descriptionFr: "YOUR_PROJECT_5_DESCRIPTION_FR",
            gallery: [
                "assets/images/YOUR_PROJECT_5_GALLERY_1.jpg",
                "assets/images/YOUR_PROJECT_5_GALLERY_2.jpg",
                "assets/images/YOUR_PROJECT_5_GALLERY_3.jpg"
            ]
        },
        {
            id: "project-6",
            title: "YOUR_PROJECT_6_TITLE",
            titleFr: "YOUR_PROJECT_6_TITLE_FR",
            category: "YOUR_PROJECT_6_CATEGORY",
            categoryFr: "YOUR_PROJECT_6_CATEGORY_FR",
            image: "assets/images/YOUR_PROJECT_6_IMAGE.jpg",
            description: "YOUR_PROJECT_6_DESCRIPTION",
            descriptionFr: "YOUR_PROJECT_6_DESCRIPTION_FR",
            gallery: [
                "assets/images/YOUR_PROJECT_6_GALLERY_1.jpg",
                "assets/images/YOUR_PROJECT_6_GALLERY_2.jpg",
                "assets/images/YOUR_PROJECT_6_GALLERY_3.jpg"
            ]
        }
    ];

    // Language switching functionality
    function switchLanguage(lang) {
        const html = document.getElementById('html-lang');
        html.setAttribute('lang', lang);
        
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-en], [data-fr]');
        elements.forEach(element => {
            if (element.hasAttribute(`data-${lang}`)) {
                element.textContent = element.getAttribute(`data-${lang}`);
            }
        });
        
        // Update document title
        const title = document.querySelector('title');
        if (title.hasAttribute(`data-${lang}`)) {
            title.textContent = title.getAttribute(`data-${lang}`);
        }
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    }

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Portfolio gallery generation
    function generatePortfolio() {
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = '';
        
        portfolioData.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-text">
                        <h3 class="portfolio-title">${item.title}</h3>
                        <p class="portfolio-category">${item.category}</p>
                    </div>
                </div>
            `;
            
            portfolioItem.addEventListener('click', () => openModal(item));
            gallery.appendChild(portfolioItem);
        });
    }

    // Modal functionality
    function openModal(item) {
        const modal = document.getElementById('projectModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalCategory = document.getElementById('modalCategory');
        const modalDescription = document.getElementById('modalDescription');
        const modalGallery = document.getElementById('modalGallery');
        
        modalImage.src = item.image;
        modalImage.alt = item.title;
        modalTitle.textContent = item.title;
        modalCategory.textContent = item.category;
        modalDescription.innerHTML = item.description;
        
        // Generate gallery
        modalGallery.innerHTML = '';
        item.gallery.forEach((galleryImage, index) => {
            const img = document.createElement('img');
            img.src = galleryImage;
            img.alt = `${item.title} - Image ${index + 1}`;
            img.loading = 'lazy';
            img.addEventListener('click', () => centerImage(img));
            modalGallery.appendChild(img);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Gallery navigation
    function centerImage(img) {
        const gallery = document.getElementById('modalGallery');
        const galleryRect = gallery.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        const scrollLeft = img.offsetLeft - (galleryRect.width / 2) + (imgRect.width / 2);
        
        gallery.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }

    // Close modal functionality
    function closeModal() {
        const modal = document.getElementById('projectModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Modal event listeners
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('projectModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('projectModal')) {
            closeModal();
        }
    });

    // Gallery navigation buttons
    document.getElementById('galleryLeft').addEventListener('click', () => {
        const gallery = document.getElementById('modalGallery');
        gallery.scrollBy({ left: -200, behavior: 'smooth' });
    });

    document.getElementById('galleryRight').addEventListener('click', () => {
        const gallery = document.getElementById('modalGallery');
        gallery.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // About modal functionality
    const aboutModal = document.getElementById('about-modal');
    const closeAbout = document.getElementById('closeAbout');
    const aboutLink = document.querySelector('a[href="#about"]');

    function openAboutModal() {
        closeAllModals();
        aboutModal.style.display = 'block';
    }

    function closeAboutModal() {
        aboutModal.style.display = 'none';
    }

    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            openAboutModal();
        });
    }

    if (closeAbout) {
        closeAbout.addEventListener('click', closeAboutModal);
    }

    // Skills modal functionality
    const skillsModal = document.getElementById('skills-modal');
    const closeSkillsBtn = document.getElementById('closeSkillsModal');
    const skillsLink = document.querySelector('a[href="#skills"]');

    function openSkillsModal() {
        closeAllModals();
        skillsModal.style.display = 'block';
    }

    function closeSkillsModal() {
        skillsModal.style.display = 'none';
    }

    if (skillsLink) {
        skillsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openSkillsModal();
        });
    }

    if (closeSkillsBtn) {
        closeSkillsBtn.addEventListener('click', closeSkillsModal);
    }

    // Contact modal functionality
    const contactModal = document.getElementById('contact-modal');
    const closeContactBtn = document.getElementById('closeContactModal');
    const contactLink = document.querySelector('a[href="#contact"]');

    function openContactModal() {
        closeAllModals();
        contactModal.style.display = 'block';
    }

    function closeContactModal() {
        contactModal.style.display = 'none';
    }

    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            openContactModal();
        });
    }

    if (closeContactBtn) {
        closeContactBtn.addEventListener('click', closeContactModal);
    }

    // Close all modals function
    function closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            if (window.scrollY > 10) {
                closeAllModals();
                window.location.hash = '';
                window.location.hash = '#home';
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 50);
            }
        });
    }

    // Home link functionality
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            
            if (window.scrollY > 10) {
                window.location.hash = '';
                window.location.hash = '#home';
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 50);
            }
        });
    }

    // Projects link functionality
    const projectsLink = document.querySelector('a[href="#work"]');
    if (projectsLink) {
        projectsLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            const projectsSection = document.querySelector('#work');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Hero scroll effects
    function setupScrollEffects() {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');

        if (!hero || !heroContent) return;

        let ticking = false;

        function updateScrollEffect() {
            const scrolled = window.pageYOffset;
            const translateY = scrolled * -0.4;
            heroContent.style.transform = `translate3d(0, ${translateY}px, 0)`;

            const progress = Math.min(scrolled / window.innerHeight, 1);
            const opacity = Math.max(0, 1 - progress);
            heroContent.style.opacity = opacity;

            const backgroundY = scrolled * -0.1;
            hero.style.backgroundPosition = `center ${backgroundY}px`;

            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffect);
                ticking = true;
            }
        }, { passive: true });
    }

    // Initialize everything
    generatePortfolio();
    setupScrollEffects();
});
