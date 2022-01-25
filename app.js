// ls obj
const ls = new LS();

const localStorageCity = ls.getLocationData();

const weather = new Weather(localStorageCity);
const ui = new UI();

// get city weather
function getWeather(){
    weather.getWeather()
        .then(data =>{
            ui.drawWeather(data);
        })
        .catch(err =>{
            console.log(err);
        })
}
getWeather();

const form = document.querySelector("#changeCityForm")
form.addEventListener('submit', changeWeather);

function changeWeather(e){
    let city = document.querySelector("#changeCityValue").value;
    weather.changeCity(city);
    getWeather();
    ls.setLocationData(city);
    document.querySelector("#changeCityValue").value = "";
    e.preventDefault();
    console.log("dez")

}