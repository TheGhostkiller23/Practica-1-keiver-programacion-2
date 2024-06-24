document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento del botón de envío
    var botonSubmit = document.querySelector('.botons');

    // Añade un controlador de eventos al botón de envío
    botonSubmit.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que se recargue la página

        // Obtiene los valores ingresados por el usuario
        var Cedula = document.getElementById('Cedula').value;
        var Nombres = document.getElementById('Nombres').value;
        var Apellidos = document.getElementById('Apellidos').value;
        var CorreoElectronico = document.getElementById('Correo electronico').value;
        var UbicacionHab = document.getElementById('Ubicacion de hab').value;
        var FechaDeNac = document.getElementById('Fecha de Nac').value;
        var Genero = document.getElementById('Genero').value;
        var Contraseña = document.getElementById('Contraseña').value;

        // Verifica si todos los campos están llenos
        if (!cedula ||!nombres ||!apellidos ||!correoElectronico ||!ubicacionHab ||!fechaDeNac ||!genero ||!contraseña) {
            alert('Por favor, completa todos los campos.');
            return; // Detiene la ejecución si alguno de los campos está vacío
        }

        // Crea un objeto con los datos del usuario
        var userData = {
            Cedula: Cedula,
            Nombres: Nombres,
            Apellidos: Apellidos,
            CorreoElectronico: CorreoElectronico,
            UbicacionHab: UbicacionHab,
            FechaDeNac: FechaDeNac,
            Genero: Genero,
            Contraseña: Contraseña // Considera almacenar solo una versión hash de la contraseña para seguridad real
        };

        // Almacena el objeto en el Local Storage
        localStorage.setItem(nombres, JSON.stringify(userData));

        // Muestra un mensaje de confirmación
        alert('Registro exitoso. Puedes iniciar sesión con tus nuevas credenciales.');



        // Redirige al usuario a la página de inicio de sesión
        window.location.href = "login.html";


       /*  Alertas de usuarios */

         if (!Cedula || !/^\d+$/.test(Cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese una Cédula válida.',
            });
            return;
        }

        if (!Nombres) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese su Nombre.',
            });
            return;
        }

        if (!apellidos) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese sus apellidos.',
            });
            return;
        }

        if (!correoElectronico || !/\S+@\S+\.\S+/.test(correoElectronico)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un correo electrónico válido.',
            });
            return;
        }

        if (!ubicacionHab) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese su ubicación de habitación.',
            });
            return;
        }

        if (!fechaDeNac) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese su fecha de nacimiento.',
            });
            return;
        }

        if (!Genero) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor seleccione su Genero.',
            });
            return;
        }

        if (!Contraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese su Contraseña.',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Bienvenido.',
        });
    });