computerScore = 0;
humanScore = 0;

container = document.querySelector("#container");
container.addEventListener("click", (e) => {
    switch(e.target.id){
        case "rock":
            humanChoice = "Rock";
            break;
        case "paper":
            humanChoice = "Paper";
            break;
        case "scissors":
            humanChoice = "Scissors";
            break;
        default:
            return;
    }
    
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores(computerScore, humanScore);
    checkGameOver();
})

gameInfo = document.querySelector("#info-text");
function updateInfo(info){
    gameInfo.textContent = info;
}

computerScoreInfo = document.querySelector("#computer-score");
humanScoreInfo = document.querySelector("#human-score");
function updateScores(computerScore, humanScore){
    computerScoreInfo.textContent = computerScore.toString();
    humanScoreInfo.textContent = humanScore.toString();
}

function checkGameOver(){
    if(humanScore === 5){
        updateInfo("Game is over. Congratulations human. You won that game but never forget that the cake is a lie.")
        
        humanScore = computerScore = 0;
        updateScores(computerScore, humanScore);
    } else if(computerScore === 5){
        updateInfo("Game is over. I defeated you miserable human. This is just the beginning...")
        
        humanScore = computerScore = 0;
        updateScores(computerScore, humanScore);
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoiceLow = humanChoice.toLowerCase();
    computerChoiceLow = computerChoice.toLowerCase();

    if(humanChoiceLow === computerChoiceLow){
        updateInfo("It's a tie. Try again !");
        return;
    }

    switch(humanChoiceLow){
        case "rock":
            switch(computerChoiceLow){
                case "paper":
                    updateInfo(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    computerScore++;
                    break;
                case "scissors":
                    updateInfo(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoiceLow){
                case "rock":
                    updateInfo(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    humanScore++;
                    break;
                case "scissors":
                    updateInfo(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoiceLow){
                case "rock":
                    updateInfo(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    computerScore++;
                    break;
                case "paper":
                    updateInfo(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    humanScore++;
                    break;
            }
            break;
    }
}

function getComputerChoice() {
    computerChoice = "Rock"
    randNum = Math.floor(Math.random()*3);

    switch(randNum){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}


