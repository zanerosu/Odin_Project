console.log("Testing 123")

const API_Key = "0fa82dbc2c9b4153983221559241005"
const WeatherURL = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=london`

async function getWeather(url){
    try {
        const response = await fetch(url, { mode: "cors" });
        const weatherData = await response.json();
        console.log(weatherData);
      } catch (error) {
        console.error("Error fetching weather info.", error);
      }
}

getWeather(WeatherURL);



