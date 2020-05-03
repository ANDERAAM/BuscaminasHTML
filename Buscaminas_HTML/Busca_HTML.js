var PClick = false;
var Img    = new Array();
//    aleatorio=Math.round(Math.random()*(16-1)+parseInt(1));
Img[0]="0.png";Img[1]="1.png";Img[2]="4.png";
Img[3]="3.png";Img[4]="Mina.png";


function imgC(imagen){
        aleatorio=Math.round(Math.random()*(4-0)+parseInt(0));
        imagen.src=Img[aleatorio];
        imagen.onclick=function(){
        //var Padre = document.getElementById("AA1");
        alert(imagen.id);
        //var Frente  = document.getElementById("img");
        //Padre.parentNode.removeChild(Padre);
         // Remove <ul>'s first child node (index 0)
      //  Padre.removeChild(Frente.items(0));
        }
}
