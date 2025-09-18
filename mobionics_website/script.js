// Contact form handler (for contact.html and index.html)
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting Mobionics! We will get back to you soon.');
            this.reset();
        });
    }

    // Theme toggle
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light');
            if(document.body.classList.contains('light')) {
                themeToggle.textContent = '🌞';
            } else {
                themeToggle.textContent = '🌙';
            }
        });
    }

    // Fade-in animation for sections
    document.querySelectorAll('.fade-in').forEach(function(el, i) {
        el.style.animationDelay = (0.2 + i * 0.2) + 's';
    });

    // Highlight nav link for current page
    var navLinks = document.querySelectorAll('nav a');
    var path = window.location.pathname.split('/').pop();
    navLinks.forEach(function(link) {
        if (link.getAttribute('href').includes(path)) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});