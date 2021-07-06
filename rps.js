const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let PLAYER_SCORE = 0;
let AI_SCORE = 0;

// // initialize ROUND_COUNTER variable to 5 for 5 rounds
let ROUND_COUNTER = 1;

let nextRound = false;

let playerSelection = "";
let playerWins;
let ggWP = "Good Game, well played!";
let btrLuck = "Better luck next time!";
let playerWinsLabel = "Player Wins!";
let playerLoseLabel = "Jarvis Wins!"
let aiWinsLabel = "Jarvis Wins!";

const mainContainer = document.querySelector('#mainContainer');
mainContainer.style.cssText = "display: none;"

const playerScoreContainer = document.querySelector('#playerScoreContainer');
const aiScoreContainer = document.querySelector('#aiScoreContainer');

const selectionsContainer = document.querySelector('#selectionsContainer');
const evaluationContainer = document.querySelector('#evaluationContainer');
const roundOutcomeContainer = document.querySelector('#roundOutcomeContainer');
let roundOutcomeLabelOne = document.querySelector('#roundOutcomeLabelOne');
let roundOutcomeLabelTwo = document.querySelector('#roundOutcomeLabelTwo');
const endOfRoundStatementContainer = document.querySelector('#endOfRoundStatementContainer');
const evalLabel = document.querySelector('.evalLabel');

let endOfRoundStatementLabel = document.querySelector('#endOfRoundStatementLabel');


// Start Button to populate the game layout
const btnStartGame = document.createElement('BUTTON');
btnStartGame.innerText = "Start Game";
btnStartGame.addEventListener('click', () => {
    mainContainer.style.cssText = "display: grid;"
    rpsGame();
})

btnContainer.appendChild(btnStartGame);

// gameFunction 
function rpsGame() {

    let imgPlayerSelection = document.querySelector('#imgPlayerSelection');
    // rpsRound functions is called
    btnContainer.removeChild(btnStartGame);
    const btnRock = document.createElement('BUTTON');
    btnRock.innerText = 'ROCK!'
    btnRock.addEventListener('click', () => {
        imgPlayerSelection.src = "img/rock.png";
        imgPlayerSelection.style.cssText = "display: block; margin: 0 auto 0 auto; padding: 15px;"
        rpsRound(ROCK, computerPlay());
    })

    const btnPaper = document.createElement('BUTTON');
    btnPaper.innerText = 'PAPER!'
    btnPaper.addEventListener('click', () => {
        imgPlayerSelection.src = "img/paper.png";
        imgPlayerSelection.style.cssText = "display: block; margin: 0 auto 0 auto; padding: 15px;"
        rpsRound(PAPER, computerPlay());
    })

    const btnScissors = document.createElement('BUTTON');
    btnScissors.innerText = 'SCISSORS!'
    btnScissors.addEventListener('click', () => {
        imgPlayerSelection.src = "img/scissors.png";
        imgPlayerSelection.style.cssText = "display: block; margin: 0 auto 0 auto; padding: 15px;"
        rpsRound(SCISSORS, computerPlay());
    })

    btnContainer.appendChild(btnRock);
    btnContainer.appendChild(btnPaper);
    btnContainer.appendChild(btnScissors);

}

// computerPlay 
function computerPlay() {
    let imgAISelection = document.querySelector('#imgAISelection');
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
            imgAISelection.src = "img/rock.png";
            imgAISelection.style.cssText = "display: block; margin: 0 auto 0 auto; padding: 15px;"
            break;
        // if 2 is randomChoice 
        case (randomChoice == 2): 
            //console.log(randomChoice);
            //selection is paper
            computerSelection = PAPER;
            imgAISelection.src = "img/paper.png";
            imgAISelection.style.cssText = "display: block; margin: 0 auto 0 auto; padding: 15px;"
            break;
        // if 3 is randomChoice
        case (randomChoice == 3): 
            //console.log(randomChoice);
            //selection is scissor
            computerSelection = SCISSORS;
            imgAISelection.src = "img/scissors.png";
            imgAISelection.style.cssText = "display: block; margin: 0 auto 0 auto; padding: 15px;"
            break;
    }
    // console.log(computerSelection);
    // return selection
    return computerSelection;     
}

