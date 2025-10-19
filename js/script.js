// Portfolio data - Construction and drafting projects
const portfolioData = [
    {
        id: 1,
        title: "Residential House Plans",
        titleFr: "Plans de Maison Résidentielle",
        category: "Architectural Drafting",
        categoryFr: "Dessin Architectural",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
        description: "**Project Scope:** 2,500 sq ft modern residential home with attached garage and basement development. **Challenges:** Tight lot constraints (30' x 100') requiring creative space optimization and compliance with setback requirements. **Solution:** Developed 3D Revit model with parametric families, coordinated MEP systems using Navisworks, and created detailed construction drawings with 15 sheets including structural details. **Results:** Delivered complete permit-ready package 2 weeks ahead of schedule, enabling contractor to break ground immediately. Client saved $15K in change orders due to detailed coordination drawings.",
        descriptionFr: "**Portée du Projet :** Maison résidentielle moderne de 2 500 pi² avec garage attenant et développement de sous-sol. **Défis :** Contraintes de terrain serrées (30' x 100') nécessitant une optimisation créative de l'espace et le respect des exigences de recul. **Solution :** Développé un modèle Revit 3D avec familles paramétriques, coordonné les systèmes MEP avec Navisworks, et créé des plans de construction détaillés avec 15 feuilles incluant les détails structurels. **Résultats :** Livré un package complet prêt pour permis 2 semaines avant l'échéance, permettant au contracteur de commencer immédiatement. Le client a économisé 15K$ en modifications grâce aux plans de coordination détaillés.",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop"
        ],
        link: "https://example.com/residential-plans"
    },
    {
        id: 2,
        title: "Commercial Office Building",
        titleFr: "Immeuble de Bureaux Commercial",
        category: "Commercial Design",
        categoryFr: "Design Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
        description: "**Project Scope:** 5-story commercial office building with 12,000 sq ft of office space and ground-floor retail. **Challenges:** Complex zoning requirements, accessibility compliance (ADA), and coordination between 5 different trades. **Solution:** Created comprehensive AutoCAD drawings with layer standards, developed detailed MEP coordination using Revit, and implemented clash detection protocols. **Results:** Successfully obtained building permit on first submission, reduced construction time by 3 weeks through detailed coordination, and achieved 95% first-time installation accuracy for MEP systems.",
        descriptionFr: "**Portée du Projet :** Immeuble de bureaux commercial de 5 étages avec 12 000 pi² d'espace de bureaux et commerce au rez-de-chaussée. **Défis :** Exigences de zonage complexes, conformité d'accessibilité (ADA), et coordination entre 5 corps de métier différents. **Solution :** Créé des plans AutoCAD complets avec standards de calques, développé une coordination MEP détaillée avec Revit, et implémenté des protocoles de détection de conflits. **Résultats :** Obtenu avec succès le permis de construction dès la première soumission, réduit le temps de construction de 3 semaines grâce à la coordination détaillée, et atteint 95% de précision d'installation du premier coup pour les systèmes MEP.",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop"
        ],
        link: "https://example.com/commercial-building"
    },
    {
        id: 3,
        title: "Structural Steel Detailing",
        titleFr: "Détail d'Acier Structurel",
        category: "Structural Engineering",
        categoryFr: "Ingénierie Structurelle",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
        description: "Precise structural steel detailing for industrial warehouse construction. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        descriptionFr: "Détail précis d'acier structurel pour la construction d'entrepôt industriel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        gallery: [
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop"
        ],
        link: "https://example.com/steel-detailing"
    },
    {
        id: 4,
        title: "MEP Systems Design",
        titleFr: "Conception de Systèmes MEP",
        category: "MEP Engineering",
        categoryFr: "Ingénierie MEP",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
        description: "Comprehensive MEP (Mechanical, Electrical, Plumbing) system design for healthcare facility. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt en culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        descriptionFr: "Conception complète de systèmes MEP (Mécanique, Électrique, Plomberie) pour installation de soins de santé. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit en voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt en culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        gallery: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop"
        ],
        link: "https://example.com/mep-design"
    },
    {
        id: 5,
        title: "3D Building Model",
        titleFr: "Modèle 3D de Bâtiment",
        category: "3D Modeling",
        categoryFr: "Modélisation 3D",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
        description: "Detailed 3D building model created in Revit for client presentation and construction coordination. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit en voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt en culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        descriptionFr: "Modèle 3D de bâtiment détaillé créé dans Revit pour présentation client et coordination de construction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor en reprehenderit en voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sont en culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        gallery: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop"
        ],
        link: "https://example.com/3d-model"
    },
    {
        id: 6,
        title: "Construction Documentation",
        titleFr: "Documentation de Construction",
        category: "Project Documentation",
        categoryFr: "Documentation de Projet",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
        description: "Complete construction documentation package including specifications, details, and construction notes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor en reprehenderit en voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt en culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        descriptionFr: "Ensemble complet de documentation de construction incluant spécifications, détails et notes de construction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor en reprehenderit en voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt en culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt en culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat faire possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        gallery: [
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop"
        ],
        link: "https://example.com/construction-docs"
    }
];

