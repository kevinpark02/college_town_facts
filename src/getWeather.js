import Weather from "./weather";
import DavisUI from "./uiWeather";

const davisUi = new DavisUI()

const davisWeather = new Weather("95616");
const mercedWeather = new Weather("95344");
const berkeleyWeather = new Weather("94704");
const scWeather = new Weather("95064");
const sbWeather = new Weather("93106");
const laWeather = new Weather("90095");
const riversideWeather = new Weather("92521");
const irvineWeather = new Weather("92617");
const sdWeather = new Weather("92037");

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
        davisWeather.getWeather()
            .then(results => {
                davisUi.paint(results)
            })
            .catch(err => console.log(err))
        
        mercedWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        berkeleyWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        scWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        sbWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        laWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        riversideWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        irvineWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
        
        sdWeather.getWeather()
            .then(results => {
                console.log(results);
            })
            .catch(err => console.log(err))
}
