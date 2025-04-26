function toggleInfo(id) {
    const info = document.getElementById(id);

    // Alternar la clase 'active' para activar la animación
    if (info.classList.contains('active')) {
        info.classList.remove('active');
    } else {
        info.classList.add('active');
    }
}
