// Función para cargar el footer desde el archivo footer.html
async function cargarFooter() {
    const response = await fetch('footer.html');
    const cosa = await response.text();
    document.getElementById('footer').innerHTML = cosa;
}

// Cargar el footer cuando la página esté lista
window.onload = () => {
    cargarFooter();
}