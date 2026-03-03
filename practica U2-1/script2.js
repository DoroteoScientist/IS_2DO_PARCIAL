
const integrantes = document.querySelectorAll('.integrante');
const btnSiguiente = document.getElementById('btnSiguiente');
let indiceActual = 0;

integrantes[indiceActual].classList.add('active');
btnSiguiente.addEventListener('click', () => {
    integrantes[indiceActual].classList.remove('active');
    indiceActual = (indiceActual + 1) % integrantes.length;
    integrantes[indiceActual].classList.add('active');
});
