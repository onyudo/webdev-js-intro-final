"use strict";

const submissionBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");
// constant for guessMessage
// constant for currentGuess
// constant for computerGuess
// constant for guessHistory

// let the program choose a random number, an empty variable?
// let the program keep track of attempts, starting at zero
// let the program keep track of the number guessed and number of guesses, probably using an array

// function start the game
function startGame() {
    // define how the program picks a random number between 1-10
    // keep track of attempts?

    // gotta do something about the enabled/disbale state of the buttons?
}

function restart() {
     // reset the program to start the game function
}

// function check guess. Have to check the guess input vs the randomly selected number
function checkGuess() {

    // const player guess, input value

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