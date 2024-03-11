var picture = document.getElementById("cible");
var score = document.getElementById("score");
var top = Math.floor(Math.random() * spaceH);
var left = Math.floor(Math.random() * spaceW);
var spaceW = screen.width - parseInt(window.getComputedStyle(picture).getPropertyValue('width')) - 100;
var spaceH = screen.height - parseInt(window.getComputedStyle(picture).getPropertyValue('width')) - 100;
var points = 0; 
var message = document.getElementById("winner");
var bouton = document.getElementById("reset");

picture.addEventListener("click", ()=>{
   picture.style.top = Math.floor(Math.random() * spaceH) + "px";
   picture.style.left = Math.floor(Math.random() * spaceW) + "px";
   if (points < 100){
    points += Math.floor(Math.random() * 50);
   }else if (points >= 100){
    picture.style.display = "none";
    message.style.display = "block"; 
   }
   score.innerHTML = points;
})


// function init(){
//     picture = document.getElementById("cible");

//     spaceW = window.screen.width - picture.width;
//     spaceH = window.screen.height - picture.height;

//     setInterval(moveIt, 500);
// }

// function moveIt(){
//     picture.style.top = Math.floor(Math.random() * spaceH) + "px";
//     picture.style.left = Math.floor(Math.random() * spaceW) + "px";
// }