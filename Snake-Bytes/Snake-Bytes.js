//varialbes
let inputDir ={x:0,y:0};
const foodSound =new Audio("./Assets/sounds/food.mp3");
const gameOverSound=new Audio("./Assets/sounds/gameOver.mp3");
const moveSound=new Audio("./Assets/sounds/move.mp3");
const musicSound=new Audio("./Assets/sounds/music.mp3");
let board = document.querySelector(".board");
let speed=6;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15},
];
let food={x:15,y:7};
let scoreBox=document.querySelector(".scoreBox");
let score=0;
let maxScore=localStorage.getItem("maxScore");
let maxScoreBoard=document.querySelector(".maxScoreBox");

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

    // if snake collides logic 
    if(isCollide(snakeArr)){
        musicSound.pause();
        
        inputDir={x:0,y:0};
        alert("You lost, Try again");
        snakeArr=[{x:13,y:15}];
        score=0;
        
    }
    maxScoreBoard.innerHTML=`Highest score : ${maxScore}`;
    
    function isCollide(snake){
        for(let i=1;i<snake.length;i++){
            if(snake[0].x===snake[i].x && snake[0].y===snake[i].y){
                gameOverSound.play();
                if(score>maxScore){
                    maxScore=score;
                    localStorage.setItem("maxScore",maxScore);
                }
                return true;
            }
        }
        if(snake[0].x>18 || snake[0].x<0  || snake[0].y>18 || snake[0].y<0){
            gameOverSound.play();
            if(score>maxScore){
                maxScore=score;
                localStorage.setItem("maxScore",maxScore);
            }
            

            return true;
        }
    }

    // updating food on snake connecting with food 
    if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
        score++;
        scoreBox.innerHTML=`Score : ${score}`;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y });
        let a=1
        let b=18
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

    //Part 2" Display the snake array and food
    //Display snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0){
            snakeElement.classList.add('snakeHead');
            if (inputDir.x === 1 && inputDir.y === 0) {
                snakeElement.style.transform = "rotate(270deg)"; 
            } else if (inputDir.x === -1 && inputDir.y === 0) {
                snakeElement.style.transform = "rotate(90deg)"; 
            } else if (inputDir.x === 0 && inputDir.y === 1) {
                snakeElement.style.transform = "rotate(0deg)"; 
            } else if (inputDir.x === 0 && inputDir.y === -1) {
                snakeElement.style.transform = "rotate(180deg)"; 
            }
        }
        else{
            snakeElement.classList.add('snakeBody');
        }
        board.appendChild(snakeElement);
    })

    //snake movement
    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]}
    }
    snakeArr[0].x=snakeArr[0].x+inputDir.x;
    snakeArr[0].y=snakeArr[0].y+inputDir.y;


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
    musicSound.play();
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