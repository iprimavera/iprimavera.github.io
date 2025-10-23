
async function cargarFooter() {
    const response = await fetch('../includes/footer.html');
    document.getElementById('footer').innerHTML = await response.text();
}

window.onload = () => {
    cargarFooter();
}
