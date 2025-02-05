// variables 
const cells=document.querySelectorAll(".cell");
const statusText=document.getElementById("status");
const resetButton=document.getElementById("reset");
let currentPlayer="X";
let gameBoard=["","","","","","","","",""];

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Handle cell clicks 
cells.forEach((cell,index)=>{
    cell.addEventListener("click",()=>{
        if (gameBoard[index] === "" && !checkWinner()){
            gameBoard[index]=currentPlayer;
            cell.innerHTML=currentPlayer;
        
            if(checkWinner()){
                statusText.innerHTML=`Player ${currentPlayer} Wins`;
            }
            else if (gameBoard.every(cell => cell!== "")){
                statusText.innerHTML="It's a draw";
            }
            else{
                currentPlayer=currentPlayer==="X" ?"O":"X";
                statusText.innerHTML=`Player ${currentPlayer} Turn`;
            }

        }
        
    })
})

//check winner function 
function checkWinner(){
    return winPatterns.some(pattern=>{
        const [a,b,c]=pattern;
        return(gameBoard[a] && gameBoard[a]===gameBoard[b] && gameBoard[a]===gameBoard[c]);
    }
    )
}

//game reset functionality 
resetButton.addEventListener('click',()=>{
    gameBoard=["","","","","","","","",""];
    cells.forEach(cell=>{cell.innerHTML=""});
    currentPlayer="X";
    statusText.innerHTML="Player X's turn";
})