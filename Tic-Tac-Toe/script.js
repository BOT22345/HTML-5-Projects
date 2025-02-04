// variables 
const cells=document.querySelectorAll(".cell");
const statusText=document.getElementById("status");
const resetButton=document.getElementById("reset");
let currentPlayer="X";
let gameBoard=["","","","","","","","",""];

const winPatters=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Handle cell clicks 
cells.forEach((cell,index)=>{
    cell.addEventListener("click",()=>{
        if (gameBoard[index] === "" && !checkWinner()){
            gameBoard[index]=currentPlayer;
            cell.innerHTML=currentPlayer;
        }
        
    })
})