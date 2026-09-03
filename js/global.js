const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let computerScore = 0;
let humanScore = 0;

function getComputerChoice()
{
    function getRandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }

switch (getRandomInt(3))
{
    case 0: {
        return ROCK;
    } case 1: {
        return PAPER;
    } case 2: {
        return SCISSORS;
    }
}
}

function getHumanChoice()
{
    const choice = prompt("Rock, Paper or Scissors?");

    if (choice?.trim().toLowerCase() === "rock")
    {
        return ROCK;
    }
    else if (choice?.trim().toLowerCase() === "paper")
    {
        return PAPER;
    }
    else if (choice?.trim().toLowerCase() === "scissors")
    {
        return SCISSORS;
    }
    else if (choice === null)
    {
        alert("You cancelled the round. Score unaffected.");
        return;
    }
    else
    {
        alert("Play a real move!");
        getHumanChoice();
        return;
    }
}

//declare playRound func
//set conditionals for each move
//return updated score
//log score in console at the end


function playRound()
{
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    humanChoice;
    computerChoice;

    // Rock results
    if ((humanChoice === ROCK) && (computerChoice === ROCK))
    {
        alert("The Computer picked Rock.\n\nIt's a Tie! Rock and Rock.");
        return;
    }
    else if ((humanChoice === ROCK) && (computerChoice === PAPER))
    {
        alert("The Computer picked Paper.\n\nYou Lose! Paper beats Rock.");
        return ++computerScore;
    }
    else if ((humanChoice === ROCK) && (computerChoice === SCISSORS))
    {
        alert("The Computer picked Scissors.\n\nYou Win! Rock beats Scissors.");
        return ++humanScore;
    }
}

function showScore()
{
    return `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;
}