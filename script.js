// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('.section, .hero');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id') || (index === 0 ? 'home' : '');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeNav = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeNav) {
                    activeNav.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initialize on load

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    const planet = document.querySelector('.planet');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (hero && planet) {
            planet.style.transform = `translate(-50%, -50%) translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
        }
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const typeEffect = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeEffect);
            }
        }, 50);
    }

    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in effect to feature cards and other elements
    const animatedElements = document.querySelectorAll('.feature-card, .team-member, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add interactive hover effects for stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        stat.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Mobile menu toggle (if needed in future)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Add random floating particles effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(100, 181, 246, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: float-up ${5 + Math.random() * 10}s linear infinite;
        `;

        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }

    // Add CSS for floating particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            from {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .nav-links a.active {
            color: #64b5f6;
            position: relative;
        }
        
        .nav-links a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            height: 2px;
            background: #64b5f6;
            border-radius: 1px;
        }
        
        .btn-highlighted {
            animation: pulse-highlight 1.5s ease-in-out infinite;
            position: relative;
            z-index: 1000;
        }
        
        @keyframes pulse-highlight {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(100, 181, 246, 0.8);
                background: linear-gradient(135deg, #64b5f6, #42a5f5);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(100, 181, 246, 0);
                background: linear-gradient(135deg, #81c784, #4caf50);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(100, 181, 246, 0);
                background: linear-gradient(135deg, #64b5f6, #42a5f5);
            }
        }
    `;
    document.head.appendChild(style);

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Demo code copy functionality
    const copyDemoBtn = document.getElementById('copyDemoCode');

    if (copyDemoBtn) {
        copyDemoBtn.addEventListener('click', async function () {
            try {
                const response = await fetch('https://raw.githubusercontent.com/CelestialSim/web-demo/main/demo.slang');
                const demoCode = await response.text();

                await navigator.clipboard.writeText(demoCode);

                // Update button text to show success
                this.textContent = 'Code Copied! ✓';
                this.style.backgroundColor = '#4caf50';

                // Reset button after 3 seconds
                setTimeout(() => {
                    this.textContent = 'Copy Demo Code';
                    this.style.backgroundColor = '';
                }, 3000);

            } catch (error) {
                console.error('Failed to copy code:', error);

                // Fallback: show error message
                this.textContent = 'Copy Failed - Try Again';
                this.style.backgroundColor = '#f44336';

                // Reset button after 3 seconds
                setTimeout(() => {
                    this.textContent = 'Copy Demo Code';
                    this.style.backgroundColor = '';
                }, 3000);
            }
        });
    }

    // Handle URL parameters for button highlighting
    function handleButtonHighlight() {
        const urlParams = new URLSearchParams(window.location.search);
        const highlightParam = urlParams.get('highlight');

        if (highlightParam === 'copyBtn') {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                const copyBtn = document.getElementById('copyDemoCode');
                if (copyBtn) {
                    // Scroll to the button
                    copyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Add highlight effect
                    highlightButton(copyBtn);
                }
            }, 500);
        }
    }

    // Function to highlight the button with visual effects
    function highlightButton(button) {
        // Add highlight class
        button.classList.add('btn-highlighted');

        // Remove highlight after animation (longer duration for better visibility)
        setTimeout(() => {
            button.classList.remove('btn-highlighted');
        }, 6000); // Increased from 4000 to 6000ms
    }

    // Call the highlight handler on page load
    handleButtonHighlight();

    // Reddit embed script loading with optimization
    function loadRedditEmbeds() {
        // Check if Reddit embeds exist on the page
        const redditEmbeds = document.querySelectorAll('.reddit-embed-bq');

        if (redditEmbeds.length > 0) {
            // Check if script is already loaded
            if (!document.querySelector('script[src*="embed.reddit.com"]')) {
                const script = document.createElement('script');
                script.src = 'https://embed.reddit.com/widgets.js';
                script.async = true;
                script.charset = 'UTF-8';

                script.onload = function () {
                    console.log('Reddit embeds loaded successfully');
                };

                script.onerror = function () {
                    console.warn('Failed to load Reddit embeds');
                    // Optionally show fallback content
                    redditEmbeds.forEach(embed => {
                        const fallback = document.createElement('div');
                        fallback.className = 'reddit-embed-fallback';
                        fallback.innerHTML = '<p>Reddit embed temporarily unavailable. <a href="' +
                            embed.querySelector('a').href + '" target="_blank">View on Reddit</a></p>';
                        embed.parentNode.replaceChild(fallback, embed);
                    });
                };

                document.head.appendChild(script);
            }
        }
    }

    // Lazy load Reddit embeds when they come into view
    function initLazyRedditEmbeds() {
        const redditEmbeds = document.querySelectorAll('.reddit-embed-bq');

        if (redditEmbeds.length > 0 && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadRedditEmbeds();
                        observer.disconnect(); // Only load once
                    }
                });
            }, {
                rootMargin: '50px' // Load when 50px before entering viewport
            });

            redditEmbeds.forEach(embed => observer.observe(embed));
        } else {
            // Fallback for browsers without IntersectionObserver
            loadRedditEmbeds();
        }
    }

    // Initialize lazy loading instead of immediate loading
    initLazyRedditEmbeds();

    // Console message for developers
    console.log(`
    🌍 CelestialSim - Advanced Procedural Planet Simulation
    
    Thanks for checking out our organization website!
    
    GitHub: https://github.com/celestialsim
    Features: Dynamic LOD, Water Simulation, Ecosystem Generation
    
    Built with passion for graphics and simulation technology.
    `);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function () {
        setTimeout(function () {
            const timing = performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }, 0);
    });
}

// Add smooth transitions for better UX
document.addEventListener('DOMContentLoaded', function () {
    // Add transition classes to elements
    const elements = document.querySelectorAll('.btn, .feature-card, .team-member, .contact-link');
    elements.forEach(el => {
        el.style.transition = 'all 0.3s ease';
    });
});
