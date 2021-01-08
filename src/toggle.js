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
            davisDemo.style.opacity = op2;
            davisDemo.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
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
        let mercedDemo = document.getElementById('merced-container');
            mercedDemo.classList.remove("top-hide")

            let op = 0.01;
            let timer = setInterval(function() {
                if(op >= 1) {
                    clearInterval(timer);
                }
                mercedDemo.style.opacity = op;
                mercedDemo.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);

        let mercedWeather = document.querySelector('.merced-weather-info');
        
        let op2 = 1;
        let timer2 = setInterval(function(){
            if(op2 <= 0.01) {
                clearInterval(timer2);
            }
            mercedWeather.style.opacity = op2;
            mercedWeather.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
            op2 -= op2 * 0.05;
        }, 10);
        
        mercedWeather.classList.remove("top-show")
    }
    
    function showMercedWeather() {
        let mercedDemo = document.getElementById("merced-container");
        
        let op2 = 1;
        let timer2 = setInterval(function(){
            if(op2 <= 0.01) {
                clearInterval(timer2);
            }
            mercedDemo.style.opacity = op2;
            mercedDemo.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
            op2 -= op2 * 0.05;
        }, 10);
        
        mercedDemo.classList.add("top-hide");
        
        let mercedWeather = document.querySelector('.merced-weather-info');
            mercedWeather.classList.add("top-show");

        let op = 0.01;
        let timer = setInterval(function() {
            if(op >= 1) {
                clearInterval(timer);
            }
            mercedWeather.style.opacity = op;
            mercedWeather.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.05;
        }, 10);
    }

    function showBerkeleyDemo() {
        let berkeleyDemo = document.getElementById('berkeley-container');
            berkeleyDemo.classList.remove("top-hide")

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              berkeleyDemo.style.opacity = op;
              berkeleyDemo.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);

        let berkeleyWeather = document.querySelector('.berkeley-weather-info');

        let op2 = 1;
        let timer2 = setInterval(function(){
            if(op2 <= 0.01) {
                clearInterval(timer2);
            }
            berkeleyWeather.style.opacity = op2;
            berkeleyWeather.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
            op2 -= op2 * 0.05;
        }, 10);

            berkeleyWeather.classList.remove("top-show")
    }
    
    function showBerkeleyWeather() {
        let berkeleyDemo = document.getElementById("berkeley-container");
        
        let op2 = 1;
        let timer2 = setInterval(function(){
            if(op2 <= 0.01) {
                clearInterval(timer2);
            }
            berkeleyDemo.style.opacity = op2;
            berkeleyDemo.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
            op2 -= op2 * 0.05;
        }, 10);

            berkeleyDemo.classList.add("top-hide");

        let berkeleyWeather = document.querySelector('.berkeley-weather-info');
            berkeleyWeather.classList.add("top-show");

        let op = 0.01;
        let timer = setInterval(function() {
            if(op >= 1) {
                clearInterval(timer);
            }
            berkeleyWeather.style.opacity = op;
            berkeleyWeather.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.05;
        }, 10);
    }

    function showScDemo() {
        let scDemo = document.getElementById('sc-container');
            scDemo.classList.remove("top-hide")

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              scDemo.style.opacity = op;
              scDemo.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);

        let scWeather = document.querySelector('.sc-weather-info');

            let op2 = 1;
            let timer2 = setInterval(function(){
                if(op2 <= 0.01) {
                    clearInterval(timer2);
                }
                scWeather.style.opacity = op2;
                scWeather.style.filter = 'alpha(opacity=' + op2 * 100 + ')';
                op2 -= op2 * 0.05;
            }, 10);

        scWeather.classList.remove("top-show")
    }
    
    function showScWeather() {
        let scDemo = document.getElementById("sc-container");
            
            let op2 = 1;
            let timer2 = setInterval(function () {
            if (op2 <= 0.01) {
                clearInterval(timer2);
            }
            scDemo.style.opacity = op2;
            scDemo.style.filter = "alpha(opacity=" + op2 * 100 + ")";
            op2 -= op2 * 0.05;
            }, 10);
            scDemo.classList.add("top-hide");

        let scWeather = document.querySelector('.sc-weather-info');
            scWeather.classList.add("top-show");

            let op = 0.01;
            let timer = setInterval(function() {
                if(op >= 1) {
                    clearInterval(timer);
                }
                scWeather.style.opacity = op;
                scWeather.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);
    }

    function showSbDemo() {
        let sbDemo = document.getElementById('sb-container');
            sbDemo.classList.remove("top-hide")

            let op = 0.01;
            let timer = setInterval(function() {
                if(op >= 1) {
                    clearInterval(timer);
                }
                sbDemo.style.opacity = op;
                sbDemo.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);

        let sbWeather = document.querySelector('.sb-weather-info');
            
        let op2 = 1;
            let timer2 = setInterval(function () {
            if (op2 <= 0.01) {
                clearInterval(timer2);
            }
            sbWeather.style.opacity = op2;
            sbWeather.style.filter = "alpha(opacity=" + op2 * 100 + ")";
            op2 -= op2 * 0.05;
            }, 10);
        
            sbWeather.classList.remove("top-show")
    }
    
    function showSbWeather() {
        let sbDemo = document.getElementById("sb-container");

        let op2 = 1;
        let timer2 = setInterval(function () {
          if (op2 <= 0.01) {
            clearInterval(timer2);
          }
          sbDemo.style.opacity = op2;
          sbDemo.style.filter = "alpha(opacity=" + op2 * 100 + ")";
          op2 -= op2 * 0.05;
        }, 10);
        sbDemo.classList.add("top-hide");
        
        let sbWeather = document.querySelector('.sb-weather-info');
            sbWeather.classList.add("top-show");

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              sbWeather.style.opacity = op;
              sbWeather.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);
    }

    function showLaDemo() {
        let laDemo = document.getElementById('la-container');
            laDemo.classList.remove("top-hide")

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              laDemo.style.opacity = op;
              laDemo.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);
            
        let laWeather = document.querySelector('.la-weather-info');
        let op2 = 1;
        let timer2 = setInterval(function () {
          if (op2 <= 0.01) {
            clearInterval(timer2);
          }
          laWeather.style.opacity = op2;
          laWeather.style.filter = "alpha(opacity=" + op2 * 100 + ")";
          op2 -= op2 * 0.05;
        }, 10);

        laWeather.classList.remove("top-show")
    }
    
    function showLaWeather() {
        let laDemo = document.getElementById("la-container");

            let op2 = 1;
            let timer2 = setInterval(function () {
                if (op2 <= 0.01) {
                clearInterval(timer2);
                }
                laDemo.style.opacity = op2;
                laDemo.style.filter =
                "alpha(opacity=" + op2 * 100 + ")";
                op2 -= op2 * 0.05;
            }, 10);
            laDemo.classList.add("top-hide");

        let laWeather = document.querySelector('.la-weather-info');
            laWeather.classList.add("top-show");

            let op = 0.01;
            let timer = setInterval(function() {
                if(op >= 1) {
                    clearInterval(timer);
                }
                laWeather.style.opacity = op;
                laWeather.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.05;
            }, 10);
    }

    function showRiversideDemo() {
        let riversideDemo = document.getElementById('riverside-container');
            riversideDemo.classList.remove("top-hide");
            
            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              riversideDemo.style.opacity = op;
              riversideDemo.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);

        let riversideWeather = document.querySelector('.riverside-weather-info');
            let op2 = 1;
            let timer2 = setInterval(function () {
            if (op2 <= 0.01) {
                clearInterval(timer2);
            }
            riversideWeather.style.opacity = op2;
            riversideWeather.style.filter = "alpha(opacity=" + op2 * 100 + ")";
            op2 -= op2 * 0.05;
            }, 10);
            riversideWeather.classList.remove("top-show");
    }
    
    function showRiversideWeather() {
        let riversideDemo = document.getElementById("riverside-container");
            let op2 = 1;
            let timer2 = setInterval(function () {
                if (op2 <= 0.01) {
                clearInterval(timer2);
                }
                riversideDemo.style.opacity = op2;
                riversideDemo.style.filter = "alpha(opacity=" + op2 * 100 + ")";
                op2 -= op2 * 0.05;
            }, 10);
            riversideDemo.classList.add("top-hide");

        let riversideWeather = document.querySelector('.riverside-weather-info');
            riversideWeather.classList.add("top-show");

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              riversideWeather.style.opacity = op;
              riversideWeather.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);
    }

    function showIrvineDemo() {
        let irvineDemo = document.getElementById('irvine-container');
            irvineDemo.classList.remove("top-hide");

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              irvineDemo.style.opacity = op;
              irvineDemo.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);

        let irvineWeather = document.querySelector('.irvine-weather-info');
        let op2 = 1;
        let timer2 = setInterval(function () {
            if (op2 <= 0.01) {
            clearInterval(timer2);
            }
            irvineWeather.style.opacity = op2;
            irvineWeather.style.filter = "alpha(opacity=" + op2 * 100 + ")";
            op2 -= op2 * 0.05;
        }, 10);
            irvineWeather.classList.remove("top-show");
    }
    
    function showIrvineWeather() {
        let irvineDemo = document.getElementById("irvine-container");
            let op2 = 1;
            let timer2 = setInterval(function () {
                if (op2 <= 0.01) {
                clearInterval(timer2);
                }
                irvineDemo.style.opacity = op2;
                irvineDemo.style.filter = "alpha(opacity=" + op2 * 100 + ")";
                op2 -= op2 * 0.05;
            }, 10);
            irvineDemo.classList.add("top-hide");
        let irvineWeather = document.querySelector('.irvine-weather-info');
            irvineWeather.classList.add("top-show");

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              irvineWeather.style.opacity = op;
              irvineWeather.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);
    }

    function showSdDemo() {
        let sdDemo = document.getElementById('sd-container');
            sdDemo.classList.remove("top-hide");

            let op = 0.01;
            let timer = setInterval(function () {
              if (op >= 1) {
                clearInterval(timer);
              }
              sdDemo.style.opacity = op;
              sdDemo.style.filter = "alpha(opacity=" + op * 100 + ")";
              op += op * 0.05;
            }, 10);

        let sdWeather = document.querySelector('.sd-weather-info');
        
        let op2 = 1;
        let timer2 = setInterval(function () {
          if (op2 <= 0.01) {
            clearInterval(timer2);
          }
          sdWeather.style.opacity = op2;
          sdWeather.style.filter = "alpha(opacity=" + op2 * 100 + ")";
          op2 -= op2 * 0.05;
        }, 10);
            sdWeather.classList.remove("top-show");
    }
    
    function showSdWeather() {
        let sdDemo = document.getElementById("sd-container");
            let op2 = 1;
            let timer2 = setInterval(function () {
                if (op2 <= 0.01) {
                clearInterval(timer2);
                }
                sdDemo.style.opacity = op2;
                sdDemo.style.filter = "alpha(opacity=" + op2 * 100 + ")";
                op2 -= op2 * 0.05;
            }, 10);
            sdDemo.classList.add("top-hide");
        let sdWeather = document.querySelector('.sd-weather-info');
            sdWeather.classList.add("top-show");
            let op = 0.01;
            let timer = setInterval(function () {
                if (op >= 1) {
                clearInterval(timer);
                }
                sdWeather.style.opacity = op;
                sdWeather.style.filter =
                "alpha(opacity=" + op * 100 + ")";
                op += op * 0.05;
            }, 10);
    }
})