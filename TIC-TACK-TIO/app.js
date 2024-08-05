let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#computer-score");

const drawgame = () => {
    console.log("the game is draw");
    meassage.innerText="the game is Draw.";
    meassage.style.backgroundColor="rgb(12, 1, 1)";
};

const showWinnwer = (userWin,userChoice,compChoice) => {
    if (userWin)
        {
            console.log("user win");
            meassage.innerText=`you Win. Your ${userChoice} beats ${compChoice}`;
            meassage.style.backgroundColor = "green";
            userScore+=1;
            user_score.innerText=userScore;
        }
    else{
        console.log("user lost");
        meassage.innerText=`you Lose.${compChoice} beats yours ${userChoice}`;
        meassage.style.backgroundColor="red";
        computerScore+=1;
        comp_score.innerText=computerScore;
    }
};

const genCompChoice= () => {
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame=( userChoice)=> {
    console.log("user choice= ",userChoice);
    const compChoice= genCompChoice(); 
    console.log("comp choice=",compChoice);

    if(userChoice === compChoice)
        {
            drawgame();
        }
    else
    {
        let userWin=true;
        if(userChoice == "Rock")
            {
                userWin=compChoice==="Paper"? false : true;
            }
        else if(userChoice === "Paper")
            {
                userWin=compChoice==="Scissors"? false : true;
            }
        else
            {
                userWin=compChoice==="Rock"? false : true;
            }
        showWinnwer(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});