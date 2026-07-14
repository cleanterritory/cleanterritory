document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .feature, .why-image').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.is-visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
