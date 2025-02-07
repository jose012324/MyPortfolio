// Get current year
document.getElementById('currentYears').textContent = new Date().getFullYear();
document.getElementById('currentYear').textContent = new Date().getFullYear();
// Initialize AOS
AOS.init({
    duration: 1000,
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    follower.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
});

// Particle effect
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();


const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

sections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('fade-in');
});

        // Smooth scroll
        
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const typingText = new Typed('.typing-text', {
    strings: [
        'a Full Stack Developer',
        'a Problem Solver',
        'an Innovation Enthusiast'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});


// Disable Inspect Section
// Disable right click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            alert('You are not allowed to use this feature');
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            alert('You are not allowed to use this feature');
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            alert('You are not allowed to use this feature');
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            alert('You are not allowed to use this feature');
            return false;
        }
    }

    // Disable DevTools
    setInterval(() => {
        debugger;
    }, 100);

    // Clear console
    console.clear();
    
    // Disable viewing source
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && 
            (e.key === 'u' || 
            e.key === 'U' || 
            e.key === 's' || 
            e.key === 'S' || 
            e.key === 'i' || 
            e.key === 'I')) {
            e.preventDefault();
            alert('You are not allowed to use this feature');
            return false;
        }
    });

    // Disable c button
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('You are not allowed to use this feature');
        return false;
    });