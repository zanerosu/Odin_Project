getLocation();

function getLocation() {
  const API_Key = "0fa82dbc2c9b4153983221559241005";
  const weatherURL = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=`;
  const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=`;
  let userLocation = "London";
  getWeather(weatherURL, userLocation);
  getForecast(forecastURL, userLocation);

  const searchBtn = document.querySelector("#search");
  const searchInput = document.querySelector("input");

  searchBtn.addEventListener("click", () => {
    if (searchInput.value !== null) {
      userLocation = searchInput.value;
      searchInput.value = "";
      getWeather(weatherURL, userLocation);
      getForecast(forecastURL, userLocation);
    }
  });
}

async function getWeather(url, location) {
  try {
    const response = await fetch(url + location, { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);
    const parsedData = parseData(weatherData);
    displayWeather(parsedData);
  } catch (error) {
    console.error("Error fetching weather info.", error);
  }
}

async function getForecast(url, location) {
  try {
    const response = await fetch(url + location + "&days=14", { mode: "cors" });
    const forecastData = await response.json();
    displayForecast(forecastData.forecast.forecastday);
  } catch (error) {
    console.error("Error fetching forcast info.", error);
  }
}

//Gets only the required fields for the app.
function parseData(weatherData) {
  console.log(weatherData);
  return {
    name: weatherData.location.name,
    region: weatherData.location.region,
    country: weatherData.location.country,
    localtime: weatherData.location.localtime,

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

function displayWeather(weatherData) {
  console.log(weatherData);
  //Display Location Name
  locationName = document.querySelector("#name");
  locationName.textContent = weatherData.name;

  //Display Weather Icon
  weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.src = weatherData.icon;

  //Display Location Temp
  locationTemp = document.querySelector("#temp");
  locationTemp.textContent = `${Math.round(weatherData.temp_f)}°`;

  //Display Location Description and set background image
  setBackground(weatherData.desc, weatherData.localtime);
  locationDesc = document.querySelector("#desc");
  locationDesc.textContent = weatherData.desc;

  //Display feels like
  feelsLike = document.querySelector("#feels-like");
  feelsLike.textContent = `Feels like ${Math.round(weatherData.feelslike_f)}°`;

  //Display humidity
  humidity = document.querySelector("#humidity");
  humidity.textContent = `Humidity ${weatherData.humidity}%`;

  //Display wind info
  windInfo = document.querySelector("#wind-info");
  windInfo.textContent = `Wind ${weatherData.wind_mph} mph ${weatherData.wind_dir}`;
}

function displayForecast(forecastData) {
  const forecastContainer = document.querySelector("#forecast-info");
  forecastContainer.innerHTML = "";
  console.log(forecastData);

  forecastData.forEach((currDay) => {
    const forecastDay = document.createElement("div");
    forecastDay.classList.add("forecast-day");

    const forecastDate = document.createElement("p");
    forecastDate.classList.add("forecast-date");

    //Formats date from API into more friendly format.
    const dateObj = new Date(currDay.date);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const dayIndex = dateObj.getDay();
    const dayOfMonth = dateObj.getDate();
    const formattedDate = `${daysOfWeek[dayIndex]} ${dayOfMonth}`;

    forecastDate.textContent = formattedDate;
    forecastDay.appendChild(forecastDate);

    const forecastIcon = document.createElement("img");
    forecastIcon.classList.add("forecast-icon");
    forecastIcon.src = currDay.day.condition.icon;
    forecastDay.appendChild(forecastIcon);

    const tempActual = document.createElement("h2");
    tempActual.classList.add("temp-actual");
    tempActual.textContent = `${Math.round(currDay.day.avgtemp_f)}°`;
    forecastDay.appendChild(tempActual);

    const forecastDesc = document.createElement("p");
    forecastDesc.classList.add("forecast-desc");
    forecastDesc.textContent = currDay.day.condition.text;
    forecastDay.appendChild(forecastDesc);

    forecastContainer.appendChild(forecastDay);
  });
}

function setBackground(weatherDesc, currTime) {
  const backgroundElement = document.querySelector("#background");
  weatherDesc = weatherDesc.toLowerCase();

  const hour = parseInt(currTime.split(" ")[1].split(":")[0], 10);
  const isNightTime = hour >= 21 || hour < 6;

  if (isNightTime) {
    backgroundElement.style.backgroundImage =
      "url(./backgrounds/nighttime.jpg)";
  } else {
    if (weatherDesc.includes("cloudy")) {
      backgroundElement.style.backgroundImage = "url(./backgrounds/cloudy.jpg)";
    } else if (weatherDesc.includes("rain")) {
      backgroundElement.style.backgroundImage = "url(./backgrounds/rainy.jpg)";
    } else if (weatherDesc.includes("storm")) {
      backgroundElement.style.backgroundImage = "url(./backgrounds/Stormy.jpg)";
    } else {
      backgroundElement.style.backgroundImage = "url(./backgrounds/sunny.jpg)";
    }
  }
}
