const switcher = document.querySelector(".switch");

document.addEventListener("DOMContentLoaded", function(e) {
  cargarDarkModeDesdeLocalStorage();
  switcher.addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
    switcher.classList.toggle("active");
    document.body.classList.toggle("active");
    guardarDarkModeEnLocalStorage(switcher.classList.contains("active"));
}

function guardarDarkModeEnLocalStorage(estado) {
    localStorage.setItem("darkMode", estado);
}

function cargarDarkModeDesdeLocalStorage() {
  const darkModeGuardado = localStorage.getItem("darkMode") === "true";
  if (darkModeGuardado) {
    switcher.classList.add("active");
    document.body.classList.add("active");
  }
}
