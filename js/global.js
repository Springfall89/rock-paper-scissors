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
        if (confirm("Do you want to end the game?\n\nThe scores will be reset to zero."))
        {
            computerScore = 0;
            humanScore = 0;
            return;
        }
        else
        {
            getHumanChoice();
            return;
        }

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
    else if ((humanChoice === PAPER) && (computerChoice === PAPER))
    {
        alert("The Computer picked Paper.\n\nIt's a Tie! Paper and Paper.");
        return;
    }
    else if ((humanChoice === PAPER) && (computerChoice === SCISSORS))
    {
        alert("The Computer picked Scissors.\n\nYou Lose! Scissors cut Paper.");
        return ++computerScore;
    }
    else if ((humanChoice === PAPER) && (computerChoice === ROCK))
    {
        alert("The Computer picked Rock.\n\nYou Win! Paper beats Rock.");
        return ++humanScore;
    }
    else if ((humanChoice === SCISSORS) && (computerChoice === SCISSORS))
    {
        alert("The Computer picked Scissors.\n\nIt's a Tie! Scissors and Scissors.");
        return;
    }
    else if ((humanChoice === SCISSORS) && (computerChoice === ROCK))
    {
        alert("The Computer picked Rock.\n\nYou Lose! Rock beats Scissors.");
        return ++computerScore;
    }
    else if ((humanChoice === SCISSORS) && (computerChoice === PAPER))
    {
        alert("The Computer picked Paper.\n\nYou Win! Scissors cut Paper.");
        return ++humanScore;
    }
}

function showScore()
{
    return `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;
}

window.addEventListener('beforeunload', (event) => {
    if ((computerScore || humanScore) != 0)
    {
    event.preventDefault();
    event.returnValue = "";
    }
});