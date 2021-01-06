window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".davis-get-restaurants").addEventListener('click', getRestaurants);
    document.querySelector(".merced-get-restaurants").addEventListener('click', getRestaurants);

    function getRestaurants() {
        let davisRestaurants = document.querySelector(".davis-restaurants");
            davisRestaurants.classList.add("restaurant-appear");
        let mercedRestaurants = document.querySelector(".merced-restaurants");
            mercedRestaurants.classList.add('restaurant-appear')

    }
})



