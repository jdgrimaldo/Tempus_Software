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

/*Catalogo De Laptos y Productos*/

function toggleDescripcion(id) {
    var descripcion = document.querySelector(`#${id}`);
    descripcion.classList.toggle('visible');
}