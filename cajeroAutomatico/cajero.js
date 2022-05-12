var boton = document.getElementById("botoncito");
var cantidadB = [];
var entregados = [];
var papeles;
var dinero ;
var dineroEnCajero = 0 ;
var Resultado = document.getElementById("resultado");
var entradaD = document.getElementById("cantidadR");
var saldoR = document.getElementById("saldo")
cantidadB.push(b100 = new billete(100 , 300));
cantidadB.push(b50 = new billete(50 , 300));
cantidadB.push(b20 = new billete(20 , 400));
cantidadB.push(b10 = new billete(10 , 400));

for (var din of cantidadB)
{
    dineroEnCajero += din.valor * din.cantidad;
}

saldoR.innerHTML=dineroEnCajero;

boton.addEventListener("click", atm);
console.log(entradaD.value);
function atm ()
{
    dinero = entradaD.value;
    if (dinero <= dineroEnCajero)
    {
        dineroEnCajero -= dinero;
        saldoR.innerHTML=dineroEnCajero;

        for (var int of cantidadB)
        {
            if (dinero > 0)
            {
                papel =Math.floor(dinero / int.valor);
                if (papel>int.cantidad)
                {
                    papeles  = int.cantidad;
                }
                else 
                {
                    papeles = papel;
                }

                entregados.push(new billete (int.valor, papeles));
                dinero = dinero - (papeles * int.valor);
            }
        }
        for (var ent of entregados)
        {
        Resultado.innerHTML  += "Recibiste " + ent.cantidad + " de billetes de $" + ent.valor + "<br>";  
        }
        if(dinero > 0)
        {
            if (dinero > 10)
            {
                Resultado.innerHTML += "Lo siento, no cuentas con saldo suficiente :(";
            }
            else
            {
                Resultado.innerHTML += "No se han podido retirar $" + dinero;
            }
        } 
    }
    else
    {
        Resultado.innerHTML += "Lo siento, no cuentas con saldo suficiente :(";
    }
}

