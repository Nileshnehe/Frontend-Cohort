let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let scoreOElement = document.querySelector("#scoreO");
let scoreXElement = document.querySelector("#scoreX");

let turnO = true; 

let count = 0; 
let scoreO = 0; 
let scoreX = 0; 
let isWinnerFound = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        console.log("btn clicked");

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });

     if (count === 9 && !isWinnerFound) {
            gameDraw();
        }

});

const gameDraw = () => {
    msg.innerText = "Match was a Draw! 🤝 Play Again.";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} 🎉`;
    msgContainer.classList.remove("hide"); 
    isWinnerFound = true;
    disableBoxes(); 

    
    if (winner === "O") {
        scoreO++;
        scoreOElement.innerText = scoreO;
    } else {
        scoreX++;
        scoreXElement.innerText = scoreX;
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val  );
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    count = 0; 
    isWinnerFound = false; 
    enableBoxes();
    msgContainer.classList.add("hide"); 
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);