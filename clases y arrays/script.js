var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png"; 

var pakimanes = [];
pakimanes.push(cauchin = new pakiman("cauchin" , "tierra" , 100 , 40 , 30));
pakimanes.push(tocinauro = new pakiman("tocinauro" , "electrico" , 120 , 30 ,30));
pakimanes.push(pokacho = new pakiman ("pokacho", "agua" , 80 , 50 , 50));

for (var paki of pakimanes)
{
    paki.mostrar();
    paki.hablar();
}
