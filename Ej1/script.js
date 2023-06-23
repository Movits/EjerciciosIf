/* 
    Problema?
    + credenciales de usuario registrado
    + informar el resultado via web
    + agregar forma de recibir el usuario y contrasena
    + verificar si el usuaria que intenta loguarse esta registrado

    Info?
    - nombre y contrasena de usuario

*/

const USUARIO_NOMBRE_REGISTRADO = "Roberto";
const CONTRASENA_REGISTRADA = "Roberto1.";

let usuarioNombreIngresado = prompt("Ingrese Usuario");
let usuarioContrasenaIngresada = prompt("Ingresar contrasena");

if ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) && (usuarioContrasenaIngresada == CONTRASENA_REGISTRADA)) {
    document.write("Usuario y contrasena correctos");
}else{
    document.write("Usuario o contrasena incorrectos");
}