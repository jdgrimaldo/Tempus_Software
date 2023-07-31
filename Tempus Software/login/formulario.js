//Obtener los elementos del formulario y asignarlos a variables:
const formulario = document.getElementById("formulario__register")
const inputs = document.querySelectorAll("#formulario__register input")

//Definir expresiones regulares para validar los campos del formulario:
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Crear un objeto que almacena el estado de validación de los campos del formulario:
const campos = {
	usuario: false,
	nombre: false,
	correo: false,
	password: false,
	telefono: false
}

//Crear una función que valida el formulario completo cuando se presiona una tecla o se pierde el foco en un campo:
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, "usuario");
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, "correo");
			break;
		case "password":
			validarCampo(expresiones.password, e.target, "password");
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, "telefono");
			break;
	}
}

//Crear una función que valida cada campo del formulario según la expresión regular correspondiente:
const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		// si el campo es válido, se agregan clases CSS para indicar que es correcto
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos[campo] = true;
	} else {
		// si el campo es inválido, se agregan clases CSS para indicar que es incorrecto
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos[campo] = false;
	}
}

//Asignar los eventos keyup y blur a cada campo del formulario para validarlos en tiempo real:
inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

//En la función que procesa el formulario, se comprueba que los campos obligatorios no estén vacíos y que el usuario 
//no esté ya registrado en la base de datos local. Si todo es correcto, se guarda el nuevo usuario en la base de 
//datos local y se redirige a la página de inicio de sesión:
const formulario__register = document.querySelector('#formulario__register')
formulario__register.addEventListener('submit', (e) => {
	e.preventDefault()
	const usuario = document.querySelector('#usuario').value.trim();
	const correo = document.querySelector('#correo').value.trim();
	const telefono = document.querySelector('#telefono').value.trim();
	const password = document.querySelector('#password').value.trim();

	if (usuario === "" || correo === "" || telefono === "" || password === "") {
		return alert('Los campos no pueden estar vacíos!');
	}

	const Users = JSON.parse(localStorage.getItem('users')) || [];
	const isUserRegistered = Users.find(user => user.correo === correo && user.telefono === telefono);

	if (isUserRegistered) {
		return alert('El usuario ya está registrado!');
	}

	Users.push({ usuario: usuario, correo: correo, password: password, telefono: telefono });
	localStorage.setItem('users', JSON.stringify(Users));

	if (!isUserRegistered) {
		// si el usuario no estaba registrado previamente, se muestra un mensaje de éxito
		document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
		setTimeout(() => {
			document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
		}, 5000);
	}

	window.location.href = 'login.html';
});

//Crear una función que se encarga de procesar el formulario cuando se envía:
formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	const terminos = document.getElementById("terminos");
	// si todos los campos son válidos y se ha marcado el checkbox de términos, se procesa el formulario
	if (campos.usuario && campos.nombre && campos.correo && campos.password && campos.telefono && terminos.checked) {
		formulario.reset();

		document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
		setTimeout(() => {
			document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
		}, 5000);

		document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
			icono.classList.remove("formulario__grupo-correcto");
		});
	} else {
		// si algún campo es inválido o no se ha marcado el checkbox, se muestra un mensaje de error
		document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
		setTimeout(() => {
			document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
		}, 5000);
	}
});

//Finalmente, se crea una función que procesa el formulario de inicio de sesión y comprueba que el usuario y la contraseña sean válidos:
const formulario__login = document.querySelector('#formulario__login')
formulario__login.addEventListener('submit', (e) => {
	e.preventDefault()
	const correo = document.querySelector('#login__correo').value
	const password = document.querySelector('#login__password').value
	const Users = JSON.parse(localStorage.getItem('users')) || []
	const validUser = Users.find(user => user.correo === correo && user.password === password)
	if (!validUser) {
		return alert('Usuario y/o contraseña incorrectos!')
	}
	localStorage.setItem('login_success', JSON.stringify(validUser))
	window.location.href = '../index.html'
})