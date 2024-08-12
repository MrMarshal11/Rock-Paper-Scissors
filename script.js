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

// running getHumanChoice and getComputerChoice and playing the game
function playRound(humanSelection) {
    let computerSelection = getComputerChoice();

    console.log("computer says: " + computerSelection);
    console.log("you say: " + humanSelection);

    if (humanSelection === "rock" && computerSelection === "paper" ||
        humanSelection === "paper" && computerSelection === "scissors" ||
        humanSelection === "scissors" && computerSelection === "rock") {
        console.log('computer wins!');
    } else if (humanSelection === computerSelection) {
        console.log('draw!');
    } else {
        console.log('you win!');
    }
}

// Add event listeners to buttons using querySelector
document.querySelector('#rock').addEventListener('click', () => playRound('rock')); 
document.querySelector('#paper').addEventListener('click', () => playRound('paper')); 
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));
