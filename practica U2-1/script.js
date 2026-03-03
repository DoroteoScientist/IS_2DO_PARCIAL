<<<<<<< HEAD
function cambiarColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
};
=======
const integrantes = document.querySelectorAll('.integrante');
const btnSiguiente = document.getElementById('btnSiguiente');
let indiceActual = 0;

integrantes[indiceActual].classList.add('active');
btnSiguiente.addEventListener('click', () => {
    integrantes[indiceActual].classList.remove('active');
    indiceActual = (indiceActual + 1) % integrantes.length;
    integrantes[indiceActual].classList.add('active');
});
>>>>>>> c66a892d9292531f5d0c4c3840bb531c09da0e7f
