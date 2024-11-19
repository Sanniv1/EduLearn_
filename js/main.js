// Add loading indicator
window.addEventListener('beforeunload', () => {
  document.body.classList.add('loading');
});

// Remove loading indicator
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
}); 