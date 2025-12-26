const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme Logic
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    toggle.innerText = '☀️';
}

toggle.onclick = () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        toggle.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggle.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    }
};

// Intersection Observer for Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// Form Submission
document.getElementById('contactForm').onsubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = 'Sending...';
    setTimeout(() => {
        btn.innerHTML = 'Message Sent! <i class="bi bi-check-circle"></i>';
        btn.className = "btn btn-success w-100 py-3 fw-bold";
        e.target.reset();
    }, 1500);
};

// Get the button
const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down 400px
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll to top when clicked
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};