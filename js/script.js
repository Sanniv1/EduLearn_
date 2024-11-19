const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.toggle-sidebar-btn');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  // Save theme preference
  localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

// Sidebar Toggle
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
});

// Initialize sidebar as expanded on desktop
if (window.innerWidth > 768) {
  sidebar.classList.add('expanded');
}

// Optional: Collapse sidebar on mobile by default
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('expanded');
  } else {
    sidebar.classList.add('expanded');
  }
});
