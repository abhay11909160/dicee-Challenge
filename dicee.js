var die1=Math.floor(Math.random()*6)+1;
var die2=Math.floor(Math.random()*6)+1;
var img1="images/dice"+die1+".png";
var img2="images/dice"+die2+".png";
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

if(die1>die2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(die1===die2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
