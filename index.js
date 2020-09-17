document.querySelector(".dice .img1").srcset = "images/dice6.png";
document.querySelector(".dice .img2").srcset = "images/dice6.png";


randomNumber1 = Math.floor(Math.random() * 6)+1;
randomNumber2 = Math.floor(Math.random() * 6)+1;

document.querySelectorAll("img")[0].setAttribute("srcset","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("srcset","images/dice"+randomNumber2+".png");
if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerText = "Draw!";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerText = "🚩Player 1 won";
}else{
  document.querySelector("h1").innerText = "Player 2 won🚩";
}
