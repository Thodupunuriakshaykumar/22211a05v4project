const ctaBtn = document.getElementById('cta-btn');

ctaBtn.addEventListener('click', function(e) {
  // Morphing animation
  ctaBtn.classList.add('morphing');
  setTimeout(() => {
    ctaBtn.classList.remove('morphing');
  }, 700);

  // Ripple effect
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = e.offsetX + 'px';
  ripple.style.top = e.offsetY + 'px';
  ctaBtn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);

  // Smooth scroll to top (simulate launch)
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add morphing and ripple styles dynamically
const style = document.createElement('style');
style.innerHTML = `
.cta-morph.morphing {
  animation: morphPulse 0.7s cubic-bezier(.4,2,.3,1);
}
@keyframes morphPulse {
  0% { border-radius: 2.5rem; transform: scale(1); }
  30% { border-radius: 3.5rem 1.5rem 3.5rem 1.5rem/1.5rem 3.5rem 1.5rem 3.5rem; transform: scale(1.12) rotate(-2deg); }
  60% { border-radius: 1.5rem 3.5rem 1.5rem 3.5rem/3.5rem 1.5rem 3.5rem 1.5rem; transform: scale(0.96) rotate(1deg); }
  100% { border-radius: 2.5rem; transform: scale(1); }
}
.cta-morph .ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-anim 0.6s linear;
  background: rgba(255,255,255,0.5);
  pointer-events: none;
  width: 120px;
  height: 120px;
  left: 50%;
  top: 50%;
  margin-left: -60px;
  margin-top: -60px;
  z-index: 1;
}
@keyframes ripple-anim {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
`;
document.head.appendChild(style); 