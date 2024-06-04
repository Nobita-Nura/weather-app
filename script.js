
 
let API_KEY = "561618bc2de383fe707db3f83e6d3b7b"

 getWeatherData = (city)=>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather';

    const full_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(full_url);
    console.log(city);

    return weatherPromise.then((response)=>{
        return response.json()
    })
}
function searchCity(){
     const city = document.getElementById('city-input').value;

     getWeatherData(city)
     .then((response)=>{
         showWeatherData(response)
         console.log(err)
     })
     .catch((err) => {
         console.log(err)
     })
}

showWeatherData = (weatherData)=>{
document.getElementById('city-name').innerText=weatherData.name;
document.getElementById('weather-type').innerText=weatherData.weather[0].main;
document.getElementById('Temp').innerText=weatherData.main.temp;
document.getElementById('Min-Temp').innerText=weatherData.main.temp_min;
document.getElementById('Max-Temp').innerText=weatherData.main_max;


}










