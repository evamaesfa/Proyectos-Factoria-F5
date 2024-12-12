let numeroSecreto = Math.floor(Math.random()*100)+1; //Math.random para importar numeros aleatorios, .floor(Math.random()*100 va a hacer que numero no tenga decimales +1 porque tambien incluya 100
let intentos = 0;
let tiempoRestante = 60;
let tiempo;

function iniciarTiempo(){
    tiempo = setInterval(() => {
        tiempoRestante -=1;
        document.getElementById("temporizador").innerText = "Tiempo restante " + tiempoRestante + " segundos."; //innerText es que va a cambiar el texto, lo de "+ es para llamar a la variable +"

        if(tiempoRestante === 0){
            clearInterval(tiempo);
            document.getElementById("resultado").innerText= "¡Se acabó el tiempo!";
            document.getElementById("reset").style.display="block";
        }
    },1000);
}

function adivinar(){ //function NombredelaFuncion
    let intento = parseInt(document.getElementById("adivinaInput").value); //esto hace referencia al input, intento es el nombre de la variable, parseInt transforma a numero entero, getElementById("") va a buscar al elemento por el id que le pongas
    intentos +=1; 
    let experimento = " ";

    if(intento < numeroSecreto){
        experimento = "El número es mayor.";}
    else if (intento > numeroSecreto){
        experimento = "El número es menor.";}
    else if (intento === numeroSecreto){
        experimento = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";
        clearInterval(tiempo);
        document.getElementById("reset").style.display="block";}
    else{ 
        experimento = "¡Escribe un número!";}

    document.getElementById("resultado").innerText = experimento; //muestren los mensajes en pantalla
}

function reiniciar(){
    numeroSecreto = Math.floor(Math.random()*100)+1;
    intentos = 0;
    tiempoRestante = 60;
    document.getElementById("adivinaInput").value="";
    document.getElementById("resultado").innerText="";
    document.getElementById("tiempo").innerText="Tiempo restante " + tiempoRestante + " segundos.";
    document.getElementById("reset").style.display="none";
    iniciarTiempo();
}

document.addEventListener('DOMContentLoaded', () => { // Ens assegurem que el DOM estigui carregat abans de començar
    iniciarTiempo(); // Inicia el temporitzador al carregar la pàgina
});
