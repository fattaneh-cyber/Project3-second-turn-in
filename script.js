// Confirm the script has loaded successfully
console.log("script.js loaded successfully!");

// Add functionality for the picture slider
document.addEventListener('DOMContentLoaded', () => {
  // Select all movie items
  const movieItems = document.querySelectorAll('.movie-item');

  // If there are no movie items, exit early
  if (movieItems.length === 0) {
    console.log("No movie items found.");
    return;
  }

  let currentIndex = 0;

  // Function to show the current movie
  function showCurrentMovie() {
    movieItems.forEach((item, index) => {
      item.style.display = (index === currentIndex) ? 'block' : 'none';
    });
  }

  // Show the first movie on page load
  showCurrentMovie();

  // Function to move to the next movie
  function nextMovie() {
    currentIndex = (currentIndex + 1) % movieItems.length;
    showCurrentMovie();
  }

  // Function to move to the previous movie
  function prevMovie() {
    currentIndex = (currentIndex - 1 + movieItems.length) % movieItems.length;
    showCurrentMovie();
  }

  // Create navigation buttons for the slider
  const nextButton = document.createElement('button');
  nextButton.textContent = "Next Movie";
  nextButton.addEventListener('click', nextMovie);
  
  const prevButton = document.createElement('button');
  prevButton.textContent = "Previous Movie";
  prevButton.addEventListener('click', prevMovie);

  // Append the buttons below the movie section
  const movieSection = document.querySelector('#movie-slider');
  if (movieSection) {
    movieSection.appendChild(prevButton);
    movieSection.appendChild(nextButton);
  } else {
    console.log("Movie section not found.");
  }
});
