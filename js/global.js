const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// declare getComputerChoice func
// declare getRandomInt func
// return math floor of math random method with int 3

function getComputerChoice()
{
    function getRandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }
    return getRandomInt(3);
}