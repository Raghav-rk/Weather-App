const apiKey = "0f09ecdabf50f79a727e94171bb89dad";
const apiUlr = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUlr + city + `&appid=${apiKey}`);
   
    var data = await response.json();

    if (searchBox.value == "") {
        alert("please Enter city name");
        
    }

    if (response.status == 404) {
        weatherIcon.src = "weather-app-img/images/404.png";

        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "0°c";
        document.querySelector(".humidity").innerHTML = "0%";
        document.querySelector(".wind").innerHTML = "0km/h";

        document.querySelector(".weather").style.display = "block";


    }
    else {


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather-app-img/images/clouds.png";

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather-app-img/images/clear.png";

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-app-img/images/rain.png";

        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather-app-img/images/drizzle.png";

        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-app-img/images/mist.png";

        }

        document.querySelector(".weather").style.display = "block";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

