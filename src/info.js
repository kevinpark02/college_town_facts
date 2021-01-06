window.addEventListener("DOMContentLoaded", (event) => {
    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        let davis = document.getElementById("davis");
        let davisRestaurants = document.querySelector(".davis-restaurants");
        let davisYelp = document.querySelector(".davis-yelp");

        let merced = document.getElementById("merced");
        let mercedRestaurants = document.querySelector(".merced-restaurants");
        let mercedYelp = document.querySelector(".merced-yelp");
        
        let berkeley = document.getElementById("berkeley");
        let berkeleyRestaurants = document.querySelector(".berkeley-restaurants");
        let berkeleyYelp = document.querySelector(".berkeley-yelp");
        
        let santacruz = document.getElementById("santacruz");
        let scRestaurants = document.querySelector(".sc-restaurants");
        let scYelp = document.querySelector(".sc-yelp");
        
        let santabarbara = document.getElementById("santabarbara");
        let sbRestaurants = document.querySelector(".sb-restaurants");
        let sbYelp = document.querySelector(".sb-yelp");
        
        let ucla = document.getElementById("ucla");
        let laRestaurants = document.querySelector(".la-restaurants");
        let laYelp = document.querySelector(".la-yelp");
        
        let riverside = document.getElementById("riverside");
        let riversideRestaurants = document.querySelector(".riverside-restaurants");
        let riversideYelp = document.querySelector(".riverside-yelp");
        
        let irvine = document.getElementById("irvine");
        let irvineRestaurants = document.querySelector(".irvine-restaurants");
        let irvineYelp = document.querySelector(".irvine-yelp");
        
        let sandiego = document.getElementById("sandiego");
        let sdRestaurants = document.querySelector(".sd-restaurants");
        let sdYelp = document.querySelector(".sd-yelp");

        if(document.documentElement.scrollTop < 449) {
            davis.classList.add("appear");

            merced.classList.remove("appear");
            mercedRestaurants.classList.remove("restaurant-appear");
            mercedYelp.classList.remove("yelp-appear");

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
            davisYelp.classList.remove("yelp-appear");

            merced.classList.add("appear");

            berkeley.classList.remove("appear");
            berkeleyRestaurants.classList.remove("restaurant-appear");
            berkeleyYelp.classList.remove("yelp-appear");

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
            mercedYelp.classList.remove("yelp-appear");

            berkeley.classList.add("appear");

            santacruz.classList.remove("appear");
            scRestaurants.classList.remove("restaurant-appear");
            scYelp.classList.remove("yelp-appear");

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
            berkeleyYelp.classList.remove("yelp-appear");

            santacruz.classList.add("appear");

            santabarbara.classList.remove("appear");
            sbRestaurants.classList.remove("restaurant-appear");
            sbYelp.classList.remove("yelp-appear");

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
            sbYelp.classList.remove("yelp-appear");

            santabarbara.classList.add("appear");

            ucla.classList.remove("appear");
            laRestaurants.classList.remove("restaurant-appear");
            laYelp.classList.remove("yelp-appear");

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
            sbYelp.classList.remove("yelp-appear");

            ucla.classList.add("appear");

            riverside.classList.remove("appear");
            riversideRestaurants.classList.remove("restaurant-appear");
            riversideYelp.classList.remove("yelp-appear");

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
            laYelp.classList.remove("yelp-appear");

            riverside.classList.add("appear");

            irvine.classList.remove("appear");
            irvineRestaurants.classList.remove("restaurant-appear");
            irvineYelp.classList.remove("yelp-appear");

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
            riversideYelp.classList.remove("yelp-appear");
            
            irvine.classList.add("appear");
            
            sandiego.classList.remove("appear");
            sdRestaurants.classList.remove("restaurant-appear");
            sdYelp.classList.remove("yelp-appear");
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
            irvineYelp.classList.remove("yelp-appear");

            sandiego.classList.add("appear");
        }
    }
})