const input = document.getElementById('to-do-add');
const boton = document.querySelector('button');
const listaTareas = document.getElementById('list');




function agregar() {
  if (input.value) {
    let nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('list-item');

    let text = document.createElement('p');
    text.innerText = input.value;
    nuevaTarea.appendChild(text);

    //contenedor de iconos
    let icono = document.createElement('div');
    icono.classList.add('icon');
    nuevaTarea.appendChild(icono);


    // iconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icon-complete');
    completar.addEventListener('click', completarTarea);

    let borrar = document.createElement('i');
    borrar.classList.add('bi', 'bi-trash3-fill', 'icon-delete');
    borrar.addEventListener('click', borrarTarea);

    icono.append(completar, borrar);

    //agregar tarea a la lista
  listaTareas.appendChild(nuevaTarea);
  input.value = '';
  }
  else {
    alert('Add a valid task');
  }
}

function completarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('complete');
}

function borrarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener('click', agregar);
input.addEventListener('keydown', (e)=>{ 
  if(e.key === 'Enter'){
      agregar();
    }
});