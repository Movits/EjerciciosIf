const cantidadPerros = document.querySelector("#cant-perros");
const cantidadGatos = document.querySelector("#cant-gatos");
const pResultado = document.querySelector("#resultado");
const duracionPaseo = document.querySelector("#duracionPaseo");
const pCosto = document.querySelector("#costo");
const precios = {
    perro: 1000,
    gato: 1000 * 1.7
};

function validarPaseo() {
    let cantGatos = cantidadGatos.value;
    let cantPerros = cantidadPerros.value;
    let duracion = duracionPaseo.value;
    let tarifaPorMinutoPerro = 10;
    let tarifaPorMinutoGato = 20;

    if (cantPerros <= 2 && cantGatos <= 2 && cantPerros >= 0 && cantGatos >= 0) {

        if (duracion >= 30 && duracion <= 60) {
            if (cantPerros > 0 || cantGatos > 0) {
                let message = "Es posible realizar el paseo";
                if (cantPerros > 0 && cantGatos > 0) {
                    message += " de " + cantPerros + " perro(s) y " + cantGatos + " gato(s)";
                } else if (cantPerros > 0) {
                    message += " de " + cantPerros + " perro(s)";
                } else if (cantGatos > 0) {
                    message += " de " + cantGatos + " gato(s)";
                }
                message += " por " + duracion + " minutos.";
                pResultado.innerHTML = message;
    
                let minutosExcedentes = 0;
                if (duracion > 30) {
                    minutosExcedentes = duracion - 30;
                }
    
                let costoTotal = 0;

                if (cantPerros > 0) {
                    costoTotal += cantPerros * (precios.perro + minutosExcedentes * tarifaPorMinutoPerro);
                }

                if (cantGatos > 0) {
                    costoTotal += cantGatos * (precios.gato + minutosExcedentes * tarifaPorMinutoGato);
                }

                pCosto.innerHTML = "Costo total del paseo: " + costoTotal;

            } else {
                pResultado.innerHTML = "Debe ingresar al menos un perro o gato para realizar el paseo.";
                pCosto.innerHTML = "";
            }
        } else {
            if (cantPerros > 0 || cantGatos > 0) {
                pResultado.innerHTML = "No es posible realizar el paseo, la duración debe ser entre 30 y 60 minutos.";
                pCosto.innerHTML = "";
            } else {
                pResultado.innerHTML = "Debe ingresar al menos un perro o gato y la duración debe ser entre 30 y 60 minutos.";
                pCosto.innerHTML = "";
            }
        }
    
    } else {
        pResultado.innerHTML = "No es posible realizar el paseo. La cantidad de perros y gatos debe ser entre 0 y 2.";
    }
}    
