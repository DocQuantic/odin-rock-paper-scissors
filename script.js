computerScore = 0;
humanScore = 0;

/*
humanChoice = getHumanChoice()
console.log(humanChoice)
computerChoice = getComputerChoice()
console.log(computerChoice)
playRound(humanChoice, computerChoice)

if(humanScore > computerScore){
    console.log("Game is over. Congratulations human. You won that game but never forget that the cake is a lie.")
} else if(computerScore > humanScore){
    console.log("Game is over. I defeated you miserable human. This is just the beginning...")
} else {
    console.log("Nobody won, it's sad.")
}
    */

container = document.querySelector(".container");
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
})

function playRound(humanChoice, computerChoice) {
    humanChoiceLow = humanChoice.toLowerCase();
    computerChoiceLow = computerChoice.toLowerCase();

    if(humanChoiceLow === computerChoiceLow){
        console.log("Nobody wins. Try again !");
        return;
    }

    switch(humanChoiceLow){
        case "rock":
            switch(computerChoiceLow){
                case "paper":
                    console.log(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    computerScore++;
                    break;
                case "scissors":
                    console.log(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoiceLow){
                case "rock":
                    console.log(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    humanScore++;
                    break;
                case "scissors":
                    console.log(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoiceLow){
                case "rock":
                    console.log(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    computerScore++;
                    break;
                case "paper":
                    console.log(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
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

function getHumanChoice() {
    humanChoice = prompt("Dear player, please choose between Rock, Paper or Scissors :");

    return humanChoice;
}


