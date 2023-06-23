/* 
    Problema?
    + credenciales de usuario registrado
    + informar el resultado via web
    + agregar forma de recibir el usuario y contrasena
    + verificar si el usuaria que intenta loguarse esta registrado
    + agregar otro usuario registrado
    + ahora verificar todos los usuarios registrados

    Info?
    - nombre y contrasena de usuario

*/

const USUARIO_NOMBRE_REGISTRADO = "Roberto";
const CONTRASENA_REGISTRADA = "Roberto1.";
const USUARIO_NOMBRE_REGISTRADO_2 = "Juan";
const CONTRASENA_REGISTRADA_2 = "juanito";

let usuarioNombreIngresado = prompt("Ingrese Usuario");
let usuarioContrasenaIngresada = prompt("Ingresar contrasena");

if (((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA)) || ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA_2)) ) {
    document.write("Usuario y contrasena correctos");
}else{
    document.write("Usuario o contrasena incorrectos");
}