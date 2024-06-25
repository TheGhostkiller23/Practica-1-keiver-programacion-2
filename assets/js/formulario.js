document.addEventListener('DOMContentLoaded', function() {
    var botonSubmit = document.querySelector('.botons');

    botonSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        var Usuario = document.getElementById('Usuario').value;
        var Cedula = document.getElementById('Cedula').value;
        var Nombres = document.getElementById('Nombres').value;
        var Apellidos = document.getElementById('Apellidos').value;
        var CorreoElectronico = document.getElementById('CorreoElectronico').value;
        var UbicacionHab = document.getElementById('UbicacionHab').value;
        var FechaDeNac = document.getElementById('FechaDeNac').value;
        var Genero = document.getElementById('Genero').value;
        var Contraseña = document.getElementById('Contraseña').value;
        var ConfirmarContraseña = document.getElementById('ConfirmarContraseña').value;

        // Validaciones
        if (!Usuario ||!/^[A-Za-z0-9]*$/.test(Usuario) || Usuario.length > 12) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un nombre de usuario válido.',
            });
            return;
        }
        if (!Cedula ||!(/^\d+$/.test(Cedula) && Cedula.length >= 7 && Cedula.length <= 8)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese una cédula válida.',
            });
            return;
        }
        if (!Nombres ||!/^[A-Za-z\s]+$/.test(Nombres)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un nombre válido.',
            });
            return;
        }
        if (!Apellidos ||!/^[A-Za-z\s]+$/.test(Apellidos)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese apellidos válidos.',
            });
            return;
        }
        if (!CorreoElectronico ||!(/\S+@\S+\.\S+/.test(CorreoElectronico))) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un correo electrónico válido.',
            });
            return;
        }
        if (!UbicacionHab || UbicacionHab.length > 200) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La ubicación debe tener hasta 200 caracteres.',
            });
            return;
        }
        if (!FechaDeNac || new Date(FechaDeNac) > new Date()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Debe seleccionar una fecha de nacimiento anterior a la fecha actual.',
            });
            return;
        }
        if (!Genero) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor seleccione su género.',
            });
            return;
        }

        console.log(Contraseña, ConfirmarContraseña)
        if (!Contraseña || Contraseña.length < 8 ||!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\*_\/_]).{8,}$/.test(Contraseña)) || Contraseña!== ConfirmarContraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La contraseña debe tener al menos 8 caracteres, incluyendo un número, una letra mayúscula, una letra minúscula, y un carácter especial (*_, /). Además, debe coincidir con la confirmación.',
            });
            return;
        }

        // Crear objeto de usuario
        var userData = {
            Usuario: Usuario,
            Cedula: Cedula,
            Nombres: Nombres,
            Apellidos: Apellidos,
            CorreoElectronico: CorreoElectronico,
            UbicacionHab: UbicacionHab,
            FechaDeNac: FechaDeNac,
            Genero: Genero,
            Contraseña: Contraseña
        };

        // Almacenar el objeto de usuario en Local Storage
        localStorage.setItem(Nombres, JSON.stringify(userData));

        // Mostrar mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Puedes iniciar sesión con tus nuevas credenciales.',
            confirmButtonText: 'Ir a la página de inicio de sesión'
        }).then(function(isConfirmed) {
            if (isConfirmed.isConfirmed) {
                window.location.href = "login.html";
            }
        });
    });
});
