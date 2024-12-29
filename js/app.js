//"use strict";

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
// let the program keep track of attempts, starting at zero
// let the program keep track of the number guessed, probably using an array

// function start the game
function startGame() {
    // define how the program picks a random number between 1-10
    // keep track of attempts?

    // gotta do something about the enabled/disbale state of the buttons?
}

// reset the program to start the game function
function restart() {
     startGame();
}

// function check guess. Have to check the guess input vs the randomly selected number
function checkGuess() {

    // constant for player guess, input value

    // Validate that the input is a number, use isNAN

    // Increment the guess counter
    // Push the number to the list keeping track of guesses

    // Update the guess history?

    // Check if the input guess is correct
        // is guess equal to random number?
        // if yes: "you win" or whatever and end the game
        // else if not correct and number of guess is greater than or equal to 3 "you loose, the number was x"
        // else your input was too low or too high, guess input compared to randomly chosen number
}

// function for ending the game?

// handle the submit button click
submissionBtn.addEventListener("click", function () {
    checkGuess();
});

// handle the restart button click
restartBtn.addEventListener("click", function () {
    restart();
});

// Function to start the game when the page is loaded
startGame();