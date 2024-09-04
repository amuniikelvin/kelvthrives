// JavaScript to handle the menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  if (navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
  } else {
    navLinks.classList.add('show');
  }
});

// Smooth Scroll with Scroll Spy
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close the menu after clicking on a link (for mobile)
    if (window.innerWidth <= 768) {
      document.getElementById('nav-links').classList.remove('show');
    }
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolled down
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
