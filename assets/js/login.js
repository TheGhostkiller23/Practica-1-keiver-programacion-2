document.addEventListener('DOMContentLoaded', function() {
    var botonSubmit = document.querySelector('.botons');

    botonSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        var usuario = document.getElementById('Usuario').value;
        var contraseña = document.getElementById('Contraseña').value;

        if (localStorage.getItem(usuario)) {
            var credencialesAlmacenadas = JSON.parse(localStorage.getItem(usuario));
            if (credencialesAlmacenadas['Contraseña'] === contraseña) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: 'Bienvenido!',
                    confirmButtonText: 'Continuar'
                }).then(function(isConfirmed) {
                    if (isConfirmed.isConfirmed) {
                        window.location.href = "curriculum.html";
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Contraseña incorrecta',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario no encontrado',
            });
        }
    });
});
