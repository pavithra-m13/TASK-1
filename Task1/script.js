document.addEventListener("DOMContentLoaded", function () {
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const cityInput = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const conditions = document.getElementById("conditions");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const weatherData = document.getElementById("weatherData");

    getWeatherBtn.addEventListener("click", function () {
        const city = cityInput.value;
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = 'a0bacb1b755523103a98dac138918ec8';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                cityName.textContent = `Weather in ${data.name}`;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                conditions.textContent = `Conditions: ${data.weather[0].description}`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                weatherData.classList.remove("hidden");
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    });
});
