var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/calaveras.jpg') {
      miImage.setAttribute('src','images/radio.jpg');
    } else {
      miImage.setAttribute('src', 'images/calaveras.jpg');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
	var miNombre = prompt('Por favor, ingresa tu nombre.');
	localStorage.setItem('nombre', miNombre);
	miTitulo.textContent = 'Welcome to my jungle, ' + miNombre;
}
if (!localStorage.getItem('nombre')){
	estableceNombreUsuario();
}
else{
	var nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = 'Welcome to my jungle después, ' + nombreAlmacenado;
}
miBoton.onclick = function(){
	estableceNombreUsuario();
}