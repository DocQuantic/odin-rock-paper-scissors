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

humanChoice = getHumanChoice()
console.log(humanChoice)