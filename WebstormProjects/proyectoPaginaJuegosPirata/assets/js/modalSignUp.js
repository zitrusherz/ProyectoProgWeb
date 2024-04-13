document.addEventListener("DOMContentLoaded", function() {
        // Selecciona el formulario y el botón de envío
        const form = document.getElementById('signupForm');
        const button = document.getElementById('signupButton');

        // Agrega un evento al botón de envío
        button.addEventListener('click', function(event) {
            // Evita que se envíe el formulario automáticamente
            event.preventDefault();
            // Muestra el modal
            $('#confirmModal').modal('show');
        });
    });