//VARIABLES
var d=document.getElementById("areaDibujo");
var lienzo=d.getContext("2d");
//OBJETOS
var teclas=
{
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGTH:39
};

console.log(teclas);
//FUNCIONES
function dibujar(tecla)
{
    if (tecla.keyCode==teclas.UP)
    {
        console.log("flecha arriba");
    }
    if (tecla.keyCode==teclas.DOWN)
    {
        console.log("flecha abajo");
    }
    if (tecla.keyCode==teclas.LEFT)
    {
        console.log("flecha izquierda");
    }
    if (tecla.keyCode==teclas.RIGTH)
    {
        console.log("flecha derecha");
    }
    
}

document.addEventListener("keyup",dibujar);

