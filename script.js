let city = document.getElementById("city-input");

let date = document.getElementById("date")
let time = document.getElementById("waqt")
let cityName = document.getElementById("cityName")
let temp = document.getElementById("temp")
let description = document.getElementById("description")
let weather = document.getElementById("weather")
let minTemp = document.querySelector("#min-temp-container .value");
let maxTemp = document.querySelector("#max-temp-container .value");
let windSpeed = document.getElementById("wind-speed")
let humidity = document.getElementById("humidity")


city.addEventListener("keydown", function (lol) {

    if (lol.key === "Enter") {
        lol.preventDefault();

        let cityValue = city.value;

        let url = `https://open-weather13.p.rapidapi.com/city/${cityValue}/EN`;
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "bf5669bdabmsh670958cd235cd44p165cb1jsnd520641e92d1",
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
            },
        };

        getWeather(url, options)
        city.value = "";
    }

})


async function getWeather(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        updateDetails(result);
        getDateTime();

    } catch (error) {
        console.error(error);
    }
}

function getDateTime(){
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    const formattedDate = new Date().toLocaleDateString("en-In",options);
    date.innerHTML = formattedDate;
    
    const options2 = {
        hour: "2-digit", minute: "2-digit", hour12: true
    };
    
    const formattedTime = new Date().toLocaleTimeString("en-In",options2).toUpperCase();
    time.innerHTML = formattedTime
}

function updateDetails(result){

    let cityNameValue = result["name"];
    let tempValue = result["main"]["temp"];
    let weatherValue = result["weather"][0]["main"];
    let descriptionValue = result["weather"][0]["description"];
    
    let minTempValue = result["main"]["temp_min"];
    let maxTempValue = result["main"]["temp_max"];
    let windSpeedValue = result["wind"]["speed"];
    let humidityValue = result["main"]["humidity"];

    updateHTML(cityNameValue, tempValue, weatherValue, descriptionValue, minTempValue, maxTempValue, windSpeedValue, humidityValue);
    setBackground(weatherValue);
}

function updateHTML(city_Name, temperature, Weather, desc, min_Temp, max_Temp, wind_Speed, Humidity){

    cityName.innerText = city_Name 
    temp.innerHTML = `${((parseFloat(temperature) - 32)*(5/9)).toFixed(0)}<span class="temp-deg"><sup>&deg;C</sup></span>`; 
    weather.innerText = Weather  
    description.innerText = desc 
    minTemp.innerHTML = `${((parseFloat(min_Temp) - 32)*(5/9)).toFixed(0)}<span class="temp-symbol"><sup>&deg;C</sup></span>`
    maxTemp.innerHTML = `${((parseFloat(max_Temp) - 32)*(5/9)).toFixed(0)}<span class="temp-symbol"><sup>&deg;C</sup></span>`
    windSpeed.innerHTML = `${((wind_Speed)*18/5).toFixed(0)}<span id="kmph">km/hr</span>`
    humidity.innerHTML = `${Humidity}<span id="percent">%</span>` 

}

function setBackground(weather){
    const body = document.body;
    let bgImage = "";

    switch(weather){
        case "Clear":
            bgImage = "url('Assets/Clear.jpg')";
            break;
        case "Clouds":
            bgImage = "url('Assets/Clouds.jpg')";
            break;
        case "Mist":
            bgImage = "url('Assets/Mist.jpg')";
            break;
        case "Rain":
            bgImage = "url('Assets/Rain.jpg')";
            break; 
        case "Thunderstorm":
            bgImage = "url('Assets/Thunderstorm.jpg')";
            break;    
        case "Snow":
            bgImage = "url('Assets/Snow.jpg')";
            break;    
        case "Smoke":
            bgImage = "url('Assets/Smoke.jpg')";
            break;
        case "Haze":
            bgImage = "url('Assets/Haze.jpg')";
            break;
        default:
            bgImage = "url('Assets/Default.jpg')";
    }

    body.style.backgroundImage = bgImage;
}