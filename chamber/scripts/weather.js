document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '36ce4bc6cd7fcf4f3a9b498cf3cca70b';
    const location = 'Oakville,MO,US'; // You can change this to your specific location
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const currentTemp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            document.getElementById('current-temp').textContent = `${currentTemp} °F`;
            document.getElementById('weather-description').textContent = weatherDescription;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
            document.getElementById('weather-icon').alt = weatherDescription;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '';

            for (let i = 0; i < data.list.length; i += 8) { // Get the forecast every 24 hours (8 * 3 hours)
                const forecast = data.list[i];
                const date = new Date(forecast.dt * 1000);
                const temp = forecast.main.temp;
                const description = forecast.weather[0].description;
                const icon = forecast.weather[0].icon;

                const forecastElement = document.createElement('div');
                forecastElement.classList.add('forecast-item');
                forecastElement.innerHTML = `
                    <p>${date.toDateString()}</p>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
                    <p>${temp} °F</p>
                    <p>${description}</p>
                `;
                forecastContainer.appendChild(forecastElement);
            }
        })
        .catch(error => console.error('Error fetching forecast data:', error));
});
