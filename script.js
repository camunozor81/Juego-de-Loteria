document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.querySelector('input[placeholder="Tu nombre"]').value;
    let celular = document.querySelector('input[placeholder="Tu celular (ej. +573001234567)"]').value;
    let correo = document.querySelector('input[placeholder="Tu correo"]').value;

    if (nombre && celular && correo) {
        alert("¡Gracias, " + nombre + "! Te hemos registrado. Pronto te contactaremos vía WhatsApp.");
    } else {
        alert("Por favor, completa todos los campos.");
    }

    this.reset();
});
