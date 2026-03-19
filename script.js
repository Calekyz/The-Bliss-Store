// Age Verification
document.addEventListener('DOMContentLoaded', function() {
    // Check if age already verified in this session
    if (!sessionStorage.getItem('ageVerified')) {
        document.getElementById('ageModal').style.display = 'flex';
    } else {
        document.getElementById('ageModal').style.display = 'none';
    }
});

function verifyAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }
    
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (age >= 18) {
        sessionStorage.setItem('ageVerified', 'true');
        document.getElementById('ageModal').style.display = 'none';
    } else {
        alert('You must be 18 or older to enter this site');
        window.location.href = 'https://www.google.com';
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Cart functionality (will connect to backend later)
let cart = [];

function addToCart(productId) {
    // For now, just show a message
    alert('Product added to cart! (This will connect to backend soon)');
    
    // Update cart count
    updateCartCount();
}

function updateCartCount() {
    // This will be replaced with actual cart count from backend
    document.querySelector('.cart-count').textContent = '1';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#0A0A0A';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'var(--secondary)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});

// Chatbot click
function openChat() {
    alert('Chat support coming soon! For now, call us at +254 700 000 000');
}

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        const image = entry.target;
        image.src = image.src; // Already has src, but could add data-src later
        imageObserver.unobserve(image);
    });
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});

// Newsletter signup (if you add a newsletter)
function subscribeNewsletter() {
    const email = prompt('Enter your email for exclusive offers:');
    if (email) {
        alert('Thanks for subscribing! Check your email for a welcome offer.');
    }
}
