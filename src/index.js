
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    var nombre = document.getElementsByName("nombre")[0].value;
    var correo = document.getElementsByName("mail")[0].value;
    var mensaje = document.getElementsByName("mensaje")[0].value;

    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Por favor, complete todos los campos");
      return;
    }
    // Aquí se realizará la validación y el envío del formulario
  });

