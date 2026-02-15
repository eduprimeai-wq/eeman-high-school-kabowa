// Init Animations
AOS.init({ duration: 1000, once: true });

// Mobile Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Q&A Bot
function askBot() {
    const q = document.getElementById('userQ').value;
    const msg = document.getElementById('botMsg');
    if (!q) return;
    
    msg.innerText = "Processing...";
    setTimeout(() => {
        msg.innerHTML = `<strong>Response:</strong> Our office will contact you soon regarding your query. For urgent matters, call 0706 221131.`;
        msg.style.color = "#6A0DAD";
    }, 1000);
}

// Enrollment Form
document.getElementById('enrollForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your application has been submitted. Our office will contact you soon.");
    e.target.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});