let numeroRecibido = prompt("Ingrese 3 numeros");

if (numeroRecibido.length === 3) {
    let primerNum = numeroRecibido[0];
    let segundoNum = numeroRecibido[1];
    let terceroNum = numeroRecibido[2];

    if ((primerNum === segundoNum) && (segundoNum === terceroNum)) {
        alert("Ganaste el primer premio!")
} 
    else if((primerNum === segundoNum) || (primerNum === terceroNum) || (segundoNum === terceroNum)){
        alert("Ganaste el segundo premio!")
}
    else {
        alert("Ganaste un helado!")
}
}
else {
    alert("Por favor, ingrese exactamente 3 numeros.");
}