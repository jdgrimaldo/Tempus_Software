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

const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    localStorage.removeItem('login_success')
})

const login_success = JSON.parse(localStorage.getItem('login_success'))
if (login_success) {
const mensajeBienvenida = document.querySelector('#mensaje-bienvenida')
mensajeBienvenida.innerText = `Bienvenido, ${login_success.usuario}!`;
localStorage.removeItem('login_success')
}

const logoutButton = document.querySelector('#logout')

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    location.reload()
})
function toggleDescripcion(id) {
  var descripcion = document.querySelector(`#${id}`);
  descripcion.classList.toggle('visible');
}