const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let computerScore = 0;
let humanScore = 0;
const showScore = `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;

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
//update score at the end
//log score in console?


function playRound()
{
//Rock results
    getComputerChoice();
    getHumanChoice();
    if ((getHumanChoice() === ROCK) && (getComputerChoice() === ROCK))
    {
        alert("Computer picked Rock. \nIt's a Tie! Rock and Rock.");
        console.log(showScore);
        return;
    }
    else if ((getHumanChoice() === ROCK) && (getComputerChoice() === PAPER))
    {
        alert("Computer picked Paper. \nYou Lose! Paper beats Rock.");
        ++computerScore;
        console.log(showScore);
        return;
    }
}
