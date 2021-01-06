import Weather from "./weather";
const davisWeather = new Weather("95616");

davisWeather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err))