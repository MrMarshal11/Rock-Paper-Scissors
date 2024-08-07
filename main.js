// gets computer choice
function getComputerChoice() { 
    let num = Math.random()
        if (num <= 0.33) {
            return 'rock'
        }
        if (num < 0.66 && num > 0.33) {
            return 'paper'
        }
        if (num >= 0.66) {
            return 'scissors'
        }
}

// prompts user to enter choice
function getHumanChoice() {
    let result = prompt('Rock, Paper, Scissors!')
    let resultModified = result.toLowerCase();
        return resultModified;
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    console.log("computer says " + getComputerChoice());
    console.log("you say " + getHumanChoice());
}

playRound();


    //     if (resultModified != "rock" && resultModified != "paper" && resultModified != "scissors") {
    //     console.log('thefucareyoudoingmate')
    // }   else {