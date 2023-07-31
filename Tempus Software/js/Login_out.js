/* Sistema Encargado de Salir del Sistema */
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
})

const login_success = JSON.parse(localStorage.getItem('login_success'))
if (login_success) {
const mensajeBienvenida = document.querySelector('#mensaje-bienvenida')
mensajeBienvenida.innerText = `Bienvenido, ${login_success.usuario}!`;
}

const logoutButton = document.querySelector('#logout')

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    location.reload()
    window.location.href = 'index.html'
})