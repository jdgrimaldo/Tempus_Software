/* --------------------------------------------- */
/*--Acciones para el Catalogo de Productos--*/
/* Aparicion de Info/Texto a los Productos del Catalogo */
function toggleDescripcion(id) {
    var descripcion = document.querySelector(`#${id}`);
    descripcion.classList.toggle('visible');
}


/*Boton para desplegar para arriba*/
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      document.querySelector('.go-top-container').classList.add('show');
       
    }
    else{
      document.querySelector('.go-top-container').classList.remove('show');
    }
  }
   
  document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
