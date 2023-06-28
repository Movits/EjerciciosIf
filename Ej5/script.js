const tipoMascota = document.querySelector("#tipoMascota");
const cantidadMascotas = document.querySelector("#cantidadMascotas");
const pResultado = document.querySelector("#resultado");
const duracionPaseo = document.querySelector("#duracionPaseo");
const pCosto = document.querySelector("#costo");
const precios = {
    perro: 1000,
    gato: 800
};

function validarPaseo() {
    let Mascota = tipoMascota.value;
    let cantMascotas = cantidadMascotas.value;
    let duracion = duracionPaseo.value;
    let tarifaPorMinutoPerro = 50;
    let tarifaPorMinutoGato = 30;

    if (Mascota === "perro" || Mascota === "gato") {
        if (cantMascotas > 0 && cantMascotas <= 3) {
            if (duracion >= 30 && duracion <= 60) {
                pResultado.innerHTML = "Es posible realizar el paseo de " + cantMascotas + " " + Mascota + "(s) por " + duracion + " minutos.";

                let precioPorMascota;
                let tarifaPorMinuto;
                if (Mascota === "perro") {
                    precioPorMascota = precios.perro;
                    tarifaPorMinuto = tarifaPorMinutoPerro;
                } else {
                    precioPorMascota = precios.gato;
                    tarifaPorMinuto = tarifaPorMinutoGato;
                }

                let minutosExcedentes = 0;
                if (duracion > 30) {
                    minutosExcedentes = duracion - 30;
                }
                let costoPorDuracion = minutosExcedentes * tarifaPorMinuto;
                let costoTotal = (cantMascotas * precioPorMascota) + costoPorDuracion;

                pCosto.innerHTML = "Costo total del paseo: " + costoTotal;
            } else {
                pResultado.innerHTML = "No es posible realizar el paseo, la duración debe ser entre 30 y 60 minutos.";
                pCosto.innerHTML = "";
            }
        } else {
            pResultado.innerHTML = "No es posible realizar el paseo, la cantidad de mascotas debe ser entre 1 y 3.";
        }
    } else {
        pResultado.innerHTML = "Por favor, ingrese (perro o gato) como tipo de mascota.";
    }
}
