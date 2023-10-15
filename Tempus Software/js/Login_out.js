//Obtener el usuario almacenado en la base de datos local:
const user = JSON.parse(localStorage.getItem('login_success')) || false

//Comprobar si hay un usuario almacenado en la base de datos local, y si no lo hay, ocultar el botón de cerrar sesión:
if(!user){
  const logout = document.querySelector('#logout')
  logout.style.display = 'none'
} 

//Obtener el botón de cerrar sesión y asignar un evento click que borra el usuario almacenado de la base de datos local:
const logoutButton = document.querySelector('#logout')

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    location.reload()
    window.location.href = 'index.html'
})

//Obtener el usuario almacenado en la base de datos local y mostrar un mensaje de bienvenida en la página de 
//inicio si el usuario ha iniciado sesión correctamente:
const login_success = JSON.parse(localStorage.getItem('login_success'))
if (login_success) {
  const mensajeBienvenida = document.querySelector('#mensaje-bienvenida')
  mensajeBienvenida.innerText = `${login_success.usuario}!`;
}