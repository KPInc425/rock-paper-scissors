// assignMoves 1, 2, 3 to ROCK, PAPER, SCISSORS
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let playerSelection = "";
let playerWins;

// computerPlay 
function computerPlay() {
    // declare computerSelection variable
    let computerSelection = "";
    // randomChoice out of 3 
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    //console.log(randomChoice)
     
    switch (randomChoice >= 1) {
        // if 1 is randomChoice
        case (randomChoice == 1):
            //selection is rock 
            computerSelection = ROCK;
            //console.log(computerSelection);
            //console.log(randomChoice);
            break;
        // if 2 is randomChoice 
        case (randomChoice == 2): 
            //console.log(randomChoice);
            //selection is paper
            computerSelection = PAPER;
            //console.log(computerSelection);
            break;
        // if 3 is randomChoice
        case (randomChoice == 3): 
            //console.log(randomChoice);
            //selection is scissor
            computerSelection = SCISSORS;
            //console.log(computerSelection);
            break;
    }
    // console.log(computerSelection);
    // return selection
    return computerSelection;     
}

// userPlay
function userPlay() {
    // ask user for input w/ message
    // store input in variable ALL UPPERCASE
    playerSelection = prompt("Rock, Paper, or Scissors? ");
    console.log(playerSelection);
    //check if rock, paper, or scissors where chosen
    if (!(playerSelection === null)) {
        playerSelection = playerSelection.toUpperCase().toString();
    }
    if (playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS) {
        //otherwise return the choice
        return playerSelection;
    } else {
        //if not in choices
        //"Please make a valid selection."
        console.log("Please make a valid selection.");
        // call self to prompt user again, which will be returned here
        userPlay();
        // return, returned selection
        return playerSelection;
    }
}

// rpsRound 
 function rpsRound() {
    // player makes choice
    let playerSelection = userPlay();
    // computer makes choice
    let computerSelection = computerPlay();
        // FOR TESTING PURPOSES
        // computerSelection = ROCK;
    // display choices
    showChoices(playerSelection, computerSelection);    
    // if playerSelection AND computerSelection are EQUAL 
    if (playerSelection === computerSelection) {
        // output playerSelection, computerSelection, "Draw!"
        console.log(playerSelection + " matches " + computerSelection + " that's a DRAW!" )
        return playerWins = 2;
    } else {
    // else 
        // evaluateSelections to check which wins in context 
        //console.log("check who wins here...");
        playerWins = evaluateSelections(playerSelection, computerSelection)
        endScenario(playerWins, playerSelection, computerSelection);

        // return gameMessage that matches current context 
        // output playerSelection, computerSelection, gameMessage
    } 
    //return console.log("Round Over! Good Round!");
    return playerWins;
}
//output different messages based on win/loss scenario
function endScenario(playerWins, playerSelection, computerSelection) {
    let pW = playerWins;
    let pS = playerSelection;
    let cS = computerSelection;
    //console.log("pW = " + pW)
    // check if player won
    if (pW === 1) {
        //console.log("pS = " + pS)
        switch (pW == true) {
            //player won with ROCK
            case pS == ROCK:
                console.log(pS + " SMASHES " + cS + " Player wins!");
                console.log("GG WP!");
                break;  
            case pS == PAPER: 
                console.log(pS + " COVERS " + cS + " Player wins!")
                console.log("GG WP!")
                break;
            case pS == SCISSORS: 
                console.log(pS + " CUTS " + cS + " Player wins!")
                console.log("GG WP!")
                break;
        }
    } else { // player lost 
        //console.log("cS = " + cS)   
        switch (pW == false) {
            //player lost with ROCK
            case cS == ROCK:
                console.log(cS + " SMASHES " + pS + " Jarvis wins!");
                console.log("Better Luck Next Time!");
                break;  
            case cS == PAPER: 
                console.log(cS + " COVERS " + pS + " Jarvis wins!")
                console.log("Better Luck Next Time!")
                break;
            case cS == SCISSORS: 
                console.log(cS + " CUTS " + pS + " Jarvis wins!")
                console.log("Better Luck Next Time!")
                break;
        }
    } 
}

//evaluates selections to determine winner
function evaluateSelections(playerSelection, computerSelection) {
    // initialize selections
    let pS = playerSelection;
    let cS = computerSelection;
    // evaluation of ROCK choice
    if (pS === ROCK && cS === SCISSORS) {
        // player wins
        return playerWins = 1;
    } else if (pS === ROCK && cS === PAPER) {
        // player loses
        return playerWins = 0;
    }
    // evaluation of PAPER choice
    if (pS === PAPER && cS === ROCK) {
        // player wins
        return playerWins = 1;
    } else if (pS === PAPER && cS === SCISSORS) {
        // player loses
        return playerWins = 0;
    }
    // evaluation of SCISSORS choice
    if (pS === SCISSORS && cS === PAPER) {
        // player wins
        return playerWins = 1;
    } else if (pS === SCISSORS && cS === ROCK) {
        // player loses
        return playerWins = 0;
    }
}

function showChoices(playerSelection, computerSelection) {
    let pS = playerSelection;
    let cS = computerSelection;
    console.log("Player: " + pS + " || " + cS + " :Jarvis");
}

// gameFunction 
function rpsGame() {
    console.log("Game Initialized!")
    //     initialize roundCounter variable to 5 for 5 rounds
    let roundCounter = 1;
//     initialize scoreCounter for player, AI to 0
    let playerScore = 0;
    let computerScore = 0;
//     iterate through 5 rounds   
    for (let i = 0; i <= 5; i++) {
        // each round 
//             run rpsRound for gameplay
        let playerWins = rpsRound();
//             add 1 to winners score count 
        if (playerWins == 1) {
            playerScore += 1;
            // Notify player of won round
            console.log("Player takes this round!")
            console.log("Player Score: " + playerScore)
            console.log("Jarvis Score: " + computerScore)
        } else if (playerWins == 2) {
            console.log("Well a DRAW is a tie, so no one is taking this round...")
        } else {
            computerScore +=1;
            console.log("Jarvis takes this round!")
            console.log("Jarvis Score: " + computerScore)
            console.log("Player Score: " + playerScore)
        }
        // if either player has reached 3 
        if (playerScore >= 3 || computerScore >= 3) {
            // stop the rounds
            i = 10;
            // declare the winner
            if (playerScore > computerScore) {
                console.log("Winner, Winner, Chicken Dinner!");
                console.log("Player won with a score of " + playerScore);
                console.log("Excellent work! You're the Best!")
            } else {
                console.log("WASTED!");
                console.log("Jarvis won with a score of " + computerScore);
                console.log("Don't worry, you'll get'em next time!");
            }
        }else {
        // else 
            //announce end of round
            console.log("That's the end of Round #" + roundCounter);
            // add 1 to roundCounter
            roundCounter += 1;
            // continue to next round
            console.log("Get ready for Round #" + roundCounter);
            confirm("Are you ready for the next round?");
        }
    }
}
