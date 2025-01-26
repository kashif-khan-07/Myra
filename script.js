// Function to calculate the number of days since the last conversation
  function calculateTimeSince(lastDate) {
    const now = new Date();
    const lastDateTime = new Date(lastDate);
    const timeDifference = now - lastDateTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  }

  // Date of the last conversation
  const lastConversationDate = "2025-01-17T16:34:45";

  // Update time dynamically
  function updateTime() {
    const timeSince = calculateTimeSince(lastConversationDate);
    document.getElementById('days-since').innerText = timeSince;
  }

  updateTime();
  setInterval(updateTime, 1000);


// Slideshow functionality
let slideIndex = 0;
let slideshowPaused = false;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');

  // Ensure the index wraps around
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // Hide all slides
  slides.forEach((slide) => slide.classList.remove('active'));

  // Show the current slide
  slides[slideIndex].classList.add('active');
}

function showSlides() {
  if (!slideshowPaused) {
    slideIndex++;
    showSlide(slideIndex);
  }

  // Repeat every 4 seconds
  setTimeout(showSlides, 4000);
}

// Start the slideshow
showSlides();

// Pause slideshow on hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', () => {
  slideshowPaused = true;
});
slideshowContainer.addEventListener('mouseout', () => {
  slideshowPaused = false;
});

// Handle Next and Back buttons
document.getElementById('next-btn').addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});

document.getElementById('back-btn').addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});







// Interactive apologize button functionality
document.getElementById('apologize-btn').addEventListener('click', function() {
  alert("I’m really sorry JAAN. Please forgive me! I LOVE YOU PLEASE DON'T LEAVE ME in time capsule there is drive I have made which has all our memories till now. Please do visit it. Its restricted for security purpose. I will grant you access ASAP. I hope my hard work reaches to you.");
  document.getElementById('animation-box').style.backgroundColor = "#2ed573"; // Change color to show progress
});