// userPlay THIS IS OBSOLETE, PLEASE REMOVE
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
 function rpsRound(playerSelection, computerSelection) {
    // display choices
    showChoices(playerSelection, computerSelection);  
    

    playerWins = evaluateSelections(playerSelection, computerSelection)
    endScenario(playerWins, playerSelection, computerSelection);

    // Trigger end round
    nextRound = true;

    if (nextRound == true) {
        if (playerWins == 1) {
            PLAYER_SCORE += 1;
            // Notify player of won round
            let playerScoreLabel = document.querySelector("#playerScoreLabel");
            playerScoreLabel.textContent = PLAYER_SCORE;

            playerScoreContainer.appendChild(playerScoreLabel);

            endOfRoundStatementLabel.textContent = "Player takes this round!";

            console.log("Player takes this round!");
            console.log("Player Score: " + PLAYER_SCORE);
            console.log("Jarvis Score: " + AI_SCORE);
            nextRound = false;
        } else if (playerWins == 2) {
            evalLabel.classList.add('evalLabel');
            evalLabel.textContent = playerSelection + " matches " + computerSelection + " that's a DRAW!";
    
            roundOutcomeLabelOne.textContent = "Well a DRAW is a tie, so no one is taking this round...";
            roundOutcomeLabelTwo.textContent = "";
            endOfRoundStatementLabel.textContent = "DEAD EVEN!";
            nextRound = false;
        } else {
            AI_SCORE +=1;

            let aiScoreLabel = document.querySelector("#aiScoreLabel");
            aiScoreLabel.textContent = AI_SCORE;

            endOfRoundStatementLabel.textContent = "Jarvis takes this round!";

            console.log("Jarvis takes this round!");
            console.log("Jarvis Score: " + AI_SCORE);
            console.log("Player Score: " + PLAYER_SCORE);
            nextRound = false;
        }
        // if either player has reached 3 
        if (PLAYER_SCORE >= 5 || AI_SCORE >= 5) {
            // stop the rounds
            // declare the winner
            if (PLAYER_SCORE > AI_SCORE) {
                endOfRoundStatementLabel.textContent = `Winner, Winner, Chicken Dinner! 
                                                        Player won with a score of ${PLAYER_SCORE}
                                                        Excellent work! You're the Best!`;
                setTimeout(() => alert('GameOver!'), 2000);

                setTimeout(() => {
                        location.reload();
                }, 2000)

                console.log("Winner, Winner, Chicken Dinner!");
                console.log("Player won with a score of " + PLAYER_SCORE);
                console.log("Excellent work! You're the Best!");
                console.log("GAME OVER");
                nextRound = false;
            } else {
                endOfRoundStatementLabel.textContent = `WASTED! 
                                                        Jarvis won with a score of ${AI_SCORE}
                                                        Don't worry, you'll get'em next time!`;
                setTimeout(() => alert('WASTED!'), 2000);

                setTimeout(() => {
                        location.reload();
                }, 2000)

                console.log("WASTED!");
                console.log("Jarvis won with a score of " + AI_SCORE);
                console.log("Don't worry, you'll get'em next time!");
                console.log("GAME OVER");
                nextRound = false;
            }
        }else {
            //announce end of round
            setTimeout(() => {
                endOfRoundStatementLabel.textContent = `That's the end of Round #${ROUND_COUNTER - 1}! Get ready for Round #${ROUND_COUNTER}! `;
            }, 2000)
            ROUND_COUNTER += 1;
        }
    }
}

function showChoices(playerSelection, computerSelection) {
    // Player selections element selected
    let pS = document.querySelector('#playerSelection');
    pS.textContent = playerSelection;

    // Computer selection element selected
    let cS = document.querySelector('#aiSelection');
    cS.textContent = computerSelection;
    
    // VS symbol element created
    let vs = document.querySelector('#VS')
    vs.textContent = " VS "
    vs.style.cssText = "font-size: 48px";

    console.log("Player: " + pS.textContent + " || " + cS.textContent + " :Jarvis");
}

