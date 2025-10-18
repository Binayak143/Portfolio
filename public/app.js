// Typing Effect
const textArray = ["Front-end Developer ", "Creative Problem Solver"];
let index = 0, charIndex = 0;
const typingEl = document.querySelector(".typing");

function type() {
    if (charIndex < textArray[index].length) {
        typingEl.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingEl.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

// Particle Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffea';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}

// Initialize everything
window.addEventListener('DOMContentLoaded', () => {
    type();
    setCanvasSize();
    initParticles();
    animateParticles();
});

// Handle window resize
window.addEventListener('resize', () => {
    setCanvasSize();
    initParticles(); // Re-initialize particles on resize
});


// Dynamic Project Cards
const projects = [
    {
        title: "Electric Bill Generator",
        description: "Responsive web app to calculate and generate electric bills.",
        link: "https://electricity-bill.web.app/"
    },
    {
        title: "Hotel Bill Generator",
        description: "Interactive hotel billing system to generate invoices with real-time calculations.",
        link: "https://hotel-b6aa7.web.app/"
    },
    {
        title: "Result Publisher Software",
        description: "Web application to publish student exam results dynamically dashboard.",
        link: "https://result-publish-software-65e35.web.app/"
    },
    {

        title: "Smart Tip Calculator",
        description: "Quickly calculate the perfect tip for your hotel stay.",
        link: "https://hotal-tip-calculator.web.app/"
    },
    {

        title: "TODO LIST",
        description: "Add, edit, and track tasks easily with a responsive To-Do List app built using HTML, CSS, and JavaScript.",
        link: "https://todo-bb3ff.firebaseapp.com/"

    },

];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-5 col-lg-4";

    col.innerHTML = `
            <div class="project-card">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn-view">View Project</a>
            </div>
        `;

    container.appendChild(col);
});