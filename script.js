function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show the target section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }

  // Update nav links
  document.querySelectorAll('.nav_link').forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });

  const activeLink = document.querySelector(`.nav_link[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
  }

  // Scroll to top
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Handle clicks on nav links and name link
document.addEventListener('DOMContentLoaded', () => {
  // Initialize default section
  showSection('places');

  // Intercept link clicks
  document.querySelectorAll('.nav_link, .name-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // prevent default jump
      const sectionId = link.getAttribute('href').substring(1); 
      showSection(sectionId);
    });
  });
});

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav_list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});



