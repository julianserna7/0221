// ==========================================================================
// REGISTRO.JS — Validación y guardado en localStorage
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // Toggle visibilidad contraseña
    const btnOjo = document.querySelector('.btn-toggle-password');
    const inputPass = document.getElementById('password');
    if (btnOjo && inputPass) {
        btnOjo.addEventListener('click', () => {
            inputPass.type = inputPass.type === 'password' ? 'text' : 'password';
        });
    }

    // Color select cuando tiene valor
    const selects = document.querySelectorAll('select');
    selects.forEach(sel => {
        sel.addEventListener('change', () => {
            sel.classList.toggle('seleccionado', sel.value !== '');
        });
    });

    // Envío del formulario
    const form = document.getElementById('form-registro');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const errores = validar();
        if (errores > 0) return;

        // Guardar en localStorage
        const datos = {
            email:    document.getElementById('email').value.trim(),
            nombre:   document.getElementById('nombre').value.trim(),
            apellido: document.getElementById('apellido').value.trim(),
            usuario:  document.getElementById('usuario').value.trim(),
            ciudad:   document.getElementById('ciudad').value,
            barrio:   document.getElementById('barrio').value || null,
        };

        localStorage.setItem('usuario_registrado', JSON.stringify(datos));

        // Redirigir a home (ajustá la ruta si hace falta)
        window.location.href = '../home.html';
    });

    // ------------------------------------------------------------------
    // VALIDACIÓN
    // ------------------------------------------------------------------
    function validar() {
        let errores = 0;

        // Email
        const email = document.getElementById('email').value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setError('grupo-email', !regexEmail.test(email));
        if (!regexEmail.test(email)) errores++;

        // Nombre
        const nombre = document.getElementById('nombre').value.trim();
        setError('grupo-nombre', nombre === '');
        if (nombre === '') errores++;

        // Apellido
        const apellido = document.getElementById('apellido').value.trim();
        setError('grupo-apellido', apellido === '');
        if (apellido === '') errores++;

        // Usuario
        const usuario = document.getElementById('usuario').value.trim();
        setError('grupo-usuario', usuario === '');
        if (usuario === '') errores++;

        // Ciudad
        const ciudad = document.getElementById('ciudad').value;
        setError('grupo-ciudad', ciudad === '');
        if (ciudad === '') errores++;

        // Contraseña
        const password = document.getElementById('password').value;
        setError('grupo-password', password.length < 6);
        if (password.length < 6) errores++;

        return errores;
    }

    function setError(grupoId, hayError) {
        const grupo = document.getElementById(grupoId);
        if (!grupo) return;
        grupo.classList.toggle('con-error', hayError);
    }

});