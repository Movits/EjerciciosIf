const precio = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const pResultado = document.querySelector("#resultado");

let carrito = [];

function agregarAlCarrito(tipo) {
    let precioProducto = precio.value;
    let cantProducto = cantidad.value;

    if (precioProducto <= 0 || cantProducto <= 0) {
        pResultado.innerHTML = "Por favor, ingrese un precio y cantidad válidos.";
    } else {
        carrito.push({ tipo, precioProducto, cantProducto });
        pResultado.innerHTML = "Producto agregado al carrito.";
    }
}

function finalizarCompra() {
    let total = 0;

    for (let producto of carrito) {
        let descuento = 0;
        if (producto.tipo === "carnes") {
            descuento = 0.25;
        } else if (producto.tipo === "lacteos") {
            descuento = 0.50;
        } else if (producto.tipo === "enlatados") {
            descuento = 0.70;
        }
        
        let precioTotal = producto.precioProducto * producto.cantProducto;
        let cantDescuento = precioTotal * descuento;
        total += precioTotal - cantDescuento;
    }
    
    pResultado.innerHTML = "El precio final con descuentos aplicados es: $" + total;
}