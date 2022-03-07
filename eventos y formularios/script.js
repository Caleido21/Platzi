 var boton = document.getElementById("b");
 var texto = document.getElementById("n_lineas");
 boton.addEventListener("click",go);

 var d=document.getElementById("lienzo");
 var fig=d.getContext("2d");


 function figura(ix,iy,sx,sy,fx,fy)
 {
 fig.beginPath();
 fig.strokeStyle="#378304";
 fig.moveTo(ix,iy);
 fig.lineTo(sx,sy);
 fig.lineTo(fx,fy);
 fig.stroke();
 fig.closePath();
 
 }

 function go(y)
 {
     console.log(y);
    var lineas= parseInt(texto.value);
    var i=0;
    var distancia=d.width/(lineas-1);
    centro=0;
    for(i=0;i<lineas;i++)
    {
        figura(0,150,150,centro,300,150);
        figura(150,0,centro,150,150,300);
        centro=centro+distancia;
    }
    console.log(lineas);

 }

