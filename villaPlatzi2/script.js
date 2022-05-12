var l = document.getElementById("lienzo");
var vp = l.getContext("2d");

var fondo =
{
   url:"tile.png",
   cargaOk:false 
} ;
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.addEvent


document.addEventListener("load",cargarFondo);


function cargarFondo()
{
    vp.drawImage()
}