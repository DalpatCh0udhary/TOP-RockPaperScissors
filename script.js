let humanScore = 0
let computerScore = 0
function playGame(){
    function getComputerChoice(){
        let computer =  Math.floor(Math.random() *2);
        if(computer === 0 ) {
            const computer = "ROCK";
            return computer;
        }
        else if (computer === 1){
            const computer = "PAPER";
            return computer;
        }
        else if (computer === 2){
            const computer = "SCISSORS";
            return computer;
        }
    }
    function getHumanChoice(){
        const human = prompt(`Rock, 
            Paper, 
            Scissors`)
            return human.toUpperCase();
    }
    function playRound(humanChoice,computerChoice){
        if((computerChoice === "ROCK" && humanChoice === "PAPER") || (computerChoice === "PAPER" && humanChoice === "SCISSORS") ||
        (computerChoice === "SCISSORS" && humanChoice === "ROCK")){
            console.log(`You Win!! ${humanChoice} beats ${computerChoice}`)
            humanScore += 1;
        }
        else if((computerChoice === "ROCK" && humanChoice === "SCISSORS")||(computerChoice === "PAPER" && humanChoice ==="ROCK") ||
        (computerChoice === "SCISSORS" && humanChoice === "PAPER")){
            console.log(`You lose!! ${computerChoice} beats ${humanChoice}`)
            computerScore += 1;
        }
        else if((computerChoice === "ROCK" && humanChoice === "ROCK") || (computerChoice === "PAPER" && humanChoice === "PAPER") ||
        (computerChoice === "SCISSORS" && humanChoice === "SCISSORS")){
            console.log(`That's a tie!! You both choose the ${humanChoice}`)
        }
        else {
            console.log("Enter right input as directed")
        }
    } 
    
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection)
}

function oneGame(){
    playGame()
    playGame()
    playGame()
    playGame()
    playGame()

    if(computerScore > humanScore){
        console.log(`You lost the game with ${computerScore}-${humanScore}`)
    }
    else if(humanScore > computerScore){
        console.log(`You Won!! the score was ${humanScore}-${computerScore}`)
    }
    else{
        console.log(`That's a tie with score ${computerScore}`)
    }
}

oneGame()