document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // No envíes el formulario todavía

    // Simulamos que verificamos si es mayor de edad
    let edad = prompt("¿Cuántos años tienes?"); // Pregunta simple para niños
    if (edad < 18) {
        alert("Lo siento, debes ser mayor de 18 años para jugar.");
    } else {
        alert("¡Genial! Te contactaremos pronto via WhatsApp.");
    }

    // Limpiamos el formulario
    this.reset();
});