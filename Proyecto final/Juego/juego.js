let numeroSecreto = Math.floor(Math.random()*100)+1; //Math.random para importar numeros aleatorios, .floor(Math.random()*100 va a hacer que numero no tenga decimales +1 porque tambien incluya 100
let intentos = 0;

function adivinar(){ //function NombredelaFuncion
    let intento = parseInt(document.getElementById("adivinaInput").value); //esto hace referencia al input, intento es el nombre d ela variable, parseInt transforma a numero entero, getElementById("") va a buscar al elemento por el id que le pongas
    intentos +=1; 
    let experimento = " ";

    if(intento < numeroSecreto){
        experimento = "El número es mayor.";}
    else if (intento > numeroSecreto){
        experimento = "El número es menor.";}
    else if (intento === numeroSecreto){
        experimento = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";}
    else{ 
        experimento = "¡Escribe un número!";}
    
    document.getElementById("resultado").innerText = experimento; //muestren los mensajes en pantalla
}