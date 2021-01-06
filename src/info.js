window.addEventListener("DOMContentLoaded", (event) => {
    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        let davis = document.getElementById("davis");
        let davisRestaurants = document.querySelector(".davis-restaurants");

        let merced = document.getElementById("merced");
        let mercedRestaurants = document.querySelector(".merced-restaurants");
        
        let berkeley = document.getElementById("berkeley");
        let berkeleyRestaurants = document.querySelector(".berkeley-restaurants");
        
        let santacruz = document.getElementById("santacruz");
        let scRestaurants = document.querySelector(".sc-restaurants");
        
        let santabarbara = document.getElementById("santabarbara");
        let sbRestaurants = document.querySelector(".sb-restaurants");
        
        let ucla = document.getElementById("ucla");
        let laRestaurants = document.querySelector(".la-restaurants");

        let riverside = document.getElementById("riverside");
        let riversideRestaurants = document.querySelector(".riverside-restaurants");

        let irvine = document.getElementById("irvine");
        let irvineRestaurants = document.querySelector(".irvine-restaurants");
        
        let sandiego = document.getElementById("sandiego");
        let sdRestaurants = document.querySelector(".sd-restaurants");

        if(document.documentElement.scrollTop < 449) {
            davis.classList.add("appear");

            merced.classList.remove("appear");
            mercedRestaurants.classList.remove("restaurant-appear")

            berkeley.classList.remove("appear");

            santacruz.classList.remove("appear");

            santabarbara.classList.remove("appear");

            ucla.classList.remove("appear");

            riverside.classList.remove("appear");

            irvine.classList.remove("appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 1119) && (document.documentElement.scrollTop > 450)) {
            davis.classList.remove("appear");
            davisRestaurants.classList.remove("restaurant-appear");

            merced.classList.add("appear");

            berkeley.classList.remove("appear");
            berkeleyRestaurants.classList.remove("restaurant-appear");

            santacruz.classList.remove("appear");

            santabarbara.classList.remove("appear");

            ucla.classList.remove("appear");
            
            riverside.classList.remove("appear");

            irvine.classList.remove("appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 1799) && (document.documentElement.scrollTop > 1120)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");
            mercedRestaurants.classList.remove("restaurant-appear");

            berkeley.classList.add("appear");

            santacruz.classList.remove("appear");
            scRestaurants.classList.remove("restaurant-appear");

            santabarbara.classList.remove("appear");

            ucla.classList.remove("appear");

            riverside.classList.remove("appear");

            irvine.classList.remove("appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 2479) && (document.documentElement.scrollTop > 1800)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");

            berkeley.classList.remove("appear");
            berkeleyRestaurants.classList.remove("restaurant-appear");

            santacruz.classList.add("appear");

            santabarbara.classList.remove("appear");
            sbRestaurants.classList.remove("restaurant-appear");

            ucla.classList.remove("appear");

            riverside.classList.remove("appear");

            irvine.classList.remove("appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 3149) && (document.documentElement.scrollTop > 2480)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");

            berkeley.classList.remove("appear");

            santacruz.classList.remove("appear");
            scRestaurants.classList.remove("restaurant-appear");

            santabarbara.classList.add("appear");

            ucla.classList.remove("appear");
            laRestaurants.classList.remove("restaurant-appear");

            riverside.classList.remove("appear");

            irvine.classList.remove("appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 3849) && (document.documentElement.scrollTop > 3150)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");

            berkeley.classList.remove("appear");

            santacruz.classList.remove("appear");

            santabarbara.classList.remove("appear");
            sbRestaurants.classList.remove("restaurant-appear");

            ucla.classList.add("appear");

            riverside.classList.remove("appear");
            riversideRestaurants.classList.remove("restaurant-appear");

            irvine.classList.remove("appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 4519) && (document.documentElement.scrollTop > 3850)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");

            berkeley.classList.remove("appear");

            santacruz.classList.remove("appear");

            santabarbara.classList.remove("appear");

            ucla.classList.remove("appear");
            laRestaurants.classList.remove("restaurant-appear");

            riverside.classList.add("appear");

            irvine.classList.remove("appear");
            irvineRestaurants.classList.remove("restaurant-appear");

            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 5199) && (document.documentElement.scrollTop > 4520)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");

            berkeley.classList.remove("appear");

            santacruz.classList.remove("appear");

            santabarbara.classList.remove("appear");

            ucla.classList.remove("appear");

            riverside.classList.remove("appear");
            riversideRestaurants.classList.remove("restaurant-appear");
            
            irvine.classList.add("appear");
            
            sandiego.classList.remove("appear");
            sdRestaurants.classList.remove("restaurant-appear");
        } else if ((document.documentElement.scrollTop < 7000) && (document.documentElement.scrollTop > 5200)) {
            davis.classList.remove("appear");

            merced.classList.remove("appear");

            berkeley.classList.remove("appear");

            santacruz.classList.remove("appear");

            santabarbara.classList.remove("appear");

            ucla.classList.remove("appear");

            riverside.classList.remove("appear");

            irvine.classList.remove("appear");
            irvineRestaurants.classList.remove("restaurant-appear");

            sandiego.classList.add("appear");
        }
    }
})