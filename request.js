
const requestCity = async(city) => {
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ES&units=metric&appid=215f31c8787c080f6245107118ea3dfa `;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    return data;
}
