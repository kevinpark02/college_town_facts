window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".davis-demo-btn").addEventListener('click', showDavisDemo);
    document.querySelector(".davis-weather-btn").addEventListener('click', showDavisWeather);
    
    document.querySelector(".merced-demo-btn").addEventListener('click', showMercedDemo);
    document.querySelector(".merced-weather-btn").addEventListener('click', showMercedWeather);
    
    document.querySelector(".berkeley-demo-btn").addEventListener('click', showBerkeleyDemo);
    document.querySelector(".berkeley-weather-btn").addEventListener('click', showBerkeleyWeather);

    document.querySelector(".sc-demo-btn").addEventListener('click', showScDemo);
    document.querySelector(".sc-weather-btn").addEventListener('click', showScWeather);

    function showDavisDemo() {
        let davisDemo = document.getElementById('davis-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.davis-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showDavisWeather() {
        let davisDemo = document.getElementById("davis-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.davis-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showMercedDemo() {
        let davisDemo = document.getElementById('merced-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.merced-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showMercedWeather() {
        let davisDemo = document.getElementById("merced-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.merced-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showBerkeleyDemo() {
        let davisDemo = document.getElementById('berkeley-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.berkeley-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showBerkeleyWeather() {
        let davisDemo = document.getElementById("berkeley-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.berkeley-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showScDemo() {
        let davisDemo = document.getElementById('sc-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.sc-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showScWeather() {
        let davisDemo = document.getElementById("sc-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.sc-weather-info');
            davisWeather.classList.add("top-show");
    }
})