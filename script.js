// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark Mode
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
