let weatherData = {
    current: {
        location: "Colombo, Western, Sri Lanka",
        localTime: "Monday, 2:30 PM",
        condition: "Sunny",
        temperatureC: 28,
        temperatureF: 82,
        feelsLike: 31,
        windSpeedKph: 12,
        windSpeedMph: 7.5,
        humidity: 65,
        cloudCover: 20,
        uvIndex: 7,
        pressure: 1013,
        visibility: 10,
        windDirection: "NW",
        dewPoint: 18,
        heatIndex: 32,
        windChill: 26,
        lastUpdated: "2:25 PM"
    },
    hourly: [
        { hour: '3 PM', temp: '29°', condition: 'Sunny', icon: '☀️', iconClass: 'sunny' },
        { hour: '4 PM', temp: '30°', condition: 'Sunny', icon: '☀️', iconClass: 'sunny' },
        { hour: '5 PM', temp: '28°', condition: 'Partly Cloudy', icon: '⛅', iconClass: 'cloudy' },
        { hour: '6 PM', temp: '26°', condition: 'Cloudy', icon: '☁️', iconClass: 'cloudy' },
        { hour: '7 PM', temp: '25°', condition: 'Cloudy', icon: '☁️', iconClass: 'cloudy' },
        { hour: '8 PM', temp: '24°', condition: 'Clear', icon: '🌅', iconClass: 'sunny' },
        { hour: '9 PM', temp: '23°', condition: 'Clear', icon: '🌅', iconClass: 'sunny' },
        { hour: '10 PM', temp: '22°', condition: 'Clear', icon: '🌙', iconClass: 'cloudy' }
    ],
    daily: [
        { day: 'Tuesday', max: '31°', min: '22°', condition: 'Sunny', icon: '☀️', iconClass: 'sunny' },
        { day: 'Wednesday', max: '29°', min: '21°', condition: 'Partly Cloudy', icon: '⛅', iconClass: 'cloudy' },
        { day: 'Thursday', max: '27°', min: '20°', condition: 'Rainy', icon: '🌧️', iconClass: 'rainy' },
        { day: 'Friday', max: '25°', min: '19°', condition: 'Cloudy', icon: '☁️', iconClass: 'cloudy' },
        { day: 'Saturday', max: '28°', min: '21°', condition: 'Sunny', icon: '☀️', iconClass: 'sunny' }
    ]
};

const cityWeatherData = {
    "colombo": { location: "Colombo, Western", temperatureC: 28, temperatureF: 82, condition: "Hot", icon: "☀️", iconClass: "sunny" },
    "gampaha": { location: "Gampaha, Western", temperatureC: 27, temperatureF: 81, condition: "Humid", icon: "🌦️", iconClass: "cloudy" },
    "kalutara": { location: "Kalutara, Western", temperatureC: 29, temperatureF: 84, condition: "Rainy", icon: "🌧️", iconClass: "rainy" },
    "kandy": { location: "Kandy, Central", temperatureC: 24, temperatureF: 75, condition: "Partly Cloudy", icon: "⛅", iconClass: "cloudy" },
    "matale": { location: "Matale, Central", temperatureC: 25, temperatureF: 77, condition: "Clear", icon: "☀️", iconClass: "sunny" },
    "nuwara eliya": { location: "Nuwara Eliya, Central", temperatureC: 18, temperatureF: 64, condition: "Cool", icon: "🌤️", iconClass: "cool" },
    "galle": { location: "Galle, Southern", temperatureC: 26, temperatureF: 79, condition: "Cloudy", icon: "☁️", iconClass: "cloudy" },
    "hambantota": { location: "Hambantota, Southern", temperatureC: 27, temperatureF: 81, condition: "Dry", icon: "🌞", iconClass: "sunny" },
    "matara": { location: "Matara, Southern", temperatureC: 27, temperatureF: 81, condition: "Humid", icon: "🌦️", iconClass: "cloudy" },
    "badulla": { location: "Badulla, Uva", temperatureC: 23, temperatureF: 73, condition: "Rainy", icon: "🌧️", iconClass: "rainy" },
    "monaragala": { location: "Monaragala, Uva", temperatureC: 30, temperatureF: 86, condition: "Very Hot", icon: "🔥", iconClass: "sunny" },
    "ampara": { location: "Ampara, Eastern", temperatureC: 29, temperatureF: 84, condition: "Hot", icon: "🌡️", iconClass: "sunny" },
    "batticaloa": { location: "Batticaloa, Eastern", temperatureC: 28, temperatureF: 82, condition: "Humid", icon: "🌦️", iconClass: "cloudy" },
    "trincomalee": { location: "Trincomalee, Eastern", temperatureC: 30, temperatureF: 86, condition: "Sunny", icon: "☀️", iconClass: "sunny" },
    "anuradhapura": { location: "Anuradhapura, North Central", temperatureC: 31, temperatureF: 88, condition: "Very Hot", icon: "🔥", iconClass: "sunny" },
    "polonnaruwa": { location: "Polonnaruwa, North Central", temperatureC: 30, temperatureF: 86, condition: "Hot", icon: "🌡️", iconClass: "sunny" },
    "kurunegala": { location: "Kurunegala, North Western", temperatureC: 29, temperatureF: 84, condition: "Clear", icon: "☀️", iconClass: "sunny" },
    "puttalam": { location: "Puttalam, North Western", temperatureC: 30, temperatureF: 86, condition: "Windy", icon: "💨", iconClass: "cloudy" },
    "jaffna": { location: "Jaffna, Northern", temperatureC: 32, temperatureF: 90, condition: "Very Hot", icon: "🔥", iconClass: "sunny" },
    "kilinochchi": { location: "Kilinochchi, Northern", temperatureC: 31, temperatureF: 88, condition: "Hot", icon: "🌡️", iconClass: "sunny" },
    "mannar": { location: "Mannar, Northern", temperatureC: 29, temperatureF: 84, condition: "Humid", icon: "🌦️", iconClass: "cloudy" },
    "mullaitivu": { location: "Mullaitivu, Northern", temperatureC: 28, temperatureF: 82, condition: "Windy", icon: "💨", iconClass: "cloudy" },
    "vavuniya": { location: "Vavuniya, Northern", temperatureC: 30, temperatureF: 86, condition: "Hot", icon: "🌡️", iconClass: "sunny" },
    "kegalle": { location: "Kegalle, Sabaragamuwa", temperatureC: 28, temperatureF: 82, condition: "Cloudy", icon: "☁️", iconClass: "cloudy" },
    "ratnapura": { location: "Ratnapura, Sabaragamuwa", temperatureC: 27, temperatureF: 81, condition: "Rainy", icon: "🌧️", iconClass: "rainy" }
};

