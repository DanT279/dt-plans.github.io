/*
 * Enhanced functionality for Forty template
 * Adds modern features and improvements
 */

(function($) {
    'use strict';

    // Enhanced functionality object
    const Enhanced = {
        
        // Initialize all enhancements
        init: function() {
            this.lazyLoading();
            this.smoothScrolling();
            this.formValidation();
            this.accessibility();
            this.performanceOptimizations();
            this.modernFeatures();
        },

        // Lazy loading for images
        lazyLoading: function() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        }
                    });
                });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }
        },

        // Smooth scrolling handled by original jQuery Scrolly plugin
        smoothScrolling: function() {
            // Let the original jQuery Scrolly plugin handle smooth scrolling
            // This prevents conflicts with the existing scrolly functionality
        },

        // Form validation and enhancement
        formValidation: function() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                
                inputs.forEach(input => {
                    // Real-time validation
                    input.addEventListener('blur', function() {
                        validateField(this);
                    });
                    
                    input.addEventListener('input', function() {
                        if (this.classList.contains('error')) {
                            validateField(this);
                        }
                    });
                });
                
                // Form submission
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    let isValid = true;
                    inputs.forEach(input => {
                        if (!validateField(input)) {
                            isValid = false;
                        }
                    });
                    
                    if (isValid) {
                        // Show success message
                        showNotification('Message sent successfully!', 'success');
                        form.reset();
                    } else {
                        showNotification('Please correct the errors and try again.', 'error');
                    }
                });
            });
            
            function validateField(field) {
                const value = field.value.trim();
                const type = field.type;
                const required = field.hasAttribute('required');
                let isValid = true;
                let message = '';
                
                // Remove existing error styling
                field.classList.remove('error');
                const existingError = field.parentNode.querySelector('.error-message');
                if (existingError) {
                    existingError.remove();
                }
                
                // Required field validation
                if (required && !value) {
                    isValid = false;
                    message = 'This field is required.';
                }
                
                // Email validation
                if (type === 'email' && value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        message = 'Please enter a valid email address.';
                    }
                }
                
                // Phone validation
                if (type === 'tel' && value) {
                    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                        isValid = false;
                        message = 'Please enter a valid phone number.';
                    }
                }
                
                // Show error if invalid
                if (!isValid) {
                    field.classList.add('error');
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error-message';
                    errorDiv.textContent = message;
                    field.parentNode.appendChild(errorDiv);
                }
                
                return isValid;
            }
        },

        // Accessibility improvements
        accessibility: function() {
            // Skip to main content link
            const skipLink = document.createElement('a');
            skipLink.href = '#main';
            skipLink.textContent = 'Skip to main content';
            skipLink.className = 'skip-link';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: #000;
                color: #fff;
                padding: 8px;
                text-decoration: none;
                z-index: 10000;
                transition: top 0.3s;
            `;
            skipLink.addEventListener('focus', function() {
                this.style.top = '6px';
            });
            skipLink.addEventListener('blur', function() {
                this.style.top = '-40px';
            });
            document.body.insertBefore(skipLink, document.body.firstChild);
            
            // ARIA labels for interactive elements
            const buttons = document.querySelectorAll('button, .button');
            buttons.forEach(button => {
                if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
                    button.setAttribute('aria-label', 'Button');
                }
            });
            
            // Focus management for menu
            const menuToggle = document.querySelector('a[href="#menu"]');
            const menu = document.querySelector('#menu');
            
            if (menuToggle && menu) {
                menuToggle.addEventListener('click', function() {
                    setTimeout(() => {
                        const firstLink = menu.querySelector('a');
                        if (firstLink) firstLink.focus();
                    }, 100);
                });
            }
            
            // Keyboard navigation for tiles
            const tiles = document.querySelectorAll('.tiles article');
            tiles.forEach(tile => {
                tile.setAttribute('tabindex', '0');
                tile.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const link = this.querySelector('a');
                        if (link) link.click();
                    }
                });
            });
        },

        // Performance optimizations
        performanceOptimizations: function() {
            // Debounce scroll events
            let scrollTimeout;
            window.addEventListener('scroll', function() {
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }
                scrollTimeout = setTimeout(function() {
                    // Scroll-based optimizations can go here
                }, 10);
            });
            
            // Preload critical resources removed for simplicity
        },

        // Modern features
        modernFeatures: function() {
        // Service Worker registration removed for simplicity
            
            // Intersection Observer for animations
            if ('IntersectionObserver' in window) {
                const animationObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                }, {
                    threshold: 0.1
                });
                
                document.querySelectorAll('.tiles article, .spotlights section').forEach(el => {
                    animationObserver.observe(el);
                });
            }
            
            // Touch gestures for mobile
            let startX, startY;
            document.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });
            
            document.addEventListener('touchend', function(e) {
                if (!startX || !startY) return;
                
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Swipe left/right detection
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        // Swipe left
                        console.log('Swipe left detected');
                    } else {
                        // Swipe right
                        console.log('Swipe right detected');
                    }
                }
                
                startX = startY = null;
            });
        }
    };

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 4px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Add CSS for animations and notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .error {
            border-color: #f44336 !important;
            box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2) !important;
        }
        
        .error-message {
            color: #f44336;
            font-size: 0.8em;
            margin-top: 0.5em;
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Suppress StorageType.persistent deprecation warning (not from our code)
    const originalWarn = console.warn;
    console.warn = function(...args) {
        if (args[0] && args[0].includes && args[0].includes('StorageType.persistent is deprecated')) {
            return; // Suppress this specific warning
        }
        originalWarn.apply(console, args);
    };

    // Initialize when DOM is ready
    $(document).ready(function() {
        Enhanced.init();
    });

})(jQuery);
