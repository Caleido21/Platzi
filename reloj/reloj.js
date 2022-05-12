var rel = document.getElementById("relojero");
window.onload = moverHora;
function moverHora(log)
{
    var r = new Date();
    var hora = r.getHours();
    var minutos = r.getMinutes();
    var segundos = r.getSeconds();
    if (hora < 10)
    {
        hora = "0" + hora;
    }
    if (minutos < 10)
    {
        minutos = "0" + minutos;
    }
    if (segundos < 10)
    {
        segundos = "0" + segundos;
    }
    var imprimirHora = hora + ":" + minutos + ":" + segundos;
    rel.innerHTML=imprimirHora;
    setTimeout(moverHora, 1000);
}
