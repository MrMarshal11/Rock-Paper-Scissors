// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Gets computer choice
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

// Runs getHumanChoice and getComputerChoice and plays the game
function playRound(humanSelection) {
    let computerSelection = getComputerChoice();

    // Get the results div
    const resultsDiv = document.querySelector('#results');

    // Clear previous results
    resultsDiv.textContent = '';

    // Create new elements to display results
    const computerChoiceP = document.createElement('p');
    computerChoiceP.textContent = `Computer says: ${computerSelection}`;
    
    const humanChoiceP = document.createElement('p');
    humanChoiceP.textContent = `You say: ${humanSelection}`;

    const resultP = document.createElement('p');

    if (humanSelection === "rock" && computerSelection === "paper" ||
        humanSelection === "paper" && computerSelection === "scissors" ||
        humanSelection === "scissors" && computerSelection === "rock") {
        resultP.textContent = 'Computer wins this round!';
        computerScore++;
    } else if (humanSelection === computerSelection) {
        resultP.textContent = 'It\'s a draw!';
    } else {
        resultP.textContent = 'You win this round!';
        humanScore++;
    }

    // Append results to the results div
    resultsDiv.appendChild(computerChoiceP);
    resultsDiv.appendChild(humanChoiceP);
    resultsDiv.appendChild(resultP);

    // Display the running score
    const scoreP = document.createElement('p');
    scoreP.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    resultsDiv.appendChild(scoreP);

    // Check if there's a winner
    if (humanScore === 5) {
        const winnerP = document.createElement('p');
        winnerP.textContent = 'Congratulations! You win the game!';
        resultsDiv.appendChild(winnerP);
        resetGame();
    } else if (computerScore === 5) {
        const winnerP = document.createElement('p');
        winnerP.textContent = 'Computer wins the game! Better luck next time!';
        resultsDiv.appendChild(winnerP);
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

// Add event listeners to buttons using querySelector
document.querySelector('#rock').addEventListener('click', () => playRound('rock')); 
document.querySelector('#paper').addEventListener('click', () => playRound('paper')); 
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));
