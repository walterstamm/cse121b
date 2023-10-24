// Función para alternar la visualización de la lista de países y ciudades
function toggleList() {
    let locations = document.getElementById("locations");
    if (locations.style.display === "none") {
        locations.style.display = "block";
    } else {
        locations.style.display = "none";
    }
}

// Función para buscar el clima según el país y la ciudad seleccionados
function fetchWeather() {
    let selectedCountry = document.getElementById("country").value;
    let selectedCity = document.getElementById("city").value;
    // Aquí puedes realizar la llamada a la API del clima con los valores de país y ciudad seleccionados
    // Por ejemplo, puedes usar fetch() para realizar una solicitud a la API de clima
    // Asegúrate de manejar la respuesta de la API y mostrar los datos correspondientes en tu aplicación
    console.log("Buscando clima para: " + selectedCity + ", " + selectedCountry);
}

// Agrega aquí más funciones si las necesitas para tu proyecto

// Ejemplo de llamada a función al cargar la página
window.onload = function() {
    // Puedes agregar aquí cualquier lógica que necesites al cargar la página
};