/* --------------------------------------------- */
/*--Acciones para Adaptar el Menu para Moviles--*/
/* Declaracion de la Funcion */
(function () {
    /* Declaramos la Img de Menu para Abrirlo */
    const openButton = document.querySelector('.nav__menu');

    /* Declaramos al Contenedor del Menu */
    const menu = document.querySelector('.nav__link');

    /* Declaramos la Img de Menu para Cerrarlo */
    const closeMenu = document.querySelector('.nav__close');

    /* Y aca cuando la Toquemos con el Mouse o Pantalla Va a Desplegar al Menu */
    openButton.addEventListener('click', () => {
        /* Decimos aca que cuando se toque ese Boton/Img se Mostrara la Barra Desplegada */
        menu.classList.add('nav__link--show');
    });

    /* Y aca cuando la Toquemos con el Mouse o Pantalla Va a Salir del Menu Desplegable */
    closeMenu.addEventListener('click', () => {
        /* Decimos aca que cuando se toque ese Boton/Img se Cerra Automaticamente la Barra Desplegada */
        menu.classList.remove('nav__link--show');
    });
})();


/* --------------------------------------------- */
/*--Acciones para el Catalogo de Productos--*/
/* Aparicion de Info/Texto a los Productos del Catalogo */
function toggleDescripcion(id) {
    var descripcion = document.querySelector(`#${id}`);
    descripcion.classList.toggle('visible');
}
