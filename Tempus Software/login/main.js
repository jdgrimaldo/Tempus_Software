//Ejecutando funciones

//Asignar eventos a los botones de inicio de sesión y registro para que se llamen a las funciones correspondientes:
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
//Asignar un evento al objeto ventana para que llame a la función anchoPage() cuando la ventana cambia de tamaño:
window.addEventListener("resize", anchoPage);

//Obtener los elementos del formulario de inicio de sesión, el formulario de registro, el contenedor de 
//inicio de sesión y registro, y las cajas de fondo para el formulario de inicio de sesión y el formulario de registro:
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

//Definir una función para ajustar el ancho de la página y mostrar u ocultar la caja de fondo para el formulario 
//de inicio de sesión y el formulario de registro, según el tamaño de la pantalla:
function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();

//Definir una función para mostrar el formulario de inicio de sesión y la caja de fondo para el formulario de 
//inicio de sesión y ocultar el formulario de registro y la caja de fondo para el formulario de registro, 
//cuando el usuario hace clic en el botón de inicio de sesión:
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

//Definir una función para mostrar el formulario de registro y la caja de fondo para el formulario de registro y 
//ocultar el formulario de inicio de sesión y la caja de fondo para el formulario de inicio de sesión, cuando el 
//usuario hace clic en el botón de registro:
function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}