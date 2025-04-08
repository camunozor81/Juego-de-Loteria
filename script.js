document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // No envía el formulario a ningún lado todavía

    let nombre = document.querySelector('input[placeholder="Tu nombre"]').value;
    let celular = document.querySelector('input[placeholder="Tu celular"]').value;
    let correo = document.querySelector('input[placeholder="Tu correo"]').value;

    if (nombre && celular && correo) {
        alert("¡Gracias, " + nombre + "! Te contactaremos pronto via WhatsApp.");
    } else {
        alert("Por favor, completa todos los campos.");
    }

    this.reset(); // Limpia el formulario
});
