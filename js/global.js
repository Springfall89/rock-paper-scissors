const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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