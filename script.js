// Scroll to form function
function scrollToForm() {
    const form = document.getElementById('booking-form');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Form submission
function submitForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Get form values
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        nights: formData.get('nights'),
        guests: formData.get('guests'),
        resort: formData.get('resort')
    };

    // Log form data (in production, this would be sent to a server)
    console.log('Form submitted with data:', data);

    // Show success modal
    showModal();

    // Reset form
    form.reset();

    // In production, you would send this data to your server:
    // fetch('/api/submit-booking', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // }).then(response => response.json())
    // .then(result => {
    //     showModal();
    //     form.reset();
    // });
}

// Modal functions
function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeModal();
    }
}

// FAQ toggle function
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const wasActive = faqItem.classList.contains('active');

    // Close all FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current item
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 0) {
                if (value[0] === '8') {
                    value = '7' + value.slice(1);
                }
                if (value[0] !== '7') {
                    value = '7' + value;
                }
            }

            let formatted = '';
            if (value.length > 0) {
                formatted = '+7';
                if (value.length > 1) {
                    formatted += ' (' + value.slice(1, 4);
                }
                if (value.length > 4) {
                    formatted += ') ' + value.slice(4, 7);
                }
                if (value.length > 7) {
                    formatted += '-' + value.slice(7, 9);
                }
                if (value.length > 9) {
                    formatted += '-' + value.slice(9, 11);
                }
            }

            e.target.value = formatted;
        });
    }

    // Date input - set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const formattedDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', formattedDate);
    }

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.benefit-card, .hotel-card, .resort-card, .stage-item, .about-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add header on scroll (optional)
let lastScroll = 0;
const header = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.filter = 'brightness(0.95)';
    } else {
        header.style.filter = 'brightness(1)';
    }

    lastScroll = currentScroll;
});

// Countdown timer (optional - can be enabled for urgency)
function updateCountdown() {
    // Set end date for first stage of early booking
    const endDate = new Date('2025-12-31T23:59:59').getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Update countdown elements if they exist on page
        const countdownElements = document.querySelectorAll('.countdown-timer');
        countdownElements.forEach(el => {
            el.innerHTML = `${days}д ${hours}ч ${minutes}мин`;
        });
    }, 1000);
}

// Initialize countdown
updateCountdown();

// Form validation
function validateForm() {
    const form = document.getElementById('tourForm');
    const name = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const date = form.querySelector('#date').value;

    let isValid = true;
    let errorMessage = '';

    if (name.length < 2) {
        isValid = false;
        errorMessage = 'Пожалуйста, введите корректное имя';
    } else if (phone.length < 16) {
        isValid = false;
        errorMessage = 'Пожалуйста, введите корректный номер телефона';
    } else if (!date) {
        isValid = false;
        errorMessage = 'Пожалуйста, выберите желаемую дату вылета';
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}

// Lazy loading images (if using many images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Resize handler
const handleResize = debounce(() => {
    // Add any resize-specific logic here
    console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// Export functions for global scope
window.scrollToForm = scrollToForm;
window.submitForm = submitForm;
window.toggleFaq = toggleFaq;
window.closeModal = closeModal;
