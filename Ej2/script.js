const VALOR_BTC_ETH = 13.5400;
const VALOR_BTC_USD = 39685.40;

function conversion() {
    const valorIngresado = document.querySelector("#valor-ingresado");
    const btcIngresado = valorIngresado.value;
    const conversionRequerida = confirm("Aceptar para ETH y cancelar para USD");

    if (conversionRequerida) {
        alert("Tu conversion es: " + (btcIngresado * VALOR_BTC_ETH));
    } 
    else {
        alert("Tu conversion es: " + (btcIngresado * VALOR_BTC_USD));
    }
}
    