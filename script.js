const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
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

// Scroll effects
const backBtn = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) backBtn.style.display = "block";
    else backBtn.style.display = "none";
};

backBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});

// Form Feedback
document.getElementById('contactForm').onsubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = 'Sent! <i class="bi bi-check-lg"></i>';
    btn.classList.replace('btn-primary', 'btn-success');
    setTimeout(() => {
        btn.innerHTML = 'Send Message';
        btn.classList.replace('btn-success', 'btn-primary');
        e.target.reset();
    }, 3000);
};