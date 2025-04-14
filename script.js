// get access of required elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const restart = document.querySelector("#restart-btn");

// required variables
let userChoice;
let userCountWin = 0;
let compCountWin = 0;

// Implement logic of this game
const winMsg = (userChoice, compChoice, userWin) => {   // writing winning msg
    if(userWin) {
        userCountWin++;
        userScore.innerText = `${userCountWin}`;    // track the score
        msg.innerText = `Win! Your ${userChoice} beats ${compChoice}.`;  
    } else {
        compCountWin++;
        compScore.innerText = `${compCountWin}`;    // track the score
        msg.innerText = `Lost! ${compChoice} beats Your ${userChoice}.`;
    }
};
const gameCondition = (userChoice, compChoice) => {     // check the game condition
    if(userChoice === compChoice) {     // draw condition
        msg.innerText = "Draw! Play well next time...";     // show the draw msg
    } else {
        let userWin = true;     // to track winning condition of user
        if(userChoice === "rock") {     // user = rock
            userWin = compChoice === "paper" ? false : true;    // comp = paper or scissor
        } else if(userChoice === "paper") {     // user = paper
            userWin = compChoice === "rock" ? true : false;     // comp = rock or scissor
        } else if(userChoice === "scissor") {    // user = scissor
            userWin = compChoice === "paper" ? true : false;     // comp = paper or rock
        }
        winMsg(userChoice, compChoice, userWin);    // show winning msg
    }
};
const genCompChoice = () => {   // generate random choice
    const options = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);    // generate random whole number between 0 to 2
    return options[randomIdx];
};
const playGame = (userChoice) => {  // game
    let compChoice =  genCompChoice();  // modular function
    gameCondition(userChoice, compChoice);  // check game condition
};
choices.forEach((choice) => {   // for each choice
    choice.addEventListener("click", () => {    // click event for each choice
        userChoice = choice.getAttribute("id");     //get id of user choice
        playGame(userChoice);   // control the game logic
    });
});


// logic of restart button
restart.addEventListener("click", () => {
    // reset the score
    compCountWin = 0;
    userCountWin = 0;
    userScore.innerText = "0";
    compScore.innerText = "0";

    // reset the msg
    msg.innerText = "Play your move...";
});
