var tableroo = document.getElementById("tablero");
var t = tablero.getContext("2d");
var init = document.getElementById("inicio");
var largo = [];
var inicioX = [];
var inicioY =[];
inicioX.push(500);
inicioY.push(475);
var tam = 50;
var key;
var time = 1000;
var comidaX = random(0 , 19) * 50 ;
var comidaY = random(1 , 19) * 50 - 25;

class Cubo
{
    constructor(cx,cy)
    {
        this.coordenadaX = cx;
        this.coordenadaY = cy;
    }

    dibujar(cx,cy)
    {
        t.beginPath();
        t.moveTo(cx,cy);
        t.lineWidth = 50;
        t.lineTo(cx + 50, cy);
        t.stroke();
        t.closePath();

    }
}

var teclas = {
    Up:38,
    Down:40,
    Left:37,
    Rigth:39
};

document.addEventListener("keydown",mover);
init.addEventListener("click", inicio);

largo.push(new Cubo(inicioX[0],inicioY[0]));
largo.push(new Cubo(inicioX,inicioY));

function mover(tecla)
{
    clearTimeout(movimiento);
    switch(tecla.keyCode)
    {
        case teclas.Up:
            key = teclas.Up;
            break;

        case teclas.Down:
            key = teclas.Down;
            break;

        case teclas.Left:
            key = teclas.Left;
            break;

        case teclas.Rigth:
            key = teclas.Rigth;
            break;
    }
    console.log(key);
}
function movimiento()
{
    switch(key)
    {
        case teclas.Up:
            inicioY[0] -= tam;
            key = teclas.Up;
            break;

        case teclas.Down:
            inicioY[0] += tam;
            key = teclas.Down;
            break;

        case teclas.Left:
            inicioX[0] -= tam;
            key = teclas.Left;
            break;

        case teclas.Rigth:
            inicioX[0] += tam;
            key = teclas.Rigth;
            break;
    }

    t.clearRect(0,0,1000,1000);
    largo[0].dibujar();
    comida.dibujar(comidaX,comidaY);
    comprobacion();
    setTimeout(movimiento,time);
}

var comida = new Cubo();



function inicio()
{
    key = 38;
    movimiento();
}

function comer()
{

}

function comprobacion()
{ if (inicioX[0] == comidaX)
    {
        if (inicioY[0] == comidaY)
        {
            comidaX = random(0 , 20) * 50;
            comidaY = random(0 , 20) * 50 - 25;
            comida.dibujar(comidaX,comidaY);
            time = time * 0.95;
            dos = true;

        }
    }
    if(inicioX[0] < 0)
    {
        alert("Haz Perdido");
        window.location.reload();
    }
    if(inicioY[0] < 0)
    {
        alert("Haz Perdido");
        window.location.reload();
    }
    if(inicioX[0] > 1000)
    {
        alert("Haz Perdido");
        window.location.reload();
    }
    if(inicioY[0] > 1000)
    {
        alert("Haz Perdido");
        window.location.reload();
    }

}
function random(min, max)
{
   var r = Math.floor(Math.random()*(max - min +1))+min; 
   return r;
}