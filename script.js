const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animar');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.msg').forEach(msg => {
  observer.observe(msg);
});


