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
            davisRestaurants.classList.add("restaurant-appear");
        let mercedRestaurants = document.querySelector(".merced-restaurants");
            mercedRestaurants.classList.add('restaurant-appear');
        let berkeleyRestaurants = document.querySelector(".berkeley-restaurants");
            berkeleyRestaurants.classList.add('restaurant-appear');
        let scRestaurants = document.querySelector(".sc-restaurants");
            scRestaurants.classList.add('restaurant-appear');
        let sbRestaurants = document.querySelector(".sb-restaurants");
            sbRestaurants.classList.add('restaurant-appear');
        let laRestaurants = document.querySelector(".la-restaurants");
            laRestaurants.classList.add('restaurant-appear');
        let riversideRestaurants = document.querySelector(".riverside-restaurants");
            riversideRestaurants.classList.add('restaurant-appear');
        let irvineRestaurants = document.querySelector(".irvine-restaurants");
            irvineRestaurants.classList.add('restaurant-appear');
        let sdRestaurants = document.querySelector(".sd-restaurants");
            sdRestaurants.classList.add('restaurant-appear');


    }
})



