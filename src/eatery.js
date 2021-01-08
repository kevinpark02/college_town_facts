window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".davis-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".merced-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".berkeley-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".sc-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".sb-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".la-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".riverside-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".irvine-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".sd-get-restaurants").addEventListener('click', getRestaurants);

    function getRestaurants() {
        let davisRestaurants = document.querySelector(".davis-restaurants");
        let davisYelp = document.querySelector(".davis-yelp");
            let op = 0.01;
            let timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                }
                davisRestaurants.style.opacity = op;
                davisYelp.style.opacity = op;
                davisRestaurants.style.filter = "alpha(opacity=" + op * 100 + ")";
                davisYelp.style.filter = "alpha(opacity=" + op * 100 + ")";
                op += op * 0.05;
            }, 10);
            
        davisRestaurants.classList.add("restaurant-appear");
        davisYelp.classList.add("yelp-appear");

        let mercedRestaurants = document.querySelector(".merced-restaurants");
        let mercedYelp = document.querySelector(".merced-yelp");
            let op2 = 0.01;
            let timer2 = setInterval(function () {
                if (op2 >= 1) {
                    clearInterval(timer2);
                }
                mercedRestaurants.style.opacity = op2;
                mercedYelp.style.opacity = op2;
                mercedRestaurants.style.filter = "alpha(opacity=" + op2 * 100 + ")";
                mercedYelp.style.filter = "alpha(opacity=" + op2 * 100 + ")";
                op2 += op2 * 0.05;
            }, 10);
            mercedRestaurants.classList.add('restaurant-appear');
            mercedYelp.classList.add("yelp-appear");

        let berkeleyRestaurants = document.querySelector(".berkeley-restaurants");
        let berkeleyYelp = document.querySelector(".berkeley-yelp");
                    let op3 = 0.01;
                    let timer3 = setInterval(function () {
                      if (op3 >= 1) {
                        clearInterval(timer3);
                      }
                      berkeleyRestaurants.style.opacity = op3;
                      berkeleyYelp.style.opacity = op3;
                      berkeleyRestaurants.style.filter = "alpha(opacity=" + op3 * 100 + ")";
                      berkeleyYelp.style.filter = "alpha(opacity=" + op3 * 100 + ")";
                      op3 += op3 * 0.05;
                    }, 10);
            berkeleyRestaurants.classList.add('restaurant-appear');
            berkeleyYelp.classList.add("yelp-appear");

        let scRestaurants = document.querySelector(".sc-restaurants");
        let scYelp = document.querySelector(".sc-yelp");

            let op4 = 0.01;
            let timer4 = setInterval(function () {
              if (op4 >= 1) {
                clearInterval(timer4);
              }
              scRestaurants.style.opacity = op4;
              scYelp.style.opacity = op4;
              scRestaurants.style.filter = "alpha(opacity=" + op4 * 100 + ")";
              scYelp.style.filter = "alpha(opacity=" + op4 * 100 + ")";
              op4 += op4 * 0.05;
            }, 10);
            scRestaurants.classList.add('restaurant-appear');
            scYelp.classList.add("yelp-appear");


        let sbRestaurants = document.querySelector(".sb-restaurants");
        let sbYelp = document.querySelector(".sb-yelp");

            let op5 = 0.01;
            let timer5 = setInterval(function () {
              if (op5 >= 1) {
                clearInterval(timer5);
              }
              sbRestaurants.style.opacity = op5;
              sbYelp.style.opacity = op5;
              sbRestaurants.style.filter = "alpha(opacity=" + op5 * 100 + ")";
              sbYelp.style.filter = "alpha(opacity=" + op5 * 100 + ")";
              op5 += op5 * 0.05;
            }, 10);

            sbRestaurants.classList.add('restaurant-appear');
            sbYelp.classList.add("yelp-appear");

        let laRestaurants = document.querySelector(".la-restaurants");
        let laYelp = document.querySelector(".la-yelp");

            let op6 = 0.01;
            let timer6 = setInterval(function () {
              if (op6 >= 1) {
                clearInterval(timer6);
              }
              laRestaurants.style.opacity = op6;
              laYelp.style.opacity = op6;
              laRestaurants.style.filter = "alpha(opacity=" + op6 * 100 + ")";
              laYelp.style.filter = "alpha(opacity=" + op6 * 100 + ")";
              op6 += op6 * 0.05;
            }, 10);

            laRestaurants.classList.add('restaurant-appear');
            laYelp.classList.add("yelp-appear");

        let riversideRestaurants = document.querySelector(".riverside-restaurants");
        let riversideYelp = document.querySelector(".riverside-yelp");

            let op7 = 0.01;
            let timer7 = setInterval(function () {
                if (op7 >= 1) {
                clearInterval(timer7);
                }
                riversideRestaurants.style.opacity = op7;
                riversideYelp.style.opacity = op7;
                riversideRestaurants.style.filter = "alpha(opacity=" + op7 * 100 + ")";
                riversideYelp.style.filter = "alpha(opacity=" + op7 * 100 + ")";
                op7 += op7 * 0.05;
            }, 10);

            riversideRestaurants.classList.add('restaurant-appear');
            riversideYelp.classList.add("yelp-appear");

        let irvineRestaurants = document.querySelector(".irvine-restaurants");
        let irvineYelp = document.querySelector(".irvine-yelp");

            let op8 = 0.01;
            let timer8 = setInterval(function () {
              if (op8 >= 1) {
                clearInterval(timer8);
              }
              irvineRestaurants.style.opacity = op8;
              irvineYelp.style.opacity = op8;
              irvineRestaurants.style.filter = "alpha(opacity=" + op8 * 100 + ")";
              irvineYelp.style.filter = "alpha(opacity=" + op8 * 100 + ")";
              op8 += op8 * 0.05;
            }, 10);

            irvineRestaurants.classList.add('restaurant-appear');
            irvineYelp.classList.add("yelp-appear");

        let sdRestaurants = document.querySelector(".sd-restaurants");
        let sdYelp = document.querySelector(".sd-yelp");

            let op9 = 0.01;
            let timer9 = setInterval(function () {
              if (op9 >= 1) {
                clearInterval(timer9);
              }
              sdRestaurants.style.opacity = op9;
              sdYelp.style.opacity = op9;
              sdRestaurants.style.filter = "alpha(opacity=" + op9 * 100 + ")";
              sdYelp.style.filter = "alpha(opacity=" + op9 * 100 + ")";
              op9 += op9 * 0.05;
            }, 10);

            sdRestaurants.classList.add('restaurant-appear');
            sdYelp.classList.add("yelp-appear");
    }
})



