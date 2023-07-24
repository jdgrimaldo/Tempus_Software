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


  /*Menu Nav Accion de Moviles*/
(function(){
  const openButton = document.querySelector('.nav__menu');
  const menu = document.querySelector('.nav__link');
  const closeMenu = document.querySelector('.nav__close');

  openButton.addEventListener('click', ()=>{
      menu.classList.add('nav__link--show');
  });

  closeMenu.addEventListener('click', ()=>{
      menu.classList.remove('nav__link--show');
  });
})();


/*Salir de Sesion del Sistema*/
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Vuelve Pronto Gracias por Todo!')
    localStorage.removeItem('login_success')
})



