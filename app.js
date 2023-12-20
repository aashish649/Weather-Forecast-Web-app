const apiKey = "8b888df567dc44e710780e0f81bad04b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=&appid=8b888df567dc44e710780e0f81bad04b&units=metric";

const search = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

const weatherImg = document.querySelector(".weather-img");

const cityElement = document.querySelector(".city");
const TempElement = document.querySelector(".temprature");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const errorMsg = document.querySelector(".error-msg");
const weaTher = document.querySelector(".weather");

const checkWeather = async (city) => {
  const apiKey = "8b888df567dc44e710780e0f81bad04b";
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(Url);

  //Check for invalid name

  if(response.status == 404)
  {
    errorMsg.style.display = "block";
    weaTher.style.display = "none";
  }else{
    let data = await response.json();

  console.log(data);

  cityElement.innerText = decodeURIComponent(data.name);
  TempElement.innerText = `${Math.round(data.main.temp)}°C`;
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  //code to change the images
  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "images/Drizzle.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  }

   weaTher.style.display = "block";
   errorMsg.style.display = "none";

  }


  
};

window.addEventListener("keydown", async (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    await checkWeather(search.value);
  }
});

button.addEventListener("click", () => {
  checkWeather(search.value);
});