// Language state
let currentLanguage = 'en';

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

// Contact modal elements
const contactModal = document.getElementById('contact-modal');
const closeContactBtn = document.getElementById('closeContactModal');
const contactLink = document.querySelector('a[href="#contact"]');

// Hero button elements
const heroBtnPrimary = document.querySelector('.hero-btn.primary');
const heroBtnSecondary = document.querySelector('.hero-btn.secondary');

// Contact button element
const contactBtn = document.querySelector('.contact-btn');

// Initialize the portfolio
function initPortfolio() {
    renderPortfolio();
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
}

// Render portfolio items
function renderPortfolio() {
    gallery.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        const title = currentLanguage === 'fr' ? item.titleFr : item.title;
        const category = currentLanguage === 'fr' ? item.categoryFr : item.category;
        
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

// Open modal with project details
function openModal(item) {
    modalImage.src = item.image;
    
    const title = currentLanguage === 'fr' ? item.titleFr : item.title;
    const description = currentLanguage === 'fr' ? item.descriptionFr : item.description;
    
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
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
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
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

// Modal management functions
function closeAllModals() {
    // Close all modals
    aboutModal.classList.remove('active');
    skillsModal.classList.remove('active');
    contactModal.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// About modal functions
function openAboutModal() {
    // Close any other open modals first
    closeAllModals();
    aboutModal.classList.add('active');
    // Block background scroll while modal is open
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    aboutModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Skills modal functions
function openSkillsModal() {
    // Close any other open modals first
    closeAllModals();
    skillsModal.classList.add('active');
    // Block background scroll while modal is open
    document.body.style.overflow = 'hidden';
}

function closeSkillsModal() {
    skillsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Contact modal functions
function openContactModal() {
    // Close any other open modals first
    closeAllModals();
    contactModal.classList.add('active');
    // Block background scroll while modal is open
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
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
            if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
                closeSkillsModal();
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
            if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
                closeContactModal();
            }
        });
    }
    
    // Close about modal when clicking backdrop
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
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
            // Open about modal
            openAboutModal();
        });
    }
    
    // Contact button event
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // Copy email to clipboard and show feedback
            navigator.clipboard.writeText('contact@dt-plans.com').then(() => {
                // Show temporary feedback
                const originalText = contactBtn.textContent;
                contactBtn.textContent = 'Email Copied!';
                contactBtn.style.background = '#d4d4d4';
                contactBtn.style.color = '#1a1a1a';
                
                setTimeout(() => {
                    contactBtn.textContent = originalText;
                    contactBtn.style.background = 'rgba(212, 212, 212, 0.1)';
                    contactBtn.style.color = '#d4d4d4';
                }, 2000);
            }).catch(() => {
                // Fallback: open email client
                window.location.href = 'mailto:contact@dt-plans.com';
            });
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize portfolio immediately
    initPortfolio();
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
// Modal UX fixes: ensure consistent behavior on mobile/tablet
document.addEventListener('DOMContentLoaded', () => {
    const originalOpenAbout = openAboutModal;
    openAboutModal = function() {
        originalOpenAbout();
        document.body.style.overflow = 'hidden';
    };

    const originalOpenSkills = openSkillsModal;
    openSkillsModal = function() {
        originalOpenSkills();
        document.body.style.overflow = 'hidden';
    };

    const originalOpenContact = openContactModal;
    openContactModal = function() {
        originalOpenContact();
        document.body.style.overflow = 'hidden';
    };

    // Close modals when tapping the dimmed backdrop
    [aboutModal, skillsModal, contactModal].forEach((modalEl) => {
        if (!modalEl) return;
        modalEl.addEventListener('click', (e) => {
            if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
                if (modalEl === aboutModal) closeAboutModal();
                if (modalEl === skillsModal) closeSkillsModal();
                if (modalEl === contactModal) closeContactModal();
            }
        });
    });
});
