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

function random(maxNum)
{
    const arr = [];
    for (let i = 0; i < maxNum; i++)
    {
        arr.push(i);
    }
    for (let j = arr.length; j > 0; j--)
    {
        let k = Math.floor(Math.random() * (j+1));
        let temp = arr[k];
        arr[k] = arr[j];
        arr[j] = temp;
    }
    const result = arr.filter((item) => {return item !==undefined});
    return result[0];
}

function shuffleFavicon()
{
    const favicon = document.querySelector("#favicon");
    if (random(3) === 0)
    {
        favicon.setAttribute("href", "./imgs/svgs/emojis/rock.svg");
    }
    else if (random(3) === 1)
    {
        favicon.setAttribute("href", "./imgs/svgs/emojis/paper.svg");
    }
    else if (random(3) === 2)
    {
        favicon.setAttribute("href", "./imgs/svgs/emojis/scissors.svg");
    }
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
    maxScoreInput.setAttribute("placeholder", "Please enter a number.");

    const maxScoreBtn = document.createElement("button");
    maxScoreBtn.classList.add("max-score-btn");
    maxScoreBtn.textContent = "OK";

    const maxScoreError = document.createElement("div");
    maxScoreError.classList.add("max-score-error");

        const maxScoreErrorIcon = document.createElement("img");
        maxScoreErrorIcon.classList.add("max-score-error-icon");
        maxScoreErrorIcon.setAttribute("src", "./imgs/svgs/x.svg");
        maxScoreErrorIcon.setAttribute("alt", "X");

        const maxScoreErrorText = document.createElement("p");
        maxScoreErrorText.classList.add("max-score-error-text");
        maxScoreErrorText.textContent = "Please enter a finite number.";

    maxScoreError.appendChild(maxScoreErrorIcon);
    maxScoreError.appendChild(maxScoreErrorText);

    maxScoreBtn.addEventListener("click", (event) => {
        event.preventDefault();

        function showError(errorText)
        {
            maxScoreErrorText.textContent = errorText;
            maxScoreForm.removeChild(maxScoreBtn);
            maxScoreForm.appendChild(maxScoreError);
            maxScoreForm.appendChild(maxScoreBtn);
        }

        if (maxScoreInput.value === "")
        {
            showError("Please enter a number.");
            maxScoreInput.value = "";
        }
        else if (maxScoreInput.value <= 0)
        {
            showError("Value must be higher than zero.");
            maxScoreInput.value = "";
        }
        else if (maxScoreInput.value > 0)
        {
            let maxScoreInputNum = Number(maxScoreInput.value)
            if (Number.isInteger(maxScoreInputNum) === false)
            {
                showError("Please enter a whole number.");
                maxScoreInput.value = "";
            }
            else if (Number.isFinite(maxScoreInputNum) === false)
            {
                showError("Please enter a finite number.");
                maxScoreInput.value = "";
            }
            else if (Number.isInteger(maxScoreInputNum) === true)
            {
                if (maxScoreInputNum > 1000)
                {
                    showError("Value must be less than or equal to 1,000.");
                    maxScoreInput.value = "";
                }
                else if (maxScoreInputNum <= 1000)
                {
                    maxScore = maxScoreInputNum;
                    window.addEventListener("beforeunload", (event) => {
                        event.preventDefault();
                    });
                    startGame(maxScore);
                }
            }
        }
    });

maxScoreForm.appendChild(maxScoreText);
maxScoreForm.appendChild(maxScoreInput);
maxScoreForm.appendChild(maxScoreBtn);

function startGame(scoreNum)
{   
    document.title = `Best of ${scoreNum}!`;

    contentContainer.removeChild(maxScoreForm);
    contentContainer.removeChild(scoreContainer);

    const gameAnncmnt = document.createElement("div");
    gameAnncmnt.classList.add("game-anncmnt");

        const gameAnncmntMainText = document.createElement("p");
        gameAnncmntMainText.classList.add("game-anncmnt-main-text");
        gameAnncmntMainText.textContent = "Pick your option!";

        const gameAnncmntSubText = document.createElement("p");
        gameAnncmntSubText.classList.add("game-anncmnt-sub-text");
        gameAnncmntSubText.textContent = `Best of ${scoreNum}!`;

    gameAnncmnt.appendChild(gameAnncmntMainText);
    gameAnncmnt.appendChild(gameAnncmntSubText);

    contentContainer.appendChild(gameAnncmnt);

    const choiceBoxes = document.createElement("div");
    choiceBoxes.classList.add("choice-boxes");

        const choiceBox = document.createElement("div");
        choiceBox.classList.add("choice-box");

        const choice = document.createElement("img");
        choice.classList.add("choice");
        choice.setAttribute("src", "./imgs/svgs/question.svg");
        choice.setAttribute("alt", "None");
    
        const humanChoiceBox = choiceBox.cloneNode();
        const computerChoiceBox = choiceBox.cloneNode();
        humanChoiceBox.id = "human-choice-box";
        computerChoiceBox.id = "computer-choice-box";

        const humanChoice = choice.cloneNode();
        const computerChoice = choice.cloneNode();
        humanChoice.id = "human-choice";
        computerChoice.id = "computer-choice";

        humanChoiceBox.appendChild(humanChoice);
        computerChoiceBox.appendChild(computerChoice);

    choiceBoxes.appendChild(humanChoiceBox);
    choiceBoxes.appendChild(computerChoiceBox);

    contentContainer.appendChild(choiceBoxes);

    scoreContainer.setAttribute("style", "padding-top: 16px");
    versusText.setAttribute("style", "visibility: hidden");
    contentContainer.appendChild(scoreContainer);

    const choiceBtns = document.createElement("div");
    choiceBtns.classList.add("choice-btns");

        const choiceBtn = document.createElement("button");
        choiceBtn.classList.add("choice-btn");

        const choiceBtnImg = document.createElement("img");
        choiceBtnImg.classList.add("choice-btn-img");

            const choiceBtnRock = choiceBtn.cloneNode();
            choiceBtnRock.id = "choice-btn-rock";

                const choiceBtnImgRock = choiceBtnImg.cloneNode();
                choiceBtnImgRock.setAttribute("src", "./imgs/svgs/emojis/rock.svg");
                choiceBtnImgRock.setAttribute("alt", "Rock");

            choiceBtnRock.appendChild(choiceBtnImgRock);

            const choiceBtnPaper = choiceBtn.cloneNode();
            choiceBtnPaper.id = "choice-btn-paper";

                const choiceBtnImgPaper = choiceBtnImg.cloneNode();
                choiceBtnImgPaper.setAttribute("src", "./imgs/svgs/emojis/paper.svg");
                choiceBtnImgPaper.setAttribute("alt", "Paper");

            choiceBtnPaper.appendChild(choiceBtnImgPaper);

            const choiceBtnScissors = choiceBtn.cloneNode();
            choiceBtnScissors.id = "choice-btn-scissors";

                const choiceBtnImgScissors = choiceBtnImg.cloneNode();
                choiceBtnImgScissors.setAttribute("src", "./imgs/svgs/emojis/scissors.svg");
                choiceBtnImgScissors.setAttribute("alt", "Scissors");
            
            choiceBtnScissors.appendChild(choiceBtnImgScissors);

    choiceBtns.appendChild(choiceBtnImgRock);
    choiceBtns.appendChild(choiceBtnImgPaper);
    choiceBtns.appendChild(choiceBtnImgScissors);
}

shuffleFavicon();

contentContainer.appendChild(scoreContainer);
contentContainer.appendChild(maxScoreForm);