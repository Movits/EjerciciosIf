/* 
    Problema?
    + credenciales de usuario registrado
    + informar el resultado via web
    + agregar forma de recibir el usuario y contrasena
    + verificar si el usuaria que intenta loguarse esta registrado
    + agregar otro usuario registrado
    + ahora verificar todos los usuarios registrados

    Info?
    + nombre y contrasena de usuario

*/

const inputUsuario = document.querySelector("#usuario-nombre")
const inputContrasena = document.querySelector("#usuario-contrasena")
const pResultado = document.querySelector("#resultado")

const USUARIO_NOMBRE_REGISTRADO = "Roberto";
const CONTRASENA_REGISTRADA = "Roberto1.";
const USUARIO_NOMBRE_REGISTRADO_2 = "Juan";
const CONTRASENA_REGISTRADA_2 = "juanito";

const imgRes1 = document.querySelector("#img-verificada");
const imgRes2 = document.querySelector("#img-no-verificada");

/* let usuarioNombreIngresado = prompt("Ingrese Usuario");
let usuarioContrasenaIngresada = prompt("Ingresar contrasena"); */

let usuarioNombreIngresado = "def nombre";
let usuarioContrasenaIngresada = "def contrasena";

function verificar(){
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContrasenaIngresada = inputContrasena.value;
    
    if (((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA)) ) {
        /* document.write("Usuario y contrasena correctos") */
        pResultado.innerHTML = "Usuario y contrasena correctos " + USUARIO_NOMBRE_REGISTRADO;
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";
    } else if (((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA_2))) {
        pResultado.innerHTML = "Usuario y contrasena correctos " + USUARIO_NOMBRE_REGISTRADO_2;
        pResultado.style.color = "green";
        imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
        imgRes1.style.display = "block";
        imgRes2.style.display = "none";
    }
    
    else{
        /* document.write("Usuario y contrasena incorrectos") */
        pResultado.innerHTML = "Usuario y contrasena incorrectos";
        pResultado.style.color = "red";
        imgRes2.src = "https://clipart-library.com/data_images/49138.png";
        imgRes2.style.display = "block";
        imgRes1.style.display = "none";
    }
}
