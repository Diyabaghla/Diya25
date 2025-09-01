// script.js
// document.getElementById('burger').addEventListener('click', () => {
//     document.getElementById('navLinks').classList.toggle('active');
//   });
//   // Accordion toggle for Education
// document.querySelectorAll('.accordion-btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//       const item = btn.parentElement;
//       item.classList.toggle('active');
//     });
//   });
// Toggle navigation menu on burger click
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Accordion toggle for Education section
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Optional: Close other accordions
    accordionButtons.forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.parentElement.classList.remove('active');
      }
    });

    // Toggle current one
    btn.parentElement.classList.toggle('active');
  });
});

  