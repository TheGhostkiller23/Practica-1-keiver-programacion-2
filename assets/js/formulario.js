document.addEventListener('DOMContentLoaded', function() {
    // Get the submit button element
    var botonSubmit = document.querySelector('.botons'); // Corrected class name

    // Add an event listener to the submit button
    botonSubmit.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents page reload

        // Gets the values entered by the user
        var Cedula = document.getElementById('Cedula').value;
        var Nombres = document.getElementById('Nombres').value;
        var Apellidos = document.getElementById('Apellidos').value;
        var CorreoElectronico = document.getElementById('CorreoElectronico').value; // Fixed ID name
        var UbicacionHab = document.getElementById('UbicacionHab').value; // Fixed ID name
        var FechaDeNac = document.getElementById('FechaDeNac').value; // Fixed ID name
        var Genero = document.getElementById('Genero').value;
        var Contraseña = document.getElementById('Contraseña').value;

        // Validates input fields
        if (!Cedula ||!/^\d+$/.test(Cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter a valid Cedula.',
            });
            return;
        }
        if (!Nombres) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your Name.',
            });
            return;
        }
        if (!Apellidos) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your Last Name.',
            });
            return;
        }
        if (!CorreoElectronico ||!/\S+@\S+\.\S+/.test(CorreoElectronico)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter a valid email address.',
            });
            return;
        }
        if (!UbicacionHab) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your room location.',
            });
            return;
        }
        if (!FechaDeNac) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your birthdate.',
            });
            return;
        }
        if (!Genero) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please select your Gender.',
            });
            return;
        }
        if (!Contraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your Password.',
            });
            return;
        }

        // Creates a user object with the entered data
        var userData = {
            Cedula: Cedula,
            Nombres: Nombres,
            Apellidos: Apellidos,
            CorreoElectronico: CorreoElectronico,
            UbicacionHab: UbicacionHab,
            FechaDeNac: FechaDeNac,
            Genero: Genero,
            Contraseña: Contraseña
        };

        console.log(FechaDeNac);
        console.log(Contraseña);
        console.log(userData);

        // Stores the user object in Local Storage
        localStorage.setItem(Nombres, JSON.stringify(userData));

        // Redirects the user to the login page
        window.location.href = "login.html";
    });
});
