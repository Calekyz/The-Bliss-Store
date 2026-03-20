// Age Verification - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, checking age verification...'); // Debug log
    
    // Make sure the modal element exists
    const ageModal = document.getElementById('ageModal');
    if (!ageModal) {
        console.error('Age modal element not found! Make sure you have an element with id="ageModal"');
        return;
    }
    
    // Check if age already verified in this session
    const isVerified = sessionStorage.getItem('ageVerified');
    console.log('Age verified status:', isVerified); // Debug log
    
    if (!isVerified) {
        ageModal.style.display = 'flex';
        ageModal.style.visibility = 'visible'; // Ensure visibility
        console.log('Showing age modal'); // Debug log
    } else {
        ageModal.style.display = 'none';
        console.log('Age already verified, modal hidden'); // Debug log
    }
});

function verifyAge() {
    console.log('verifyAge function called'); // Debug log
    
    const dobInput = document.getElementById('dob');
    if (!dobInput) {
        console.error('Date of birth input not found! Make sure you have an element with id="dob"');
        alert('System error. Please refresh the page and try again.');
        return;
    }
    
    const dob = dobInput.value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }
    
    console.log('Date of birth entered:', dob); // Debug log
    
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    console.log('Calculated age:', age); // Debug log
    
    if (age >= 18) {
        sessionStorage.setItem('ageVerified', 'true');
        const ageModal = document.getElementById('ageModal');
        if (ageModal) {
            ageModal.style.display = 'none';
            console.log('Age verified, modal closed'); // Debug log
        }
    } else {
        alert('You must be 18 or older to enter this site');
        // Redirect to Google or a "not allowed" page
        window.location.href = 'https://www.google.com';
    }
}

// Optional: Allow pressing Enter in the date input to verify
document.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dob');
    if (dobInput) {
        dobInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                verifyAge();
            }
        });
    }
});

// Rest of your existing code continues below...
// (Keep all your other functions like toggleMenu, addToCart, etc. unchanged)
