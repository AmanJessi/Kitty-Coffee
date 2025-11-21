// js/tema.js
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btn = document.getElementById('btnTema');
    const icon = btn.querySelector('i');

    // Aplicar tema guardado o preferencia del sistema
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado) {
        body.setAttribute('data-bs-theme', temaGuardado);
        icon.classList.toggle('fa-sun', temaGuardado === 'dark');
        icon.classList.toggle('fa-moon', temaGuardado === 'light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute('data-bs-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    // Cambiar tema al hacer clic
    btn.addEventListener('click', () => {
        if (body.getAttribute('data-bs-theme') === 'dark') {
            body.setAttribute('data-bs-theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('tema', 'light');
        } else {
            body.setAttribute('data-bs-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('tema', 'dark');
        }
    });
});