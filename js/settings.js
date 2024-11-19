document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    // Avatar Upload Preview
    const avatarUpload = document.getElementById('avatarUpload');
    const avatarPreview = document.getElementById('avatarPreview');

    if (avatarUpload && avatarPreview) {
        avatarUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    avatarPreview.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });
    }

    // Form Submission
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Profile updated successfully!');
        });
    }

    // Toggle Switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch input[type="checkbox"]');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', function() {
            // Add your toggle switch logic here
            const setting = this.closest('.toggle-switch').querySelector('.slider').textContent;
            console.log(`${setting} is now ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    
    // Set initial state based on localStorage
    if (themeToggle) {
        themeToggle.checked = localStorage.getItem('darkMode') === 'true';
        
        // Add event listener for instant theme toggle
        themeToggle.addEventListener('change', function() {
            // Immediately apply theme
            if (this.checked) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
            
            // Save to localStorage
            localStorage.setItem('darkMode', this.checked);
        });
    }
});

// Theme Toggle Handler
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });
    }
} 