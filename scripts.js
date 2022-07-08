
let identificadorIntervaloDeTiempo;
const aloh = [ 'Hello!', 'Oi!', 'Bonjour!', 'Ciao!', 'Hallo!', 'привет!', 'Ni Hao!', 'Konnichi wa!', 'Aloha!', 'السلام' ];
var rand = Math.floor(Math.random()*aloh.length);
var rValue = aloh[rand];

function hello() {
    var hola = document.getElementById("hola");
    hola.firstChild.nodeValue= rValue;
}

function load() {
    var el = document.getElementById("saludo");
    el.addEventListener("click", hello, false);
}

document.addEventListener("DOMContentLoaded", load, false);
