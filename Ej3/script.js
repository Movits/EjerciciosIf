const NUMERO_GANADOR_UNO = 333;
const NUMERO_GANADOR_DOS = 23;

let numeroRecibido = prompt("Ingrese 3 numeros");

if (NUMERO_GANADOR_UNO == numeroRecibido) {
    alert("Ganaste el primer premio!")
} 
else if(NUMERO_GANADOR_DOS == numeroRecibido){
    alert("Ganaste el segundo premio!")
}
else {
    alert("Ganaste un helado!")
}