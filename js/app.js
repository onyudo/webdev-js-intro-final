"use strict";

const submissionBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");

function restart() {
    count = 0; // reset the count to zero
    
}

function render() {
    restart();
}


submissionBtn.addEventListener("click", function () {
    render();
});

restartBtn.addEventListener("click", function () {
    restart();
});