const tipoMascota = document.querySelector("#tipoMascota");
const cantidadMascotas = document.querySelector("#cantidadMascotas");
const pResultado = document.querySelector("#resultado");
const duracionPaseo = document.querySelector("#duracionPaseo");


function validarPaseo() {
    let Mascota = tipoMascota.value;
    let cantMascotas = cantidadMascotas.value;
    let duracion = duracionPaseo.value;

    if (Mascota === "Perro" || Mascota === "Gato") {
        if (cantMascotas > 0 && cantMascotas <= 3) {
            if (duracion >= 30 && duracion <= 60) {
                pResultado.innerHTML = "Es posible realizar el paseo de " + cantMascotas + " " + Mascota + "(s) por " + duracion + " minutos.";
            } else {
                pResultado.innerHTML = "No es posible realizar el paseo, la duración debe ser entre 30 y 60 minutos.";
            }
        } else {
            pResultado.innerHTML = "No es posible realizar el paseo, la cantidad de mascotas debe ser entre 1 y 3.";
        }
    } else {
        pResultado.innerHTML = "Por favor, ingrese (Perro o Gato) como tipo de mascota.";
    }
}
