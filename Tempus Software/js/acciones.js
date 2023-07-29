/*Menu Nav Accion de Moviles*/
(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });
})();


/*Salir de Sesion del Sistema*/
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
})


/*Catalogo De Laptos y Productos*/

function toggleDescripcion(id) {
    var descripcion = document.querySelector(`#${id}`);
    descripcion.classList.toggle('visible');
}