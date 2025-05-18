// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu-toggle') && 
            !e.target.closest('.nav-links') && 
            navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // FAQ filtering functionality
    const filterButtons = document.querySelectorAll('.faq-filters .filter-button');
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Apply filter
            faqItems.forEach(item => {
                // Get item's group
                const itemGroup = item.getAttribute('data-group');
                
                // Apply fade effect and filter
                if (filter !== 'all' && itemGroup !== filter) {
                    // Fade out
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    // Hide after animation completes
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                } else {
                    // Show and fade in
                    if (item.style.display === 'none') {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.display = 'block';
                        
                        // Force reflow
                        void item.offsetWidth;
                        
                        // Fade in
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }
                }
            });
        });
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle i');
            
            // Check if this question is already active
            const isActive = this.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = '0';
                    q.querySelector('.faq-toggle i').className = 'fa fa-plus';
                }
            });
            
            // Toggle current answer
            if (isActive) {
                this.classList.remove('active');
                answer.style.maxHeight = '0px';
                toggle.className = 'fa fa-plus';
            } else {
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                toggle.className = 'fa fa-minus';
            }
        });
    });

  // Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            
            // Special handling for contact section
            if (targetId === '#contact') {
                // Get the form element inside the contact section
                const contactForm = targetElement.querySelector('.contact-form');
                const formBottom = targetElement.offsetTop + contactForm.offsetTop + contactForm.offsetHeight;
                
                // Custom smooth scroll with slower animation
                const startPosition = window.pageYOffset;
                const targetPosition = formBottom - window.innerHeight + 100; // 100px from bottom
                const distance = targetPosition - startPosition;
                let startTime = null;
                const duration = 1500; // Longer duration (1.5 seconds) for smoother scrolling
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const scrollY = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, scrollY);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }
                
                // Easing function for smoother animation
                function easeInOutQuad(t, b, c, d) {
                    t /= d/2;
                    if (t < 1) return c/2*t*t + b;
                    t--;
                    return -c/2 * (t*(t-2) - 1) + b;
                }
                
                requestAnimationFrame(animation);
            } else {
                // Original behavior for other anchor links
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        }
    });
});

  const contactForm = document.getElementById('contactForm');
    
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent default form submission
          
          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalButtonText = submitButton.textContent;
          submitButton.textContent = 'Sending...';
          submitButton.disabled = true;
          
          // Create form data object from the form
          const formData = new FormData(contactForm);
          
          // Send the form data to Formspree via AJAX
          fetch('https://formspree.io/f/xpwddqzg', {
              method: 'POST',
              body: formData,
              headers: {
                  'Accept': 'application/json'
              }
          })
          .then(response => response.json())
          .then(data => {
              if (data.ok) {
                  // Success - show thank you message
                  contactForm.innerHTML = '<div class="success-message"><h3>Thank you!</h3><p>Your message has been sent successfully. We\'ll get back to you soon!</p></div>';
              } else {
                  // Error - show error message
                  throw new Error('Form submission failed');
              }
          })
          .catch(error => {
              contactForm.innerHTML += '<div class="error-message"><p>Sorry, there was a problem sending your message. Please try again later or contact us directly.</p></div>';
              console.error('Error:', error);
          })
          .finally(() => {
              // Reset button state
              submitButton.textContent = originalButtonText;
              submitButton.disabled = false;
          });
      });
  }

    // Get header element
    const header = document.querySelector('.header');

    // Modify logo HTML to include both logos
    const logoContainer = document.querySelector('.logo');
    const currentLogoImg = logoContainer.querySelector('img');
    const mainLogoSrc = currentLogoImg.getAttribute('src');

    // Create structure with both logos
    logoContainer.innerHTML = `
        <a href="/">
            <img src="${mainLogoSrc}" class="main-logo" alt="Circuit Auction">
            <img src="img/4.webp" class="small-logo" alt="Circuit Auction">
        </a>
    `;

    // Get all elements with animation classes
    const scrollElements = document.querySelectorAll('.scroll-reveal, .fade-in-left, .fade-in-right, .counter-element, .benefit');

    /**
     * Check if element is in viewport
     * @param {HTMLElement} el - The element to check
     * @param {number} percentageScroll - Percentage of element that needs to be visible
     * @returns {boolean} - Whether element is in view
     */
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        
        // Element is partially in view
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)) &&
            elementBottom >= 0
        );
    };

    /**
     * Add revealed class to element
     * @param {HTMLElement} element - The element to reveal
     */
    const displayScrollElement = (element) => {
        element.classList.add('revealed');
    };

    /**
     * Remove revealed class from element
     * @param {HTMLElement} element - The element to hide
     */
    const hideScrollElement = (element) => {
        element.classList.remove('revealed');
    };

    /**
     * Counter animation function
     * @param {HTMLElement} element - The counter element to animate
     */
    function animateCounter(element) {
    const counterNumber = element.querySelector('.counter-number');
    const targetNumber = parseInt(counterNumber.textContent.replace(/,/g, '')); // Remove any existing commas
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);
    const increment = targetNumber / totalFrames;
    
    let currentNumber = 0;
    const counter = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber >= targetNumber) {
            clearInterval(counter);
            // Format the final number with commas
            counterNumber.textContent = targetNumber.toLocaleString('en-US');
        } else {
            // Format the current number with commas during animation
            counterNumber.textContent = Math.floor(currentNumber).toLocaleString('en-US');
        }
    }, 1000 / frameRate);
}

    /**
     * Handle scroll animation for all elements
     */
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
                
                // Check if this is a counter element and hasn't been animated yet
                if (el.classList.contains('counter-element') && !el.classList.contains('counted')) {
                    animateCounter(el);
                    el.classList.add('counted'); // Mark as counted to prevent re-animation
                }
            } else {
                // Uncomment if you want elements to hide when scrolled out of view
                // hideScrollElement(el);
            }
        });
    };

    /**
     * Handle header shrinking when scrolling
     */
    const handleHeaderScroll = () => {
        // Add scrolled class when page is scrolled
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } 
        // Remove scrolled class when back at top
        else {
            header.classList.remove('scrolled');
        }
    };

    // Throttle function to limit how often a function is called
    const throttle = (callback, delay) => {
        let lastTime = 0;
        return function() {
            const now = new Date().getTime();
            if (now - lastTime >= delay) {
                callback();
                lastTime = now;
            }
        };
    };

    // Throttled scroll handlers for better performance
    const throttledHeaderScroll = throttle(handleHeaderScroll, 10);
    const throttledScrollAnimation = throttle(handleScrollAnimation, 100);

    /**
     * Scroll event handler
     */
    window.addEventListener('scroll', () => {
        throttledHeaderScroll();
        throttledScrollAnimation();
    });

    // Handle resize events
    window.addEventListener('resize', throttle(() => {
        handleScrollAnimation();
    }, 100));

    // Initialize animations for elements that are already in view
    handleScrollAnimation();
    handleHeaderScroll();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Preload animations (wait for page load)
    window.addEventListener('load', () => {
        // Small delay to ensure CSS transitions work
        setTimeout(() => {
            handleScrollAnimation();
        }, 100);
    });

    // Testimonial Slider Functionality
    const testimonialSlider = {
        currentSlide: 0,
        autoSlideInterval: null,
        slides: document.querySelectorAll('.testimonial-slide'),
        dots: document.querySelectorAll('.testimonial-dot'),
        prevBtn: document.querySelector('.testimonial-prev'),
        nextBtn: document.querySelector('.testimonial-next'),
        
        init: function() {
            if (!this.slides.length) return;
            
            // Set initial active slide
            this.showSlide(this.currentSlide);
            
            // Event listeners
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            
            // Add click events to dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goToSlide(index));
            });
            
            // Start auto slide
            this.startAutoSlide();
            
            // Pause auto slide on hover
            const sliderContainer = document.querySelector('.testimonial-slider-container');
            sliderContainer.addEventListener('mouseenter', () => this.stopAutoSlide());
            sliderContainer.addEventListener('mouseleave', () => this.startAutoSlide());
        },
        
        showSlide: function(index) {
            // Remove all classes from all slides
            this.slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev', 'next');
                if (i < index) {
                    slide.classList.add('prev');
                } else if (i > index) {
                    slide.classList.add('next');
                }
            });
            
            // Add active class to current slide
            this.slides[index].classList.add('active');
            
            // Update active dot
            this.dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            // Update current slide index
            this.currentSlide = index;
        },
        
        nextSlide: function() {
            const newIndex = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(newIndex);
        },
        
        prevSlide: function() {
            const newIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.showSlide(newIndex);
        },
        
        goToSlide: function(index) {
            if (index >= 0 && index < this.slides.length) {
                this.showSlide(index);
            }
        },
        
        startAutoSlide: function() {
            this.stopAutoSlide(); // Clear any existing interval
            this.autoSlideInterval = setInterval(() => this.nextSlide(), 10000); // 10 seconds
        },
        
        stopAutoSlide: function() {
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
            }
        }
    };
    
    // Initialize the testimonial slider if it exists on the page
    if (document.querySelector('.testimonial-slider')) {
        testimonialSlider.init();
    }
});

// Back to top button functionality
const backToTopButton = document.querySelector('.back-to-top');

// Show button when page is scrolled down 300px
const toggleBackToTopButton = () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
};

// Add scroll event listener
window.addEventListener('scroll', toggleBackToTopButton);

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Smooth scroll to top with slow animation
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});