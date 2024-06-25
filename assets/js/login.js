document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento del botón de envío
    var botonSubmit = document.querySelector('.botons');

    // Añade un controlador de eventos al botón de envío
    botonSubmit.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que se recargue la página

        // Obtiene los valores ingresados por el usuario
        var usuario = document.getElementById('Usuario').value;
        var contraseña = document.getElementById('Contraseña').value;

        // Verifica si las credenciales existen en el Local Storage
        if (localStorage.getItem(usuario)) {
            var credencialesAlmacenadas = JSON.parse(localStorage.getItem(usuario));
            console.log(credencialesAlmacenadas);
            if (credencialesAlmacenadas['Contraseña'] === contraseña) {
                alert('Inicio de sesión exitoso');
                // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
                window.location.href = "curriculum.html"; // Ejemplo de redirección
            } else {
                alert('Contraseña incorrecta');
            }
        } else {
            alert('Usuario no encontrado');
        }
    });
});
