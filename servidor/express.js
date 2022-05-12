var express = require("express");
var app = express();


app.get("/", index);

function index(peticion, resultado)
{
    resultado.send("<!DOCTYPE html> <head><title>Hola Nodejs</title> </head> <body> <h1>MI PRIMER PAGINA USANDO HTML, CSS, JAVASCRIPT Y NODEjs</h1> <p>Sinceramente nunca esperé poder hacer algo así por mi cuenta<br> pero ahora me tengo un poco mas de fé<br> creo que puedo lograr todo lo que me propongo</p>");
}

app.listen(8080);