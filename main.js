document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('zoom');
        });
    });
});

function mostrarLinda() {
    document.getElementById('mensajeLinda').style.display = 'block';
}

<span class="gato-icono">🐱</span>