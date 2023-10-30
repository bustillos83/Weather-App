const apiKey = "8ae7bbc73b1e8208046843b7d735be9d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=New York";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

}

checkWeather();