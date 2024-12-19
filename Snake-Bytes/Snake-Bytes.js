//varialbes
let direction ={x:0,y:0};
const foodSound =new Audio("./Assets/sounds/food.mp3");
const gameOverSound=new Audio("./Assets/sounds/gameOver.mp3");
const moveSound=new Audio("./Assets/sounds/move.mp3");
const musicSound=new Audio("./Assets/sounds/music.mp3");


//functions
function main(ctime){
    window.requestAnimationFrame(main);
}

//main logic
window.requestAnimationFrame(main);