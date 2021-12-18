const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody = document.querySelector(".card-body");
const timeImage = document.querySelector(".card-top img");
const cardInfo = document.querySelector(".back-card");

// const outCelsius = (kelvin) => {
//     celsius = Math.round(kelvin - 273.15);
//     return celsius;
// };

const isDayTime = (icon) => {
    if (icon.includes('d')){
        return true
    } else {
        return false
    }
    
};



updateWeatherApp = (city) => {
    const iconSrc = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
    const imageName = city.weather[0].icon;
    cityName.textContent = city.name;
    cardBody.innerHTML = `
     <div class="card-mid row">
            <div class="col-8 text-center temp">
              <span>${Math.round(city.main.temp)}&deg;C</span>
            </div>
            <div class="col-4 condition-temp">
              <p class="condition">${city.weather[0].description}</p>
              <span class="high">${Math.round(city.main.temp_max)}&deg;C</span>
              <span class="low">${Math.round(city.main.temp_min)}&deg;C</span>
            </div>
          </div>
          <div class="icon-container card shadow mx-auto">
            <img src="${iconSrc}" alt="" />
          </div>
          <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
              <p>${Math.round(city.main.feels_like)}&deg;C</p>
              <span>Sensacion Termica</span>
            </div>
            <div class="col text-center">
              <p>${city.main.humidity}%</p>
              <span>Humedad</span>
            </div>
          </div>
      </div>    
    `;
  isDayTime(imageName) ? timeImage.setAttribute('src', 'images/day_image.svg') : timeImage.setAttribute('src', 'images/night_image.svg');
  isDayTime(imageName) ? cityName.classList.remove('text-white') : cityName.classList.add('text-white');
  cardInfo.classList.remove("d-none");
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();
    requestCity(citySearched)
        .then((data) => { updateWeatherApp(data) })
        .catch((error)=>{console.log(error)})

})