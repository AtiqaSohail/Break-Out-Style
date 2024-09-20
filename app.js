let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Add event listeners to navigation buttons
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Function to show the previous slide
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Function to show the next slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Show the first slide initially
slides[currentSlide].classList.add('active');