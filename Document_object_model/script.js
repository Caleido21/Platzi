var console.log("el javascript está conectado");
//vamos a dibujar sobre el canvas

var d=document.getElementById("dibujo");
var lienzo=d.getContext("2d");
var limite=30;
var line=0;
var iyv=0;
var fxv=10;


function linea(color,ix,iy,fx,fy)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(ix,iy);
    lienzo.lineTo(fx,fy);
    lienzo.lineTo()
    lienzo.stroke();
    lienzo.closePath();
}
while(line<limite)
{
    
    linea("purple",0,iyv,fxv,300);
    line=line+1;
    iyv=iyv+10;
    fxv=fxv+10;
}
iyv=0;
fxv=10;
line=0;
while(line<limite)
{
    console.log("holi;");
    linea("red",iyv,0,300,fxv);
    line=line+1;
    iyv=iyv+10;
    fxv=fxv+10
}


// lienzo.lineTo(100,200);
// lienzo.lineTo(200,100);
// lienzo.lineTo(100,100);
// lienzo.lineTo(100,200);
// lienzo.moveTo(200,100);
// lienzo.lineTo(200,200);