/* Programar al robot chef que va a prepararnos las sopas.
Para preparar una sopa se necesitan Verduras, pollo o carne,
Agua y Condimentos, y en caso de que no tengamos Condimentos
pero si un Cubo de caldo de todas formas podemos cocinar la sopa. */

/* let tenemosVerdura = confirm("Hay verdura disponible?");
let tenemosPollo = confirm("Hay pollo disponible?");
let tenemosCarne = confirm("Hay carne disponible?");
let tenemosAgua = confirm("Hay agua disponible?");
let tenemosCondimentos = confirm("Hay condimentos disponible?");
let tenemosCuboDeCaldo = confirm("Hay cubo de clado disponible?"); */

const inputVerdura = document.querySelector("#input-verdura");
const inputPollo = document.querySelector("#input-pollo");
const inputCarne = document.querySelector("#input-carne");
const inputAgua = document.querySelector("#input-agua");
const inputCondimentos = document.querySelector("#input-condimentos");
const inputCuboDeCaldo = document.querySelector("#input-cubodecaldo");
const pResultado = document.querySelector("#resultado");


function enviar() {
    
    let tenemosVerdura = inputVerdura.value;
    let tenemosPollo = inputPollo.value;
    let tenemosCarne = inputCarne.value;
    let tenemosAgua = inputAgua.value;
    let tenemosCondimentos = inputCondimentos.value;
    let tenemosCuboDeCaldo = inputCuboDeCaldo.value;

    if ((tenemosVerdura=="y") && (tenemosCarne=="y" || tenemosPollo=="y") && (tenemosAgua=="y") && (tenemosCondimentos=="y" || tenemosCuboDeCaldo=="y")) {
        pResultado.innerHTML = "Preparando sopa";
    } else {
        pResultado.innerHTML = "No se puede cocinar la sopa";
    }
}
    