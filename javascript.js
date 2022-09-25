

/* generate a random number between 0 and 2 and return a unique result of rock, paper, or
    scissors */
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3)
    if (randomNum == 0) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(computerSelection, playerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase()
    // console.log(computerSelection)
    // console.log(playerSelection)
    if (computerSelection == "rock") {
        if (playerSelectionLowerCase == "rock") {
            return "You both chose rock, you tie?"
        } else if (playerSelectionLowerCase == "paper") {
            return "Paper beats rock, you win!"
        } else {
            return "Rock beats scissors, you lose."
        }
    } else if (computerSelection == "paper") {
        if (playerSelectionLowerCase == "rock") {
            return "Paper beats rock, you lose."
        } else if (playerSelectionLowerCase == "paper") {
            return "You both chose paper, you tie?"
        } else {
            return "Scissors beat paper, you win!"
        }
    } else {
        if (playerSelectionLowerCase == "rock") {
            return "Rock beats scissors, you win!"
        } else if (playerSelectionLowerCase == "paper") {
            return "Scissors beat paper, you lose."
        } else {
            return "You both chose scissors, you tie?"
        }
    }

    // TO DO!!! determines who wins and why with case sensitity
}


console.log(getComputerChoice())
console.log(playRound(getComputerChoice(),"Paper"))