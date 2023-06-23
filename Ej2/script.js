const VALOR_BTC_ETH = 13.5400;
const VALOR_BTC_USD = 39685.40;

let btcIngresado = prompt("Ingrese bitcoins a convertir");
let conversionRequerida = confirm("Aceptar para ETH y cancelar para USD");

//conversionRequeriada == ture
if (conversionRequerida) {
    alert("Tu conversion es: " + (btcIngresado * VALOR_BTC_ETH));
} else {
    alert("Tu conversion es: " + (btcIngresado * VALOR_BTC_USD));
}