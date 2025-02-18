// Función para cargar el footer desde el archivo footer.html
async function cargarFooter() {
    const response = await fetch('footer.html');
    document.getElementById('footer').innerHTML = await response.text();
}

// Cargar el footer cuando la página esté lista
window.onload = () => {
    cargarFooter();
}