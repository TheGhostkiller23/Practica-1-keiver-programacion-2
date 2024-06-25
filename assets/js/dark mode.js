const switcher = document.querySelector(".switch");

// Call this function to initialize the dark mode state based on localStorage
function cargarDarkModeDesdeLocalStorage() {
  const darkModeGuardado = localStorage.getItem("darkMode") === "true";
  if (darkModeGuardado) {
    switcher.classList.add("active");
    document.body.classList.add("active");
  } else {
    switcher.classList.remove("active");
    document.body.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
  // Initialize dark mode state on page load
  cargarDarkModeDesdeLocalStorage();

  // Toggle dark mode when the switch is clicked
  switcher.addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  switcher.classList.toggle("active");
  document.body.classList.toggle("active");
  // Update localStorage with the new state
  guardarDarkModeEnLocalStorage(switcher.classList.contains("active"));
}

function guardarDarkModeEnLocalStorage(estado) {
  localStorage.setItem("darkMode", estado? "true" : "false");
}
