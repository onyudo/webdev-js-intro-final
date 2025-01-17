"use strict";

const submissionBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");
// constant for guessMessage
const guessMessage = document.getElementById("guess-message");
// constant for currentGuess
const currentGuess = document.getElementById("current-guess");
// constant for computerGuess
const computerGuess = document.getElementById("computer-guess");
// constant for guessHistory
const guessHistory = document.getElementById("guess-history");

// let the program choose a random number, an empty variable?
let randomNumber;

// let the program keep track of attempts, starting at zero
let attempts = 0;

// let the program keep track of the numbers guessed, probably using an array
// will need to push guesses into this array and output them, probably in the checkGuess function. YES, YOU WILL
let guessHistoryList = [];

// function start the game
function startGame() {

    // define how the program picks a random number between 1-10
    /*
    Math.random(): Generates a random number between 0 and 1, i.e., 0.2346
    * 10: Multiplies the random number by 10, giving a range between 0 and 10, i.e., 2.346
    Math.floor(): Rounds the number down to the nearest whole number, giving a range between 0 and 9, i.e., 2
    + 1: Adds 1 to shift the range to 1 and 10, i.e., 3
    */
    randomNumber = Math.floor(Math.random() * 10) + 1;

    // keep track of attempts? starts at zero at game start
    // do I really need this since I declare the same value above?
    // might be necessary since I am saying that the restart function calls the startGame function
    attempts = 0; // reset attempts? YES, LEAVE THIS

    // Do I need to clear off other display messages and variables from a previous game?
    // YES, I DO
    // Reset guess history array
    guessHistoryList = [];
    // Reset guess message
    guessMessage.innerText = "";
    // Reset curent guess
    currentGuess.innerText = "";
    // Reset computer guess
    computerGuess.innerText = "";
    // Resets guess history
    guessHistory.innerText = "";
    // Clears guess input field
    guessInput.value = "";  
    
    // gotta do something about the enabled/disbale state of the buttons?
    // Button initial states at start of game
    submissionBtn.disabled = false;
    restartBtn.disabled = true;
}

// reset the program to start the game function
function restart() {
     startGame();
}

// function check guess. Have to check the guess input vs the randomly selected number
function checkGuess() {

    // constant for player guess, input value
    // get the value from the guessInput field, convert that value (which is a string) into a number, and then assign the result to the variable playerGuess
    // allow decimal numbers to be parsed, but we'll still reject them using !Number.isInteger(playerGuess)
    const playerGuess = parseFloat(guessInput.value);

    // Validate that the input is a number and a number in the correct range, use isNaN
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10 || !Number.isInteger(playerGuess)) {
        guessMessage.innerText = "Please enter a whole number between 1 and 10 without decimals.";
        return;
    }

    // Increment the guess counter
    attempts++;

    // Push the number to the array keeping track of guesses
    guessHistoryList.push(playerGuess);

    // Update the guess history?
    guessHistory.innerText = guessHistoryList.join(", ");

    // Check if the input guess is correct
    // is guess equal to random number?
    if (playerGuess === randomNumber) {
        // if yes: "you win" or whatever and end the game
        guessMessage.innerText = "Congratulations! You guessed the correct number!";
        currentGuess.innerText = playerGuess;
        computerGuess.innerText = randomNumber;
        endGame();
        // else if not correct and number of guesses is greater than or equal to 3 "you loose, the number was x"
        } else if (attempts >= 3) {
            // below: the message would not display with "" but worked when I used ``
            guessMessage.innerText =`Sorry, you've run out of attempts. The correct number was ${randomNumber}`;
            currentGuess.innerText = playerGuess;
            computerGuess.innerText = randomNumber;
            endGame();
        } else {
        // else your input was too low or too high, guess input compared to randomly chosen number, use ternary operator
        guessMessage.innerText = playerGuess < randomNumber ? "Too low!" : "Too high!";
        currentGuess.innerText = playerGuess;
        }
}

// function for ending the game. Disables the submit button and enables the restart button
function endGame() {
    submissionBtn.disabled = true;
    restartBtn.disabled = false;
}

// handle the submit button click
submissionBtn.addEventListener("click", function () {
    checkGuess();
});

// handle the restart button click
restartBtn.addEventListener("click", function () {
    restart();
});

// Function to start the game when the page is loaded
startGame(); // Gameplay is set to start on page load