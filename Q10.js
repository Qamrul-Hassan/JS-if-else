/* 10. Number Guessing game
Write a simple number guessing game */

let secretNumber = 7;
let guess = 7;

if (guess === secretNumber) {
    console.log ("Congratulations ! You guessed the correct number. ");
} else if (guess < secretNumber) {
    console.log ("try a higher number. ");
} else {
    console.log (" Try a lower number. ");
}