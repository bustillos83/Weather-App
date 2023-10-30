

const apiKey = "API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=New York";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${API_KEY}`);
    let data = await response.json();

    console.log(data);

}

checkWeather();