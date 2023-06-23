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

const USUARIO_NOMBRE_REGISTRADO = "Roberto";
const CONTRASENA_REGISTRADA = "Roberto1.";
const USUARIO_NOMBRE_REGISTRADO_2 = "Juan";
const CONTRASENA_REGISTRADA_2 = "juanito";

const imgRes1 = document.querySelector("#img-verificada");
const imgRes2 = document.querySelector("#img-no-verificada");

let usuarioNombreIngresado = prompt("Ingrese Usuario");
let usuarioContrasenaIngresada = prompt("Ingresar contrasena");

if (((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA)) || ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA_2)) ) {
    imgRes1.src = "https://i.ebayimg.com/images/g/GbkAAOSwp2dd1oZ2/s-l1200.jpg";
    imgRes2.style.display = "none";
}else{
    imgRes2.src = "https://clipart-library.com/data_images/49138.png";
    imgRes1.style.display = "none";
}