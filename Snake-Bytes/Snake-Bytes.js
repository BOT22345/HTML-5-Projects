//varialbes
let direction ={x:0,y:0};
const foodSound =new Audio("./Assets/sounds/food.mp3");
const gameOverSound=new Audio("./Assets/sounds/gameOver.mp3");
const moveSound=new Audio("./Assets/sounds/move.mp3");
const musicSound=new Audio("./Assets/sounds/music.mp3");
let board = document.querySelector(".board");
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15},
];

//functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return ;
    }else{
        lastPaintTime=ctime;
        gameEngine();
    }
}

function gameEngine(){
    // Part 1: Updating the snake array and food 

    //Part 2" Display the snake array and food
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}

//main logic
window.requestAnimationFrame(main);