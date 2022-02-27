var tabla=parseInt(prompt("De que numero quieres saber la tabla?:"));
var repeticiones=parseInt(prompt("¿Hasta que numero lo quieres?: "));
var i;



for(i=0; i<=repeticiones; i++)
{
    var resultado=i*tabla;
    document.write(tabla+"x"+i+"="+resultado+"<br><br>");
}