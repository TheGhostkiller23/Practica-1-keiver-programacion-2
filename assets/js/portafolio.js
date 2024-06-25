document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el enlace original se active

        Swal.fire({
            icon: 'info',
            title: 'Descargando...',
            text: 'El archivo se está descargando. Por favor, espera un momento.',
            allowOutsideClick: false, // Evita que la ventana se cierre al hacer clic fuera de ella
            onBeforeOpen: () => {
                Swal.showLoading(); // Muestra un indicador de carga mientras se procesa la descarga
            },
            onClose: () => {
                location.href ="/assets/descargas/proyecto nuevo.zip";
            }
        });
    });
});
