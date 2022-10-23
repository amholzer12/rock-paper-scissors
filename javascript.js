const result = document.querySelector('#result');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

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
            return "Tie";
        } else if (playerSelectionLowerCase == "paper") {
            playerScore++;
            return "Win";
        } else {
            computerScore++;
            return "Lose";
        }
    } else if (computerSelection == "paper") {
        if (playerSelectionLowerCase == "rock") {
            computerScore++;
            return "Lose";
        } else if (playerSelectionLowerCase == "paper") {
            return "Tie";
        } else {
            playerScore++;
            return "Win";
        }
    } else {
        if (playerSelectionLowerCase == "rock") {
            playerScore++;
            return "Win";
        } else if (playerSelectionLowerCase == "paper") {
            computerScore++;
            return "Lose";
        } else {
            return "Tie";
        }
    }
    
}
function scoreDisplay(answer) {
    result.textContent = `Results ${answer}`
    playerScoreDisplay.textContent = `Player Score ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score ${computerScore}`;
    const finalResult = getResult();
    if (finalResult) {
        //use setTimeout to fix score numbers updating before final result is displayed
        setTimeout(function(){
            alert(finalResult);
        }, 0)
    
    }
}
    
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', (e) => {
    const answer = playRound(getComputerChoice(), "rock");
    //passing answer because it's the result of playRound to update the score and reduce redundancy
    scoreDisplay(answer);
});
    
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    const answer = playRound(getComputerChoice(), "paper");
    scoreDisplay(answer);
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e) => {
    const answer = playRound(getComputerChoice(), "scissors");
    scoreDisplay(answer);
});

function getResult() {
    if (playerScore >= 5) {
        return "Congratulations, You Win!"
    }
    if (computerScore >= 5) {
        return "Not this time, You Lose."
    }
}
// now that buttons return lowercase strings, i just need to figure out how to get the
// clicking of the buttons to be the choices
            //OR!!
//move hard coded function to each button choice since we won't be adding any buttons in the future



                                // console.log(game())
                                // console.log(getComputerChoice())
                                // console.log(playRound(getComputerChoice(),"Paper"))