const locationSearch = document.getElementById('location-search');
const searchBtn = document.getElementById('search-btn');
const hourlyForecast = document.getElementById('hourly-forecast');
const dailyForecast = document.getElementById('daily-forecast');

document.addEventListener('DOMContentLoaded', function () {
    updateCurrentWeather();
    generateHourlyForecast();
    generateDailyForecast();
    updateTime();

    setInterval(updateTime, 60000);

    searchBtn.addEventListener('click', handleSearch);
    locationSearch.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

function updateCurrentWeather() {
    const current = weatherData.current;

    document.getElementById('location').textContent = current.location;
    document.getElementById('local-time').textContent = current.localTime;
    document.getElementById('weather-condition').textContent = current.condition;
    document.getElementById('temperature-c').textContent = `${current.temperatureC}°C`;
    document.getElementById('temperature-f').textContent = `${current.temperatureF}°F`;
    document.getElementById('feels-like').textContent = `${current.feelsLike}°C`;
    document.getElementById('wind-speed-kph').textContent = `${current.windSpeedKph} KPH`;
    document.getElementById('wind-speed-mph').textContent = `${current.windSpeedMph} MPH`;
    document.getElementById('humidity').textContent = `${current.humidity}%`;
    document.getElementById('cloud-cover').textContent = `${current.cloudCover}%`;
    document.getElementById('uv-index').textContent = current.uvIndex;
    document.getElementById('pressure').textContent = `${current.pressure} hPa`;
    document.getElementById('visibility').textContent = `${current.visibility} km`;
    document.getElementById('wind-direction').textContent = current.windDirection;
    document.getElementById('dew-point').textContent = `${current.dewPoint}°C`;
    document.getElementById('heat-index').textContent = `${current.heatIndex}°C`;
    document.getElementById('wind-chill').textContent = `${current.windChill}°C`;
    document.getElementById('last-updated').textContent = current.lastUpdated;

    const mainIcon = document.getElementById('main-weather-icon');
    if (current.condition.toLowerCase().includes('sunny') || current.condition.toLowerCase().includes('clear')) {
        mainIcon.textContent = '☀️';
        mainIcon.className = 'weather-icon sunny';
    } else if (current.condition.toLowerCase().includes('cloud')) {
        mainIcon.textContent = '☁️';
        mainIcon.className = 'weather-icon cloudy';
    } else if (current.condition.toLowerCase().includes('rain')) {
        mainIcon.textContent = '🌧️';
        mainIcon.className = 'weather-icon rainy';
    } else {
        mainIcon.textContent = '☀️';
        mainIcon.className = 'weather-icon sunny';
    }
}

function generateHourlyForecast() {
    hourlyForecast.innerHTML = '';

    weatherData.hourly.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'hourly-card';
        card.innerHTML = `
            <div id="hour-${index}" class="hourly-time">${item.hour}</div>
            <div class="hourly-icon ${item.iconClass}">${item.icon}</div>
            <div id="hour-condition-${index}" class="hourly-condition">${item.condition}</div>
            <div id="hour-temp-${index}" class="hourly-temp">${item.temp}</div>
        `;
        hourlyForecast.appendChild(card);
    });
}

