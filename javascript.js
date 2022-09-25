

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
            return "Tie"
        } else if (playerSelectionLowerCase == "paper") {
            return "Win"
        } else {
            return "Lose"
        }
    } else if (computerSelection == "paper") {
        if (playerSelectionLowerCase == "rock") {
            return "Lose"
        } else if (playerSelectionLowerCase == "paper") {
            return "Tie"
        } else {
            return "Win"
        }
    } else {
        if (playerSelectionLowerCase == "rock") {
            return "Win"
        } else if (playerSelectionLowerCase == "paper") {
            return "Lose"
        } else {
            return "Tie"
        }
    }

    // TO DO!!! determines who wins and why with case sensitity
}
function game() {
    let runningScore = 0;
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose your weapon", "rock, paper, or scissors!")
        const result = playRound(getComputerChoice(), choice)
        console.log(result);
        // console.log(`You ${result} the round`);
        if(result == "Win") {
            // console.log("You win the round");
            //we do something
            runningScore++;
        } else if(result == "Lose") {
            // console.log("You lose the round");
            runningScore--;
        } else {
            runningScore + 0;
        }
    }
    if (runningScore > 0) {
        return "You win the game!"
    } else if (runningScore < 0) {
        return "You lose the game."
    } else {
        return "You tied, play again!"
    }
}

console.log(game())
// console.log(getComputerChoice())
// console.log(playRound(getComputerChoice(),"Paper"))