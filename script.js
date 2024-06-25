// Function to generate a random number between 1 and 1000
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate the random number
  const randomNumber = getRandomNumber(1, 1000);

  window.onload = function() {
    // Update the content of the .random-number element
    document.querySelector('.random-number').textContent = randomNumber;
  };