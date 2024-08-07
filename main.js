// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

let result = prompt('Rock, Paper, Scissors')

function getComputerChoice(choice) {
    let num = Math.random()
        if (num <= 0.33) {
            console.log('Rock')
        }
        if (num < 0.66 && num > 0.33) {
            console.log('Paper')
        }
        if (num >= 0.66) {
            console.log('Scissors')
        }
}

if (result != "rock" && result != "paper" && result != "scissors") {
    console.log('thefucareyoudoingmate')
}   else {
    console.log(getComputerChoice())
}