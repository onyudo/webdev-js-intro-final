"use strict";

const submissionBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");
// constant for guessMessage
// constant for currentGuess
// constant for computerGuess
// constant for guessHistory

// let the program choose a random number
// let the program keep track of attempts, starting at zero
// let the program keep track of the number of guesses, probably using an array

// function start the game
    // define how the program picks a random number between 1-10
    // keep track of attempts?

    // gotta do something about the enabled/disbale state of the buttons?

// Function to start the game when the page is loaded

function restart() {
     // reset the program to start the game function
}

// Have to check the guess input vs the randomly selected number

    // Validate that the input is a number, use isNAN

    // Increment the guess counter
    // Push the number to the list keeping track of guesses

    // Update the guess history?

    // Check if the input guess is correct
        // guess equal to random number?
        // if yes: "you win" or whatever and end the game
        // else if not correct and number of guess is greater than or equal to 3 "you loose, the number was x"
        // else your input was too low or too high

// function for ending the game?

// handle the submit button click
submissionBtn.addEventListener("click", function () {
    checkGuess();
});

// handle the restart button click
restartBtn.addEventListener("click", function () {
    restart();
});