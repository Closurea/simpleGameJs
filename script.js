function computerChoice() {
    let res = Math.floor(Math.random() * 3);
    switch(res) {
    case 0:
        res = 'rock';
        break;
    case 1:
        res = 'paper';
        break;
    case 2:
        res = 'scissor';
        break;    
    }
    return res;
}

function humanChoice() {
    choice = prompt();
    choice = String(choice).toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Computer chose: ", computerChoice, "\nDraw");
        console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
    }
    else if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            computerScore++;
            console.log("Computer chose: paper\nYou lost this round");
            console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
        }
        else if (computerChoice == 'scissor') {
            humanScore++;
            console.log("Computer chose: scissor\nYou won this round");
            console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            humanScore++;
            console.log("Computer chose: rock\nYou won this round");
            console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
        }
        else if (computerChoice == 'scissor') {
            computerScore++;
            console.log("Computer chose: scissor\nYou lost this round");
            console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
        }
    }
    else if (humanChoice == 'scissor') {
        if (computerChoice == 'rock') {
            computerScore++;
            console.log("Computer chose: rock\nYou lost this round");
            console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
        }
        else if (computerChoice == 'paper') {
            humanScore++;
            console.log("Compute chose: paper\nYou won this round");
            console.log("Your score: ", humanScore, " Computer Score: ", computerScore);
        }
    }
}

function playGame() {
    for (i = 0; i < 5; ++i) {
        let humanSelection = humanChoice();
        let computerSelection = computerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == computerScore) {
        console.log("Draw\nGoodGame!");
    }
    else if (humanScore >= computerScore) {
        console.log("You won\nCongratulations");
    }
    else {
        console.log("Computer won\nYou lost");
    }
}

let humanScore = 0, computerScore = 0;

playGame();