function generateDailyForecast() {
    dailyForecast.innerHTML = '';

    weatherData.daily.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'daily-card';
        card.innerHTML = `
            <div id="day-${index}" class="daily-day">${item.day}</div>
            <div class="daily-icon ${item.iconClass}">${item.icon}</div>
            <div id="day-condition-${index}" class="daily-condition">${item.condition}</div>
            <div class="daily-temps">
                <span id="day-max-${index}" class="daily-max">${item.max}</span>
                <span class="temp-separator">/</span>
                <span id="day-min-${index}" class="daily-min">${item.min}</span>
            </div>
        `;
        dailyForecast.appendChild(card);
    });
}

function handleSearch() {
    const searchTerm = locationSearch.value.trim().toLowerCase();

    if (!searchTerm) {
        alert('Please enter a city name');
        return;
    }

    document.body.classList.add('loading');

    setTimeout(() => {
        const cityData = cityWeatherData[searchTerm];

        if (cityData) {
            weatherData.current.location = cityData.location;
            weatherData.current.temperatureC = cityData.temperatureC;
            weatherData.current.temperatureF = cityData.temperatureF;
            weatherData.current.condition = cityData.condition;

            updateCurrentWeather();

            generateRandomForecastData(cityData);
            generateHourlyForecast();
            generateDailyForecast();

            locationSearch.value = '';

            showNotification(`Weather updated for ${cityData.location}`, 'success');
        } else {
            showNotification(`Weather data not found for "${searchTerm}". Try: Colombo, Kandy, London, New York, Tokyo, etc.`, 'error');
        }

        document.body.classList.remove('loading');
    }, 1000);
}

function generateRandomForecastData(cityData) {
    const baseTemp = cityData.temperatureC;

    weatherData.hourly = [];
    for (let i = 0; i < 8; i++) {
        const hour = (new Date().getHours() + i + 1) % 24;
        const hourStr = hour === 0 ? '12 AM' : hour <= 12 ? `${hour} ${hour === 12 ? 'PM' : 'AM'}` : `${hour - 12} PM`;
        const tempVariation = Math.floor(Math.random() * 6) - 3; // -3 to +3
        const temp = baseTemp + tempVariation;

        weatherData.hourly.push({
            hour: hourStr,
            temp: `${temp}°`,
            condition: getRandomCondition(),
            icon: getWeatherIcon(getRandomCondition()),
            iconClass: getIconClass(getRandomCondition())
        });
    }

    weatherData.daily = [];
    const days = ['Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < 5; i++) {
        const tempVariation = Math.floor(Math.random() * 8) - 4; // -4 to +4
        const maxTemp = baseTemp + tempVariation + Math.floor(Math.random() * 3);
        const minTemp = maxTemp - Math.floor(Math.random() * 8) - 3;
        const condition = getRandomCondition();

        weatherData.daily.push({
            day: days[i],
            max: `${maxTemp}°`,
            min: `${minTemp}°`,
            condition: condition,
            icon: getWeatherIcon(condition),
            iconClass: getIconClass(condition)
        });
    }
}

function getRandomCondition() {
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Clear'];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

function getWeatherIcon(condition) {
    const iconMap = {
        'Sunny': '☀️',
        'Clear': '☀️',
        'Partly Cloudy': '⛅',
        'Cloudy': '☁️',
        'Light Rain': '🌧️',
        'Rainy': '🌧️',
        'Hot': '🌡️',
        'Cool': '🌤️',
        'Windy': '💨',
        'Very Hot': '🔥'
    };
    return iconMap[condition] || '☀️';
}

function getIconClass(condition) {
    if (condition.toLowerCase().includes('sunny') || condition.toLowerCase().includes('clear') || condition.toLowerCase().includes('hot')) {
        return 'sunny';
    } else if (condition.toLowerCase().includes('rain')) {
        return 'rainy';
    } else {
        return 'cloudy';
    }
}

function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const timeString = now.toLocaleString('en-US', options);

    weatherData.current.localTime = timeString;
    document.getElementById('local-time').textContent = timeString;

    const lastUpdatedOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const lastUpdatedString = now.toLocaleString('en-US', lastUpdatedOptions);
    weatherData.current.lastUpdated = lastUpdatedString;
    document.getElementById('last-updated').textContent = lastUpdatedString;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 600;
        z-index: 1000;
        max-width: 300px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    if (type === 'success') {
        notification.style.background = 'rgba(34, 197, 94, 0.9)';
    } else if (type === 'error') {
        notification.style.background = 'rgba(239, 68, 68, 0.9)';
    } else {
        notification.style.background = 'rgba(59, 130, 246, 0.9)';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

document.addEventListener('DOMContentLoaded', function () {
    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    locationSearch.addEventListener('input', function () {
        if (this.value.length > 0) {
            searchBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
        } else {
            searchBtn.style.background = 'linear-gradient(45deg, #3b82f6, #1d4ed8)';
        }
    });
});