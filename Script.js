// Contoh sederhana: efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Bisa ditambah animasi fade-in ketika scroll, dll
console.log("Website Proklamasi siap!");
