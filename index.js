var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var buttonleft = document.getElementById("button");
var buttonRight = document.getElementById("buttons");

function mymessage2(){
  var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
  if(raceCarLeft < 260){
    racecar.style.left = (raceCarLeft + 130) + "px";
  }
}

function mymessage1(){
 var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
 racecar.style.left = (raceCarLeft - 130) + "px";

}


var counter = 0;

bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    bluecar.style.left = random + "px";
    counter++;
})






window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
    if(raceCarLeft < 260){racecar.style.left = (raceCarLeft + 130) + "px"}};

    if(e.keyCode == "37"){
        {var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
    if(raceCarLeft > 0){racecar.style.left = (raceCarLeft - 130) + "px"}};

    }
})

setInterval(function Gameover (){
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

    if((bluecarLeft === raceCarLeft) && (bluecarTop > 250) && (bluecarTop < 450)){
        result.style.display = "block";
        game.style.display = "none" ;
        score.innerHTML =  `score : ${counter}`;
        counter = 0;       
    }
},10);







