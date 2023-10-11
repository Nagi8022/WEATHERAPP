document.getElementById("get-weather").addEventListener("click", function () {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = '021f43ee38048cc3e917b55fc41eba3d'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or an error occurred.');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert(error.message);
        });
});

function displayWeatherData(data) {
    const locationName = document.getElementById("location-name");
    const temperature = document.getElementById("temperature");
    const weatherConditions = document.getElementById("weather-conditions");

    locationName.textContent = data.name;
    temperature.textContent = data.main.temp;
    weatherConditions.textContent = data.weather[0].description;
}
