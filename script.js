computerScore = 0;
humanScore = 0;

humanChoice = getHumanChoice()
computerChoice = getComputerChoice()
playRound(humanChoice, computerChoice)

function playRound(humanChoice, computerChoice) {
    humanChoiceLow = humanChoice.toLowerCase();
    computerChoiceLow = computerChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("Nobody wins. Try again !")
    }

    switch(humanChoiceLow){
        case "Rock":
            switch(computerChoiceLow){
                case "Paper":
                    console.log(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    break;
                case "Scissors":
                    console.log(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    break;
            }
            break;
        case "Paper":
            switch(computerChoiceLow){
                case "Rock":
                    console.log(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
                    break;
                case "Scissors":
                    console.log(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    break;
            }
            break;
        case "Scissors":
            switch(computerChoiceLow){
                case "Rock":
                    console.log(`${computerChoice} beats ${humanChoice}. Player loses! The machine defeated you poor little human`)
                    break;
                case "Paper":
                    console.log(`${humanChoice} beats ${computerChoice}. Player wins! You were lucky this time`)
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


