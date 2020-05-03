var PClick = false;
var Img    = new Array();

Img[0]="0.png";Img[1]="1.png";Img[2]="4.png";
Img[3]="3.png";Img[4]="Mina.png";var Con=0;


function imgC(imagen){
  Con++;
  if(Con<=10){
  var aleatorio=aleatorio=Math.round(Math.random()*(4-0)+parseInt(0));
  imagen.src=Img[aleatorio];
  imagen.onclick=function(){}
  }else{
  alert("Has_Perdido");
  var aleatorio=aleatorio=Math.round(Math.random()*(4-0)+parseInt(0));
  imagen.src=Img[4];
  imagen.onclick=function(){}
  }

}

function Game_O(){
  var AvisoG = document.createElement("div");
  

}
