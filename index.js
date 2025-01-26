let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let playerWins = 0;
let pcWins = 0;

//choice 1 = "rock", choice 2 = "paper" choice 3 = "scissor"
function changeScore(choice){
    let pcChoice = Math.floor(Math.random() * 3 + 1);
    
    if(choice == pcChoice){
    //tie
        return;
    }else if(choice == 1 && pcChoice == 2){
        //pc wins
        pcWins++;
    }else if(choice == 1 && pcChoice == 3){
        //player wins
        playerWins++;
    }else if(choice == 2 && pcChoice == 1){
        //player wins
        playerWins++;
    }else if(choice == 2 && pcChoice == 3){
        //pc wins
        pcWins++;
    }else if(choice == 3 && pcChoice == 1){
        //pc wins
        pcWins++;
    }else if(choice == 3 && pcChoice == 2){
        //player wins
        playerWins++;
    }
    console.log("playerc: "+ choice + " pcc: " + pcChoice );
    checkGameCompletion();

}

function checkGameCompletion(){
    if(playerWins + pcWins == 3){
        //end game
        if(playerWins > pcWins){
            alert("you win");
        }else{
            alert("you lost");
        }
    }
}

rock.addEventListener("click", () => (changeScore(1)));
paper.addEventListener("click", () => (changeScore(2)));
scissor.addEventListener("click", () => (changeScore(3)));

