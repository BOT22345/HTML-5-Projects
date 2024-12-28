//varialbes
let inputDir ={x:0,y:0};
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
let food={x:15,y:7};

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
    //Display snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0){
            snakeElement.classList.add('snakeHead');
        }
        else{
            snakeElement.classList.add('snakeBody');
        }
        board.appendChild(snakeElement);
    })
    //Display food
    // console.log(food.y);
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

//main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',(e)=>{
    inputDir={x:0,y:0};
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            inputDir.x=0;
            inputDir.y=-1;
            console.log("up pressed");
            break;
            case "ArrowDown":
            inputDir.x=0;
            inputDir.y=1;
            console.log("down pressed");
            break;
            case "ArrowLeft":
            inputDir.x=-1;
            inputDir.y=0;
            console.log("left pressed");
            break;
            case "ArrowRight":
            inputDir.x=1;
            inputDir.y=0;
            console.log("right pressed");
            break;
    }
})