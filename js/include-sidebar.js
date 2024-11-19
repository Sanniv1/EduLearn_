document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the index page
    const isIndexPage = window.location.pathname === '/' || 
                       window.location.pathname === '/index.html';

    // Use different path for index page vs other pages
    const sidebarPath = isIndexPage 
        ? '/components/sidebar.html' 
        : '../components/sidebar.html';

    fetch(sidebarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
            
            // Set active link based on current page
            const currentPath = window.location.pathname;
            const sidebarLinks = document.querySelectorAll('.sidebar-links .link');
            
            sidebarLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href) {
                    // Check if it's the home page
                    if ((currentPath === '/' || currentPath === '/index.html') && 
                        (href === '/' || href === '/index.html')) {
                        link.classList.add('active');
                    }
                    // Check other pages
                    else if (currentPath.includes(href) && href !== '/') {
                        link.classList.add('active');
                    }
                }
            });

            // Initialize navigation functionality
            initializeNavigation();
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
});

function initializeNavigation() {
    const toggleBtn = document.querySelector('.toggle-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
    const hiddenElements = document.querySelectorAll('.hidden');

    toggleBtn?.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        hiddenElements.forEach(el => el.classList.toggle('hidden'));
    });
} 