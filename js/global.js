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
    }
}
