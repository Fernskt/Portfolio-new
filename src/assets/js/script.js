//Efecto resplandor azul fondo oscuro

document.addEventListener('mousemove', function(e) {
    const background = document.querySelector('.background');
    const x = e.clientX;
    const y = e.clientY;

    background.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 255, 0.15), transparent 60%)`;
});

//Modo claro, Modo oscuro

/* const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;
 */
// Modo predeterminado basado en la preferencia del sistema
/* if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
} */

/* toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

if (!body.classList.contains('dark-mode')){
    document.querySelector('.background').style.display = 'none';
} */

//Toggle Button

/* const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    if (toggleButton.classList.contains('off')) {
        toggleButton.classList.remove('off');
        toggleButton.classList.add('on');
    } else {
        toggleButton.classList.remove('on');
        toggleButton.classList.add('off');
    }
});
 */