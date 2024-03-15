const numSeatsSelect = document.getElementById('num-seats');
const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');
const seniorsInput = document.getElementById('seniors');
const calculateButton = document.getElementById('calculate-button');
const totalPriceSpan = document.getElementById('total-amount');
const errorMessageDiv = document.getElementById('error-message');

// Update the number of seats options dynamically (same as before)

calculateButton.addEventListener('click', function() {
  const numSeats = parseInt(numSeatsSelect.value);
  const adults = parseInt(adultsInput.value);
  const children = parseInt(childrenInput.value);
  const seniors = parseInt(seniorsInput.value);
  let totalPrice = 0;
  let errorMessage = "";

  // Validate passenger numbers
  if (adults + children + seniors > numSeats) {
    errorMessage = "Total number of passengers cannot exceed selected seats.";
  } else if (adults + children + seniors === 0) {
    errorMessage = "Please select at least one passenger.";
  }

  // Clear previous price on error
  if (errorMessage) {
    totalPriceSpan.textContent = 0;
  }

  // Calculate total price if no errors
  if (!errorMessage) {
    totalPrice = adults * parseInt(document.getElementById('adult-price').textContent) +
                 children * parseInt(document.getElementById('child-price').textContent) +
                 seniors * parseInt(document.getElementById('senior-price').textContent);
    totalPriceSpan.textContent = totalPrice;
  } else {
    // Display error message
    errorMessageDiv.style.display = 'block';
    errorMessageDiv.querySelector('p').textContent = errorMessage;

    // Add event listener for close button
    errorMessageDiv.querySelector('.close-button').addEventListener('click', function() {
      errorMessageDiv.style.display = 'none';
    });
  }
});