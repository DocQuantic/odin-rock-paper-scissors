function getComputerChoice() {
    computerChoice = "Rock"
    randNum = Math.floor(Math.random()*3);
    console.log(randNum)

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

    return computerChoice
}

computerChoice = getComputerChoice();
console.log(computerChoice)