var random1 =Math.floor(Math.random()*6)+1;
var random2 =Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice"+random1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+random2+".png");

var msg="";
if(random1==random2){
  msg="Draw !";
}
else if (random1>random2) {
  msg="🚩 Player 1 Wins !";
}
else{
  msg="Player 2 Wins ! 🚩";
}
document.querySelector("h1").innerHTML=msg;
