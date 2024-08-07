function getComputerChoice(computerChoice) {
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

function getHumanChoice(humanChoice) {
    let result = prompt('Rock, Paper, Scissors!')
    if (result != "rock" && result != "paper" && result != "scissors") {
    console.log('thefucareyoudoingmate')
    }   else {
    console.log(getComputerChoice())
    }
}

getHumanChoice()