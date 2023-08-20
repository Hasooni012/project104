// generation of random value




// count of attempts
// until hit
  
// function for the number sent by the user
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");

guessButton.addEventListener("click", checkGuess);

function checkGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        message.textContent = "Please enter a valid number between 1 and 10.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        guessButton.disabled = true;
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = "Try a higher number.";
    } else {
        message.textContent = "Try a lower number.";
    }
}
