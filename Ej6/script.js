const precio = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const pResultado = document.querySelector("#resultado");

function calculateDiscount(tipoProducto) {
    let precioProducto = precio.value;
    let cantProducto = cantidad.value;
    let descuento = 0;

    if (precioProducto < 0 || cantProducto < 0) {
        pResultado.innerHTML = "Por favor, ingrese un precio y cantidad válidos.";
    } else {

        if (tipoProducto === "carnes") {
            descuento = 0.25;
        } else if (tipoProducto === "lacteos") {
            descuento = 0.50;
        } else if (tipoProducto === "enlatados") {
            descuento = 0.70;
        }
    
        let precioTotal = precioProducto * cantProducto;
        let cantDescuento = precioTotal * descuento;
        let precioFinal = precioTotal - cantDescuento;
    
        pResultado.innerHTML = "El precio final con descuento aplicado es: $" + precioFinal;
    }
}