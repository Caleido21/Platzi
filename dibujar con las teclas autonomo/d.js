//ELEMENTOS HTML

var d=document.getElementById("canva");
var lienzo=d.getContext("2d");


var fx=299;
var fy=299;
var cx=301;
var cy=301;
var colors;

var teclas=
{
LEFT:37,
UP:38,
RIGTH:39,
DOWN:40,
A:65,
S:83,
D:68,
W:87,
black:"black",
red:"red",
purple:"purple",
blue:"blue"
};

document.addEventListener("keydown",dibujo);
// document.addEventListener("keyup",colores);
dibujar(299,299,301,301,colors); 


// function colores(colorful)
// {
//         switch(colorful.keyCode)
//         {
//             case 
//         }
// }

function dibujo(escuchador)
{
//     console.log("hola");


    var m=2 //m=movimiento
    //  codigo escrito con IF
    // if (escuchador.keyCode==teclas.W)
    // {
    //     console.log("azul")
    //     colors="blue";
    // }

    // if (escuchador.keyCode==teclas.S)
    // {
    //     console.log("purpura");
    //     colors="purple"
    // }

    if (escuchador.keyCode==teclas.D)
    {
        console.log("rojo");
        colors="red";
    }
    // if (escuchador.keyCode==teclas.A)
    // {
    //     console.log("negro");
    //     colors= "black";
    // }

    //codigo escrito con switch
    switch(escuchador.keyCode)
    {
        case teclas.UP:
            console.log("arriba");
            fy=fy-m;
            cy=cy-m;
            dibujar(fx,fy,cx,cy,colors);
        break;

        case teclas.DOWN:
            console.log("abajo");
            fy=fy+m;
            cy=cy+m;
            dibujar(fx,fy,cx,cy,colors);
        break;

        case teclas.LEFT:
            console.log("izquierda");
            fx=fx-m;
            cx=cx-m;
            dibujar(fx,fy,cx,cy,colors);
        break;

        case teclas.RIGTH:
            console.log("derecha");
            fx=fx+m;
            cx=cx+m;
            dibujar(fx,fy,cx,cy,colors);
        break;

        case teclas.A:
            console.log("negro");
            var colors=teclas.black;
        break;

        case  teclas.S:
            console.log("purpura");
            var colors=teclas.purple;
        break;

        case teclas.D:
            console.log("rojo");
            var colors =teclas.red;
        break;

        case teclas.W:
            console.log("azul");
            var colors=teclas.blue;
    }
    

}

function dibujar(x,y,sx,sy,color)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth= 2;
    lienzo.moveTo(x,y);
    lienzo.lineTo(sx,sy);
    lienzo.stroke();
    lienzo.closePath();
}