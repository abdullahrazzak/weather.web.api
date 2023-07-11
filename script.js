const API_KEY = `34637a4167fd7eeb3e919e5b11dccbee`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2>Invalid City/Country <h2>`
        return;
    }
    weather.innerHTML = `
        
        <div>
        
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="im" alt="" style="height:120px; width:150px;">
    
    <h4 class="sm"> ${data.weather[0].main} </h4>
            
            <h1 style="font-size:50px;">${data.main.temp} ℃</h1>
           
            
            <p>Feels like ${data.main.feels_like}℃ </p>
            <p>Humidity ${data.main.humidity}% </p>
            <p>Wind speed ${data.wind.speed} km/h  </p>

        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)