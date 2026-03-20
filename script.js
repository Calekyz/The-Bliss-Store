// ===== AGE VERIFICATION - FIXED VERSION =====
// Make sure this runs immediately when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing age verification');
    
    // Get modal element
    const ageModal = document.getElementById('ageModal');
    
    // Check if modal exists
    if (!ageModal) {
        console.error('ERROR: Age modal not found! Check that id="ageModal" exists in HTML');
        return;
    }
    
    // Check if age already verified in THIS SESSION
    const isVerified = sessionStorage.getItem('ageVerified');
    console.log('Age verified in session:', isVerified);
    
    if (!isVerified) {
        // Show modal - ensure it's visible and clickable
        ageModal.style.display = 'flex';
        ageModal.style.visibility = 'visible';
        ageModal.style.opacity = '1';
        ageModal.style.zIndex = '9999';
        
        // Disable body scrolling when modal is open
        document.body.style.overflow = 'hidden';
        console.log('Age modal displayed');
    } else {
        // Hide modal if already verified
        ageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Age already verified, modal hidden');
    }
});

// Global function for age verification (called from HTML onclick)
window.verifyAge = function() {
    console.log('verifyAge function called');
    
    // Get date input
    const dobInput = document.getElementById('dob');
    if (!dobInput) {
        console.error('Date input not found!');
        alert('System error. Please refresh the page.');
        return;
    }
    
    const dob = dobInput.value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }
    
    console.log('Date of birth entered:', dob);
    
    // Calculate age
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    console.log('Calculated age:', age);
    
    // Check if 18 or older
    if (age >= 18) {
        // Store verification in session storage
        sessionStorage.setItem('ageVerified', 'true');
        console.log('Age verified - closing modal');
        
        // Hide modal
        const ageModal = document.getElementById('ageModal');
        if (ageModal) {
            ageModal.style.display = 'none';
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        }
    } else {
        alert('You must be 18 or older to enter this site. You will now be redirected.');
        window.location.href = 'https://www.google.com';
    }
};

// ===== MOBILE MENU =====
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// ===== CART FUNCTIONALITY =====
let cart = [];

function addToCart(productId) {
    // Show confirmation
    alert('Product added to cart! Checkout coming soon.');
    updateCartCount();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = cart.length;
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== STICKY NAVBAR =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = '#0A0A0A';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = '#1A1A1A';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        }
    }
});

// ===== CHATBOT =====
function openChat() {
    alert('Chat support coming soon! For orders, call us at +254 700 000 000');
}

// ===== LAZY LOADING =====
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            imageObserver.unobserve(img);
        }
    });
}, { threshold: 0, rootMargin: '0px 0px 50px 0px' });

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ===== NEWSLETTER (if added later) =====
function subscribeNewsletter() {
    const email = prompt('Enter your email for exclusive offers:');
    if (email && email.includes('@')) {
        alert('Thanks for subscribing! Check your email for a welcome offer.');
    } else if (email) {
        alert('Please enter a valid email address.');
    }
}

// ===== ENTER KEY SUPPORT FOR AGE MODAL =====
document.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dob');
    if (dobInput) {
        dobInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                window.verifyAge();
            }
        });
    }
});

console.log('Script loaded successfully');
