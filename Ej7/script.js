const inputFrase = document.querySelector("#frase");
const inputPalabra = document.querySelector("#palabra");
const pResultado = document.querySelector("#resultado")

function detectarPalabra() {
    let frase = inputFrase.value;
    let palabra = inputPalabra.value;

    if (frase && palabra) {
        if (frase.includes(palabra)) {
            pResultado.innerHTML = "La palabra '" + palabra + "' fue encontrada en la frase.";
        } else {
            pResultado.innerHTML = "La palabra '" + palabra + "' no fue encontrada en la frase.";
        }
    } else {
        pResultado.innerHTML = "Por favor ingrese una frase y una palabra.";
    }
}