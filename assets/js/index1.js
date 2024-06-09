document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento del botón de envío
    var botonSubmit = document.querySelector('.botons');

    // Añade un controlador de eventos al botón de envío
    botonSubmit.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que se recargue la página

        // Obtiene los valores ingresados por el usuario
        var cedula = document.getElementById('Cedula').value;
        var nombres = document.getElementById('Nombres').value;
        var apellidos = document.getElementById('Apellidos').value;
        var correoElectronico = document.getElementById('Correo electronico').value;
        var ubicacionHab = document.getElementById('Ubicacion de hab').value;
        var fechaDeNac = document.getElementById('Fecha de Nac').value;
        var genero = document.getElementById('Genero').value;
        var contraseña = document.getElementById('Contraseña').value;

        // Verifica si todos los campos están llenos
        if (!cedula ||!nombres ||!apellidos ||!correoElectronico ||!ubicacionHab ||!fechaDeNac ||!genero ||!contraseña) {
            alert('Por favor, completa todos los campos.');
            return; // Detiene la ejecución si alguno de los campos está vacío
        }

        // Crea un objeto con los datos del usuario
        var userData = {
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            correoElectronico: correoElectronico,
            ubicacionHab: ubicacionHab,
            fechaDeNac: fechaDeNac,
            genero: genero,
            contraseña: contraseña // Considera almacenar solo una versión hash de la contraseña para seguridad real
        };

        // Almacena el objeto en el Local Storage
        localStorage.setItem(nombres, JSON.stringify(userData));

        // Muestra un mensaje de confirmación
        alert('Registro exitoso. Puedes iniciar sesión con tus nuevas credenciales.');

        // Redirige al usuario a la página de inicio de sesión
        window.location.href = "login.html";
    });
});
