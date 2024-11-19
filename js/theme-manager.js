document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initializeTheme();
    
    // Settings page specific theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Add click event listener
    themeToggle?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
});

function initializeTheme() {
    // Check for saved theme preference
    const darkMode = localStorage.getItem('darkMode');
    
    // Apply theme based on saved preference
    if (darkMode === 'true') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.src = isDark ? '../assets/light-theme.svg' : '../assets/dark-theme.svg';
    }
} 