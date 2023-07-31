<<<<<<< HEAD
/* Sistema Encargado de Salir del Sistema */
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
}
=======
/*Salir de Sesion del Sistema*/
>>>>>>> 77fb856cececc0e3dd2a9f15ff9495ef301bb732

//Obtener el usuario almacenado en la base de datos local:
const user = JSON.parse(localStorage.getItem('login_success')) || false

//Comprobar si hay un usuario almacenado en la base de datos local, y si no lo hay, realizar alguna acción. 
//En este caso, el código no hace nada si no hay un usuario almacenado:
if(!user){
} // si no hay un usuario almacenado, no se hace nada

//Obtener el botón de cerrar sesión y asignar un evento click que borra el usuario almacenado de la base de datos local:
const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
})

//Obtener el usuario almacenado en la base de datos local y mostrar un mensaje de bienvenida en la página de 
//inicio si el usuario ha iniciado sesión correctamente:
const login_success = JSON.parse(localStorage.getItem('login_success'))
if (login_success) {
const mensajeBienvenida = document.querySelector('#mensaje-bienvenida')
mensajeBienvenida.innerText = `Bienvenido, ${login_success.usuario}!`;
}

//Obtener el botón de cerrar sesión y asignar un evento click que borra el usuario almacenado de la base de 
//datos local, recarga la página y redirige al usuario a la página de inicio:
const logoutButton = document.querySelector('#logout')

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    location.reload()
    window.location.href = 'index.html'
})