// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let listaDeAmigos = [];
let nombreAmigo = "";
// funciones html mostrar en los elementos de html
function agregaLista(elemento,salida){
    document.getElementById(elemento).innerHTML += salida
}
function muestraLista(elemento,salida){
    document.getElementById(elemento).innerHTML = salida
}
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

// agregar amigos a la lista
function agregarAmigo() {
nombreAmigo = document.getElementById("amigo").value;
if (nombreAmigo==""){
    alert("Ingresa un nombre, por favor");
} else if (listaDeAmigos.includes(nombreAmigo)){
    alert("El nombre ya esta en la lista");
} else {
    listaDeAmigos.push(nombreAmigo);
limpiarCaja();
}
agregaLista("listaAmigos",`<li>${nombreAmigo}</li>`);
}



// sortear amigo con función aleatoria 
function sortearAmigo(){
    if (listaDeAmigos==""){
        alert("Por favor ingresa los participantes")
    } else {
    let random = Math.floor(Math.random()*listaDeAmigos.length);
    let amigosecreto = listaDeAmigos[random];
        muestraLista("listaAmigos","");
        muestraLista("resultado",`El amigo secreto es ${amigosecreto}`);
}
}

