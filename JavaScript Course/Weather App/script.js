const API_Key = "0fa82dbc2c9b4153983221559241005";
const WeatherURL = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=`;

getWeather(WeatherURL, "Dearborn");
async function getWeather(url, location) {
  try {
    const response = await fetch(url + location, { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);
    const parsedData = parseData(weatherData);
    displayData(parsedData);
  } catch (error) {
    console.error("Error fetching weather info.", error);
  }
}

//Gets only the required fields for the app.
function parseData(weatherData) {
  console.log(weatherData);
  return {
    name: weatherData.location.name,
    region: weatherData.location.region,
    country: weatherData.location.country,
    localTime: weatherData.location.localtime,

    temp_f: weatherData.current.temp_f,
    temp_c: weatherData.current.temp_c,
    desc: weatherData.current.condition.text,
    icon: weatherData.current.condition.icon,
    feelslike_f: weatherData.current.feelslike_f,
    feelslike_c: weatherData.current.feelslike_c,
    wind_dir: weatherData.current.wind_dir,
    wind_mph: weatherData.current.wind_mph,
    humidity: weatherData.current.humidity,
  };
}

function displayData(parseData) {
  console.log(parseData);
  //Display Location Name
  locationName = document.querySelector("#name");
  locationName.textContent = parseData.name;

  //Display Weather Icon
  weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.src = parseData.icon;

  //Display Location Temp
  locationTemp = document.querySelector("#temp");
  locationTemp.textContent = `${parseData.temp_f}°`

  //Display Location Description
  locationDesc = document.querySelector("#desc");
  locationDesc.textContent = parseData.desc;

  //Display feels like
  feelsLike = document.querySelector("#feels-like");
  feelsLike.textContent = `Feels like ${parseData.feelslike_f}°`;

  //Display humidity
  humidity = document.querySelector("#humidity");
  humidity.textContent = `Humidity ${parseData.humidity}%`;

  //Display wind info
  windInfo = document.querySelector("#wind-info");
  windInfo.textContent = `Wind ${parseData.wind_mph} mph ${parseData.wind_dir}`;

}
