//este es el codigo del menu hamburger
const limit_size_screen = window.matchMedia('screen and (max-width: 768px)');
const bars = document.querySelector('.bars');
const barsButton = document.querySelector('#bars-button');

function validation(event) {
  if (event.matches) {
    barsButton.addEventListener('click', hideShow);
  } else {
    barsButton.removeEventListener('click', hideShow);
  }
}

function hideShow() {
  bars.classList.toggle('is-active');
}

limit_size_screen.addEventListener('change', validation);
validation(limit_size_screen);

// formulario de contacto
const form= document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  var nombre = document.getElementsByName("nombre")[0].value;
  var correo = document.getElementsByName("mail")[0].value;
  var mensaje = document.getElementsByName("mensaje")[0].value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, complete todos los campos");
    return;
  } 
form.reset()
  });
