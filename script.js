// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Effect on Projects
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});

// Form Validation for Contact
document.querySelector('form').addEventListener('submit', function(e) {
    const emailField = document.querySelector('input[type="email"]');
    const email = emailField.value;
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
