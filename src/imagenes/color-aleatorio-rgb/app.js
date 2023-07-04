const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//actualizar el texto de los parrafos
textoRojo.innerHTML = rojo;
textoVerde.innerHTML = verde;
textoAzul.innerHTML = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.background = colorRGB;
}

//actualiar el imput de Red (rojo)

inputRojo.addEventListener("change", (e) => { //se puede eliminar "e" de esta linea
  rojo = e.target.value; // y cambiar "e" por "inputRojo"
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

//actualiar el imput de Green (verde)
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

//actualiar el imput de Blue (azul)
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});