// Responsive utilities for DT-Plans.com

class ResponsiveManager {
    constructor() {
        this.currentBreakpoint = this.getCurrentBreakpoint();
        this.isTouchDevice = this.detectTouchDevice();
        this.isMobile = window.innerWidth <= 767;
        this.isTablet = window.innerWidth >= 768 && window.innerWidth <= 1199;
        this.isDesktop = window.innerWidth >= 1200;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.optimizeForDevice();
        this.setupOrientationHandling();
    }
    
    getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width <= 767) return 'mobile';
        if (width <= 1199) return 'tablet';
        return 'desktop';
    }
    
    detectTouchDevice() {
        return 'ontouchstart' in window || 
               navigator.maxTouchPoints > 0 || 
               navigator.msMaxTouchPoints > 0;
    }
    
    setupEventListeners() {
        // Resize handler with debouncing
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
        
        // Orientation change handler
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleOrientationChange();
            }, 100);
        });
        
        // Touch vs mouse detection
        document.addEventListener('touchstart', () => {
            this.isTouchDevice = true;
            this.optimizeForTouch();
        }, { once: true });
        
        document.addEventListener('mousedown', () => {
            if (!this.isTouchDevice) {
                this.optimizeForMouse();
            }
        }, { once: true });
    }
    
    handleResize() {
        const newBreakpoint = this.getCurrentBreakpoint();
        const wasMobile = this.isMobile;
        const wasTablet = this.isTablet;
        const wasDesktop = this.isDesktop;
        
        this.currentBreakpoint = newBreakpoint;
        this.isMobile = window.innerWidth <= 767;
        this.isTablet = window.innerWidth >= 768 && window.innerWidth <= 1199;
        this.isDesktop = window.innerWidth >= 1200;
        
        // Trigger breakpoint change events
        if (wasMobile !== this.isMobile) {
            this.onBreakpointChange('mobile', this.isMobile);
        }
        if (wasTablet !== this.isTablet) {
            this.onBreakpointChange('tablet', this.isTablet);
        }
        if (wasDesktop !== this.isDesktop) {
            this.onBreakpointChange('desktop', this.isDesktop);
        }
        
        // Update gallery layout if needed
        this.updateGalleryLayout();
        
        // Update modal positioning
        this.updateModalPositioning();
    }
    
    handleOrientationChange() {
        // Force layout recalculation after orientation change
        setTimeout(() => {
            this.updateGalleryLayout();
            this.updateModalPositioning();
            this.optimizeForDevice();
        }, 300);
    }
    
    onBreakpointChange(breakpoint, isActive) {
        // Add/remove classes based on breakpoint
        document.body.classList.toggle(`${breakpoint}-active`, isActive);
        document.body.classList.toggle(`${breakpoint}-inactive`, !isActive);
        
        // Trigger custom events
        window.dispatchEvent(new CustomEvent('breakpointChange', {
            detail: { breakpoint, isActive, currentBreakpoint: this.currentBreakpoint }
        }));
        
        // Mobile-specific optimizations
        if (breakpoint === 'mobile' && isActive) {
            this.optimizeForMobile();
        }
        
        // Tablet-specific optimizations
        if (breakpoint === 'tablet' && isActive) {
            this.optimizeForTablet();
        }
        
        // Desktop-specific optimizations
        if (breakpoint === 'desktop' && isActive) {
            this.optimizeForDesktop();
        }
    }
    
    optimizeForDevice() {
        if (this.isMobile) {
            this.optimizeForMobile();
        } else if (this.isTablet) {
            this.optimizeForTablet();
        } else {
            this.optimizeForDesktop();
        }
    }
    
    optimizeForMobile() {
        // Disable hover effects on mobile
        document.body.classList.add('mobile-optimized');
        document.body.classList.remove('tablet-optimized', 'desktop-optimized');
        
        // Optimize touch targets
        this.optimizeTouchTargets();
        
        // Reduce animations for better performance
        this.reduceAnimations();
        
        // Optimize images for mobile
        this.optimizeImagesForMobile();
        
        // Mobile-specific modal optimizations
        this.optimizeModalsForMobile();
        
        // Mobile-specific scroll optimizations
        this.optimizeScrollForMobile();
    }
    
    optimizeForTablet() {
        document.body.classList.add('tablet-optimized');
        document.body.classList.remove('mobile-optimized', 'desktop-optimized');
        
        // Hybrid touch/mouse optimizations
        if (this.isTouchDevice) {
            this.optimizeTouchTargets();
        }
        
        // Balanced performance
        this.balancePerformance();
    }
    
    optimizeForDesktop() {
        document.body.classList.add('desktop-optimized');
        document.body.classList.remove('mobile-optimized', 'tablet-optimized');
        
        // Enable all features
        this.enableAllFeatures();
        
        // High-quality images
        this.optimizeImagesForDesktop();
    }
    
    optimizeForTouch() {
        document.body.classList.add('touch-device');
        
        // Increase touch target sizes
        this.optimizeTouchTargets();
        
        // Add touch-specific event handlers
        this.addTouchHandlers();
    }
    
    optimizeForMouse() {
        document.body.classList.add('mouse-device');
        
        // Enable hover effects
        this.enableHoverEffects();
    }
    
    optimizeTouchTargets() {
        // Ensure minimum 44px touch targets
        const touchElements = document.querySelectorAll('button, .nav-link, .hero-btn, .gallery-nav, .modal-close');
        touchElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.width < 44 || rect.height < 44) {
                element.style.minWidth = '44px';
                element.style.minHeight = '44px';
            }
        });
    }
    
    addTouchHandlers() {
        // Add touch-specific gesture handling
        this.setupSwipeGestures();
        this.setupPinchZoom();
    }
    
    setupSwipeGestures() {
        // Gallery swipe navigation
        const gallery = document.getElementById('modalGallery');
        if (gallery) {
            let startX = 0;
            let startY = 0;
            
            gallery.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });
            
            gallery.addEventListener('touchend', (e) => {
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Horizontal swipe
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        // Swipe left - next image
                        this.scrollGalleryRight();
                    } else {
                        // Swipe right - previous image
                        this.scrollGalleryLeft();
                    }
                }
            });
        }
    }
    
    setupPinchZoom() {
        // Disable pinch zoom on modals for better UX
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('touchstart', (e) => {
                if (e.touches.length > 1) {
                    e.preventDefault();
                }
            });
        });
    }
    
    reduceAnimations() {
        // Reduce animations on mobile for better performance
        document.body.classList.add('reduced-motion');
    }
    
    balancePerformance() {
        // Balanced performance for tablets
        document.body.classList.add('balanced-performance');
    }
    
    enableAllFeatures() {
        // Enable all features on desktop
        document.body.classList.add('full-features');
    }
    
    optimizeImagesForMobile() {
        // Use smaller images on mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.dataset.mobileSrc) {
                img.src = img.dataset.mobileSrc;
            }
        });
    }
    
    optimizeImagesForDesktop() {
        // Use high-quality images on desktop
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.dataset.desktopSrc) {
                img.src = img.dataset.desktopSrc;
            }
        });
    }
    
    updateGalleryLayout() {
        // Update gallery layout based on screen size
        const gallery = document.getElementById('gallery');
        if (gallery) {
            // Trigger gallery layout update
            window.dispatchEvent(new CustomEvent('galleryLayoutUpdate', {
                detail: { 
                    breakpoint: this.currentBreakpoint,
                    isMobile: this.isMobile,
                    isTablet: this.isTablet,
                    isDesktop: this.isDesktop
                }
            }));
        }
    }
    
    updateModalPositioning() {
        // Update modal positioning for different screen sizes
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                // Recalculate modal position
                this.positionModal(modal);
            }
        });
    }
    
    positionModal(modal) {
        // Center modal on screen
        const rect = modal.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        if (this.isMobile) {
            // Full screen on mobile
            modal.style.margin = '1rem';
            modal.style.maxHeight = '90vh';
        } else if (this.isTablet) {
            // Centered with margins on tablet
            modal.style.margin = '2rem';
            modal.style.maxHeight = '85vh';
        } else {
            // Centered with larger margins on desktop
            modal.style.margin = '3rem';
            modal.style.maxHeight = '80vh';
        }
    }
    
    scrollGalleryLeft() {
        const galleryLeft = document.getElementById('galleryLeft');
        if (galleryLeft) {
            galleryLeft.click();
        }
    }
    
    scrollGalleryRight() {
        const galleryRight = document.getElementById('galleryRight');
        if (galleryRight) {
            galleryRight.click();
        }
    }
    
    optimizeModalsForMobile() {
        // Optimize modals for mobile viewing
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            // Ensure modals are full-width on mobile
            if (this.isMobile) {
                modal.style.width = '100%';
                modal.style.margin = '0';
                modal.style.borderRadius = '0';
            }
        });
        
        // Optimize modal content for mobile
        const modalContents = document.querySelectorAll('.modal-content');
        modalContents.forEach(content => {
            if (this.isMobile) {
                content.style.maxHeight = '100vh';
                content.style.borderRadius = '0';
            }
        });
    }
    
    optimizeScrollForMobile() {
        // Optimize scroll behavior for mobile
        if (this.isMobile) {
            // Disable smooth scroll on mobile for better performance
            document.documentElement.style.scrollBehavior = 'auto';
            
            // Add mobile-specific scroll event handling
            this.setupMobileScrollHandling();
        }
    }
    
    setupMobileScrollHandling() {
        // Mobile-specific scroll optimizations
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Update scroll-to-top button visibility
                const scrollBtn = document.getElementById('scrollToTop');
                if (scrollBtn) {
                    if (window.scrollY > 200) {
                        scrollBtn.style.display = 'block';
                    } else {
                        scrollBtn.style.display = 'none';
                    }
                }
            }, 100);
        }, { passive: true });
    }
    
    // Public API
    getCurrentBreakpoint() {
        return this.currentBreakpoint;
    }
    
    isTouch() {
        return this.isTouchDevice;
    }
    
    isMobileDevice() {
        return this.isMobile;
    }
    
    isTabletDevice() {
        return this.isTablet;
    }
    
    isDesktopDevice() {
        return this.isDesktop;
    }
}

// Initialize responsive manager
const responsiveManager = new ResponsiveManager();

// Export for use in other modules
window.ResponsiveManager = ResponsiveManager;
window.responsiveManager = responsiveManager;
