class pakiman 
{
    constructor(n  , tipo , vida , ataque , defensa)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.imagen.src = imagenes[this.nombre];
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /> <strong>" + this.nombre + "</strong> <br />");
        document.write("Vida: " + this.vida);
        document.write("<br /> Tipo: " + this.tipo );
        document.write("<br /> Ataque: " + this.ataque);
        document.write("<br /> Defensa: " + this.defensa + "<br> <hr>");
        
    }

    hablar()
    {
        alert("Atrapaste un " + this.nombre);
    }
}
