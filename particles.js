const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 120;
const COLORS = ['#3f5efb', '#6a82fb', '#1e3c72', '#283e51', '#00c6fb', '#005bea']; // blue shades
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const MOUSE_RADIUS = 120;
const REPEL_FORCE = 0.18;
let mouseActive = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.radius = Math.random() * 2.5 + 2;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.baseX = this.x;
    this.baseY = this.y;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.angle = Math.random() * Math.PI * 2;
    this.orbit = Math.random() * 100 + 60; // Increased orbit
    this.speed = Math.random() * 1.2 + 0.5; // Increased speed
    this.parallax = Math.random() * 0.12 + 0.04;
    this.vx = 0;
    this.vy = 0;
  }
  update() {
    // Parallax base position
    let px = this.baseX + (mouse.x - canvas.width/2) * this.parallax;
    let py = this.baseY + (mouse.y - canvas.height/2) * this.parallax;
    // Orbit (always animate)
    this.angle += this.speed * 0.002;
    px += Math.cos(this.angle) * this.orbit;
    py += Math.sin(this.angle) * this.orbit;
    // Repel from mouse only if mouseActive
    if (mouseActive) {
      let dx = px - mouse.x;
      let dy = py - mouse.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < MOUSE_RADIUS) {
        let force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
        let angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * force * REPEL_FORCE;
        this.vy += Math.sin(angle) * force * REPEL_FORCE;
      }
    }
    // Ease back to normal
    this.vx *= 0.92;
    this.vy *= 0.92;
    px += this.vx;
    py += this.vy;
    this.x = px;
    this.y = py;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function createParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
  if (!mouseActive) return;
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
canvas.addEventListener('mouseenter', () => {
  mouseActive = true;
});
canvas.addEventListener('mouseleave', () => {
  mouse.x = canvas.width / 2;
  mouse.y = canvas.height / 2;
  mouseActive = false;
});

createParticles();
animate(); 