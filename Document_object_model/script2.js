var d=document.getElementById("dibujo");
var lienzo=d.getContext("2d");
var limite=30;
var dibujito=0;
var ix=0;
var iy=0;
var sx=10;
var sy=300;
var tx=300;
var ty=290;
var cx=290;
var cy=0;
var qx=0;
var qy=10;

while(dibujito<limite)
{
    lienzo.beginPath();
    lienzo.strokeStyle="purple";
    lienzo.moveTo(ix,iy,);
    lienzo.lineTo(sx,sy);
    lienzo.lineTo(tx,ty);
    lienzo.lineTo(cx,cy);
    lienzo.lineTo(qx,qy);
    lienzo.stroke();
    lienzo.closePath();

    iy=iy+10;
    sx=sx+10;

    ty=ty-10;
    cx=cx-10;

    qy=qy+10;
    dibujito=dibujito+1;
}