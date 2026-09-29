const contentContainer = document.querySelector(".content-container");
const btns = document.querySelectorAll(".btn");
    for (let btn of btns)
    {
        btn.addEventListener("click", () => {
            if (document.getElementById("active") !== null)
            {
                document.getElementById("active").removeAttribute("id");
                btn.id = "active";
            }
            else if (document.getElementById("active") === null)
            {
                btn.id = "active";
            }
        });
    }
let humanScore = 0;
let computerScore = 0;
const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");

    const humanScoreContainer = document.createElement("div");
    humanScoreContainer.classList.add("human-score");

        const humanScoreText = document.createElement("p");
        humanScoreText.classList.add("score-text");
        humanScoreText.textContent = "You";

        const humanScoreNum = document.createElement("p");
        humanScoreNum.classList.add("score-num");
        humanScoreNum.textContent = humanScore;

    humanScoreContainer.appendChild(humanScoreText);
    humanScoreContainer.appendChild(humanScoreNum);

    const computerScoreContainer = document.createElement("div");
    computerScoreContainer.classList.add("computer-score");
        const computerScoreText = document.createElement("p");
        computerScoreText.classList.add("score-text");
        computerScoreText.textContent = "Computer";

        const computerScoreNum = document.createElement("p");
        computerScoreNum.classList.add("score-num");
        computerScoreNum.textContent = computerScore;

    computerScoreContainer.appendChild(computerScoreText);
    computerScoreContainer.appendChild(computerScoreNum);

    const versusText = document.createElement("p");
    versusText.classList.add("versus-text");
    versusText.textContent = "VS";

scoreContainer.appendChild(humanScoreContainer);
scoreContainer.appendChild(versusText);
scoreContainer.appendChild(computerScoreContainer);

let maxScore;
const maxScoreForm = document.createElement("form");
maxScoreForm.classList.add("max-score-form");

    const maxScoreText = document.createElement("label");
    maxScoreText.classList.add("max-score-text");
    maxScoreText.setAttribute("for", "max-score");
    maxScoreText.textContent = "How much score to win?";

    const maxScoreInput = document.createElement("input");
    maxScoreInput.classList.add("max-score-input");
    maxScoreInput.id = "max-score";
    maxScoreInput.setAttribute("type", "number");
    maxScoreInput.setAttribute("placeholder", "Please enter a number");

    const maxScoreBtn = document.createElement("button");
    maxScoreBtn.classList.add("max-score-btn");
    maxScoreBtn.textContent = "OK";

    maxScoreBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (maxScoreInput.value === "")
        {
            alert("Please enter a number.");
        }
        else if (maxScoreInput.value <= 0)
        {
            alert("Value must be higher than zero.");
            maxScoreInput.value = "";
        }
        else if (maxScoreInput.value > 0)
        {
            maxScore = maxScoreInput.value;
            contentContainer.replaceChildren();
        }
    });

maxScoreForm.appendChild(maxScoreText);
maxScoreForm.appendChild(maxScoreInput);
maxScoreForm.appendChild(maxScoreBtn);