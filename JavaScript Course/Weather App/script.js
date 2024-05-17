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

  const handleSearch = () => {
    if (searchInput.value !== null) {
      userLocation = searchInput.value;
      searchInput.value = "";
      getWeather(weatherURL, userLocation);
      getForecast(forecastURL, userLocation);
    }
  }

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter"){
      handleSearch();
    }
  })
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
    alert("Please enter in a valid Country, City, or Zip code!")
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
  locationName.textContent = `${weatherData.name} - ${weatherData.country}`;

  //Display location time:
  locationTime = document.querySelector("#curr-time");
  formattedTime = weatherData.localtime.split(" ")[1];
  locationTime.textContent = `Local Time: ${formattedTime}`;

  //Display Weather Icon
  weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.src = weatherData.icon;

  //Display Location Temp

  //Default temp unit is F
  locationTemp = document.querySelector("#temp");
  locationTemp.textContent = `${Math.round(weatherData.temp_f)}°`;

  const tempF = document.querySelector("#tempF");
  const tempC = document.querySelector("#tempC");
  tempF.addEventListener("click", () => {
    locationTemp.textContent = `${Math.round(weatherData.temp_f)}°`;
    tempC.classList.remove("active");
    tempF.classList.add("active");
  });
  tempC.addEventListener("click", () => {
    locationTemp.textContent = `${Math.round(weatherData.temp_c)}°`;
    tempF.classList.remove("active");
    tempC.classList.add("active");
  });

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

  let mouseDown = false;
  let startX, scrollLeft;
  
  const startDragging  = (e) => {
    mouseDown = true;
    startX = e.pageX - forecastContainer.offsetLeft;
    scrollLeft = forecastContainer.scrollLeft;
  }

  const stopDragging = (e) => {
    mouseDown = false;
  }

  const move = (e) => {
    e.preventDefault();
    if(!mouseDown) {return;}
    const x = e.pageX - forecastContainer.offsetLeft;
    const scroll = x - startX;
    forecastContainer.scrollLeft = scrollLeft - scroll;
  }

  forecastContainer.addEventListener('mousemove', move, false);
  forecastContainer.addEventListener('mousedown', startDragging, false);
  forecastContainer.addEventListener('mouseup', stopDragging, false);
  forecastContainer.addEventListener('mouseleave', stopDragging, false);


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

    const tempF = document.querySelector("#tempF");
    const tempC = document.querySelector("#tempC");

    tempF.addEventListener("click", () => {
      tempActual.textContent = `${Math.round(currDay.day.avgtemp_f)}°`;
    });

    tempC.addEventListener("click", () => {
      tempActual.textContent = `${Math.round(currDay.day.avgtemp_c)}°`
    });

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
