var vp = document.getElementById("canva");
var lienzo = vp.getContext("2d");
var cpx = 170;
var cpy = 420;

var teclas = {
    Up:38,
    Down:40,
    Left:37,
    Rigth:39
};

document.addEventListener("keydown", moverCerdo);

function moverCerdo(tecla)
{
    lienzo.clearRect(0,0,vp.width,vp.heigth)
    switch (tecla.keyCode)
    {
        case teclas.Up:
            cpy = cpy - 10;
            break;
        
        case teclas.Down:
            cpy = cpy + 10;
            break;

        case teclas.Left:
            cpx = cpx - 10;
            break;

        case teclas.Rigth:
            cpx = cpx + 10;
            break;
    }
    dibujo();
    console.log(cpx);
    console.log(cpy);
}

var fondo = 
{
    url: "tile.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

function cargarFondo()
{
    fondo.cargaOk=true;
    dibujo();
}


var vaca =
 {
     url: "vaca.png",
     cargaOk: false
 };

 vaca.imagen = new Image();
 vaca.imagen.src = vaca.url;
 vaca.imagen.addEventListener("load", cargarVacas);

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujo();
}

var pollo = 
{
    url: "pollo.png",
    cargaOk: false
};

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujo();
}

var cerdo =
{
    url: "cerdo.png",
    cargaOk: false
};

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", dibujarCerdos);

function dibujarCerdos()
{
    cerdo.cargaOk = true;
    dibujo();
}



function dibujo() 
{
    lienzo.drawImage(fondo.imagen,0,0);
        if (vaca.cargaOk)
        {

            lienzo.drawImage(vaca.imagen,c[0],c[1]);
            lienzo.drawImage(vaca.imagen,c[2],c[3]);
            lienzo.drawImage(vaca.imagen,c[4],c[5]);
    
        }
        if (pollo.cargaOk)
        {
            lienzo.drawImage(pollo.imagen,c[6],c[7]);
            lienzo.drawImage(pollo.imagen,c[8],c[9]);
            lienzo.drawImage(pollo.imagen,c[10],c[11]);
    
        }
        if (cerdo.cargaOk)
        {
            lienzo.drawImage(cerdo.imagen,c[12],c[13]);
            lienzo.drawImage(cerdo.imagen,c[14],c[15]);
            lienzo.drawImage(cerdo.imagen,c[16],c[17]);

            lienzo.drawImage(cerdo.imagen,cpx,cpy);
            if(cpx == 420)
            {
                if(cpy == 430)
                {
                    alert("A dormir zzz xd");
                }
            }
        }



}

function aleatorio()
{
    var R = Math.floor(Math.random()*(5-0+1)+0);
    R = R*80;
    return R;
}