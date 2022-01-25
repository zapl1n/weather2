class UI{
    constructor() {
        this.location = document.querySelector(".location");
        this.temp = document.querySelector(".temp");
        this.desc = document.querySelector(".description");
    }

    drawWeather(data){
        this.desc.textContent = data.weather[0].description;
        this.temp.textContent = kelvinToCelsius(data.main.temp);
        this.location.textContent = data.name;
    }
}


function kelvinToCelsius(kelvin){
    return Math.round(kelvin-273.1) + '\xB0';
}