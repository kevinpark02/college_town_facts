window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".davis-demo-btn").addEventListener('click', showDavisDemo);
    document.querySelector(".davis-weather-btn").addEventListener('click', showDavisWeather);
    
    document.querySelector(".merced-demo-btn").addEventListener('click', showMercedDemo);
    document.querySelector(".merced-weather-btn").addEventListener('click', showMercedWeather);
    
    document.querySelector(".berkeley-demo-btn").addEventListener('click', showBerkeleyDemo);
    document.querySelector(".berkeley-weather-btn").addEventListener('click', showBerkeleyWeather);

    document.querySelector(".sc-demo-btn").addEventListener('click', showScDemo);
    document.querySelector(".sc-weather-btn").addEventListener('click', showScWeather);

    document.querySelector(".sb-demo-btn").addEventListener('click', showSbDemo);
    document.querySelector(".sb-weather-btn").addEventListener('click', showSbWeather);

    document.querySelector(".la-demo-btn").addEventListener('click', showLaDemo);
    document.querySelector(".la-weather-btn").addEventListener('click', showLaWeather);
    
    document.querySelector(".riverside-demo-btn").addEventListener('click', showRiversideDemo);
    document.querySelector(".riverside-weather-btn").addEventListener('click', showRiversideWeather);

    document.querySelector(".irvine-demo-btn").addEventListener('click', showIrvineDemo);
    document.querySelector(".irvine-weather-btn").addEventListener('click', showIrvineWeather);

    document.querySelector(".sd-demo-btn").addEventListener('click', showSdDemo);
    document.querySelector(".sd-weather-btn").addEventListener('click', showSdWeather);

    function showDavisDemo() {
        let davisDemo = document.getElementById('davis-container');
            davisDemo.classList.remove("top-hide")

            let op = 0.01;
            let timer = setInterval(function() {
                if(op >= 1) {
                    clearInterval(timer);
                }
                davisDemo.style.opacity = op;
                davisDemo.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);

        let davisWeather = document.querySelector('.davis-weather-info');
        
        let op2 = 1;
        let timer2 = setInterval(function(){
            if(op2 <= 0.01) {
                clearInterval(timer2);
            }
            davisWeather.style.opacity = op2;
            davisWeather.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
            op2 -= op2 * 0.05;
        }, 10);
        davisWeather.classList.remove("top-show")
    }
    
    function showDavisWeather() {
        let davisDemo = document.getElementById("davis-container");
        
        let op2 = 1;
        let timer2 = setInterval(function(){
            if(op2 <= 0.01) {
                clearInterval(timer2);
            }
            davisWeather.style.opacity = op2;
            davisWeather.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
            op2 -= op2 * 0.05;
        }, 10);
        davisDemo.classList.add("top-hide");
        
        let davisWeather = document.querySelector('.davis-weather-info');
            davisWeather.classList.add("top-show");

            let op = 0.01;
            let timer = setInterval(function() {
                if(op >= 1) {
                    clearInterval(timer);
                }
                davisWeather.style.opacity = op;
                davisWeather.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);
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

    function showSbDemo() {
        let davisDemo = document.getElementById('sb-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.sb-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showSbWeather() {
        let davisDemo = document.getElementById("sb-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.sb-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showLaDemo() {
        let davisDemo = document.getElementById('la-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.la-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showLaWeather() {
        let davisDemo = document.getElementById("la-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.la-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showRiversideDemo() {
        let davisDemo = document.getElementById('riverside-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.riverside-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showRiversideWeather() {
        let davisDemo = document.getElementById("riverside-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.riverside-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showIrvineDemo() {
        let davisDemo = document.getElementById('irvine-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.irvine-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showIrvineWeather() {
        let davisDemo = document.getElementById("irvine-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.irvine-weather-info');
            davisWeather.classList.add("top-show");
    }

    function showSdDemo() {
        let davisDemo = document.getElementById('sd-container');
            davisDemo.classList.remove("top-hide")
        let davisWeather = document.querySelector('.sd-weather-info');
            davisWeather.classList.remove("top-show")
    }
    
    function showSdWeather() {
        let davisDemo = document.getElementById("sd-container");
            davisDemo.classList.add("top-hide");
        let davisWeather = document.querySelector('.sd-weather-info');
            davisWeather.classList.add("top-show");
    }
})