//evaluates selections to determine winner
function evaluateSelections(playerSelection, computerSelection) {
    // initialize selections
    let pS = playerSelection;
    let cS = computerSelection;
    
    if (pS == cS) {
        return playerWins = 2;
    }
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
                // Create element for Player Rock Win
                evalLabel.classList.add('evalLabel');
                evalLabel.innerHTML = pS + " !SMASHES! " + cS;

                roundOutcomeLabelOne.textContent = playerWinsLabel;

                roundOutcomeLabelTwo.textContent = ggWP;

                console.log(pS + " !SMASHES! " + cS + " Player wins!");
                console.log("GG WP!");
                break;  
            case pS == PAPER: 
                //player won with PAPER
                // Create element for Player Paper Win
                evalLabel.classList.add('evalLabel');
                evalLabel.textContent = pS + " ^COVERS^ " + cS;

                roundOutcomeLabelOne = document.querySelector('#roundOutcomeLabelOne');
                roundOutcomeLabelOne.textContent = playerWinsLabel;

                roundOutcomeLabelTwo = document.querySelector('#roundOutcomeLabelTwo');
                roundOutcomeLabelTwo.textContent = ggWP;

                console.log(pS + " ^COVERS^ " + cS + " Player wins!")
                console.log("GG WP!")
                break;
            case pS == SCISSORS: 
                //player won with SCISSORS
                // Create element for Player Rock Win
                evalLabel.classList.add('evalLabel');
                evalLabel.textContent = pS + " /CUTS/ " + cS;

                roundOutcomeLabelOne = document.querySelector('#roundOutcomeLabelOne');
                roundOutcomeLabelOne.textContent = playerWinsLabel;

                roundOutcomeLabelTwo = document.querySelector('#roundOutcomeLabelTwo');
                roundOutcomeLabelTwo.textContent = ggWP;
                
                console.log(pS + " /CUTS/ " + cS + " Player wins!")
                console.log("GG WP!")
                break;
        }
    } else { // player lost 
        //console.log("cS = " + cS)   
        switch (pW == false) {
            //player lost with ROCK
            case cS == ROCK:
                // Create element for Jarvis Rock Win
                evalLabel.classList.add('evalLabel');
                evalLabel.textContent = cS + " !SMASHES! " + pS;

                roundOutcomeLabelOne = document.querySelector('#roundOutcomeLabelOne');
                roundOutcomeLabelOne.textContent = playerLoseLabel;

                roundOutcomeLabelTwo = document.querySelector('#roundOutcomeLabelTwo');
                roundOutcomeLabelTwo.textContent = btrLuck;

                console.log(cS + " SMASHES " + pS + " Jarvis wins!");
                console.log("Better Luck Next Time!");
                break;  
            case cS == PAPER: 
            //player lost with PAPER
                // Create element for Jarvis Paper Win
                evalLabel.classList.add('evalLabel');
                evalLabel.textContent = cS + " ^COVERS^ " + pS;

                roundOutcomeLabelOne = document.querySelector('#roundOutcomeLabelOne');
                roundOutcomeLabelOne.textContent = playerLoseLabel;

                roundOutcomeLabelTwo = document.querySelector('#roundOutcomeLabelTwo');
                roundOutcomeLabelTwo.textContent = btrLuck;

                console.log(cS + " COVERS " + pS + " Jarvis wins!")
                console.log("Better Luck Next Time!")
                break;
            case cS == SCISSORS:
            //player lost with SCISSORS 
                // Create element for Player Rock Win
                evalLabel.classList.add('evalLabel');
                evalLabel.textContent = cS + " /CUTS/ " + pS;

                roundOutcomeLabelOne = document.querySelector('#roundOutcomeLabelOne');
                roundOutcomeLabelOne.textContent = playerLoseLabel;

                roundOutcomeLabelTwo = document.querySelector('#roundOutcomeLabelTwo');
                roundOutcomeLabelTwo.textContent = btrLuck;

                console.log(cS + " CUTS " + pS + " Jarvis wins!")
                console.log("Better Luck Next Time!")
                break;
        }
    } 
}