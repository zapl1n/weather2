class Weather{
    constructor(city) {
        this.city = city;
        this.key = '3f68bed6ed513095148620e7453abb2e';
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const responseData = await response.json();
        return responseData;
    }
    changeCity(newCity){
        this.city = newCity;
    }
}
