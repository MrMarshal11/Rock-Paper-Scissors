// gets computer choice
function getComputerChoice() { 
    let num = Math.random();
    if (num < 0.33) {
        return 'rock';
    } else if (num < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// prompts user to enter choice
function getHumanChoice() {
    let result = prompt('Rock, Paper, Scissors!');
    if (result) {
        let resultModified = result.toLowerCase();
        if (resultModified === "rock" || resultModified === "paper" || resultModified === "scissors") {
            return resultModified;
        } else {
            console.log('Invalid choice, please enter rock, paper, or scissors.');
            return getHumanChoice();
        }
    } else {
        return null;
    }
}

// running getHumanChoice and getComputerChoice and playing the game
function playRound() {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    if (!humanSelection) {
        console.log('No input provided!');
        return null;
    }

    console.log("computer says: " + computerSelection);
    console.log("you say: " + humanSelection);

    if (humanSelection === "rock" && computerSelection === "paper" ||
        humanSelection === "paper" && computerSelection === "scissors" ||
        humanSelection === "scissors" && computerSelection === "rock") {
        console.log('computer wins!');
        return 'computer';
    } else if (humanSelection === computerSelection) {
        console.log('draw!');
        return 'draw';
    } else {
        console.log('you win!');
        return 'human';
    }
}

// starts the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    while (rounds < 5) {
        let result = playRound();
        if (result === 'computer') {
            computerScore++;
        } else if (result === 'human') {
            humanScore++;
        } else if (result === 'draw') {
            // Draw case, no score change
        } else {
            // Invalid input or no input case
            continue; // Skip the round without incrementing rounds
        }
        rounds++;
        console.log(`Round ${rounds}: Computer Score = ${computerScore}, Human Score = ${humanScore}`);
    }

    console.log('Final Scores:');
    console.log(`Computer: ${computerScore}`);
    console.log(`Human: ${humanScore}`);

    if (computerScore > humanScore) {
        console.log('Computer wins the game!');
    } else if (humanScore > computerScore) {
        console.log('You win the game!');
    } else {
        console.log('The game is a draw!');
    }
}