let playerWins = 0;
let pcWins = 0;
let currentTurn = 0;

const buttonsDisplay = document.getElementById("buttonsDisplay");


//rows that display what player and pc has chose
//r1 for player
//r2 for pc
const r1 = [document.getElementById("r1b1"), document.getElementById("r1b2"), document.getElementById("r1b3")];
const r2 = [document.getElementById("r2b1"), document.getElementById("r2b2"), document.getElementById("r2b3")]

//rock paper scissor sprites to use for displaying choices
const constImgRef = ["assets/rock.png", "assets/paper.png", "assets/scissor.png"];

//assigns appropriate choices(rock,paper, scissor) to each row's element
function assignImages(pChoice, pcChoice){
    r1[currentTurn].setAttribute("src", constImgRef[pChoice - 1]);
    r2[currentTurn].setAttribute("src", constImgRef[pcChoice - 1]);
}

function checkGameCompletion(){
    if(currentTurn == 2){
        //end game
        //the timeout function allows time for the choice-box to update its display before alerting result
        setTimeout(() => {if(playerWins > pcWins){
            alert("you win");
        }else{
            alert("you lost");
        }}, 200)
        
    }
}
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
    assignImages(choice, pcChoice);
    checkGameCompletion();
    currentTurn++;

}


//register player choice
buttonsDisplay.addEventListener("mousedown",(e)=>{
    if(e.target.id == "rock"){
        changeScore(1);
    }else if(e.target.id == "paper"){
        changeScore(2);
    }else if(e.target.id == "scissor"){
        changeScore(3)
    }
})

buttonsDisplay.addEventListener("mouseover", (e)=>{
    if(e.target !== buttonsDisplay){
        e.target.setAttribute("style", "height:60px; width:120px");
    }
})

buttonsDisplay.addEventListener("mouseout", (e)=>{
    if(e.target !== buttonsDisplay){
        e.target.setAttribute("style", "height:30%; width:15%");
    }
})
