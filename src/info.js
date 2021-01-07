window.addEventListener("DOMContentLoaded", (event) => {
    let davis = document.getElementById("davis");
    davis.classList.add("appear");
    let davisIcon = document.getElementById("davis-icon");
    davisIcon.classList.add("highlight");

    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        let davis = document.getElementById("davis");
        let davisRestaurants = document.querySelector(".davis-restaurants");
        let davisYelp = document.querySelector(".davis-yelp");
        let davisIcon = document.getElementById("davis-icon");

        let merced = document.getElementById("merced");
        let mercedRestaurants = document.querySelector(".merced-restaurants");
        let mercedYelp = document.querySelector(".merced-yelp");
        let mercedIcon = document.getElementById("merced-icon");
        
        let berkeley = document.getElementById("berkeley");
        let berkeleyRestaurants = document.querySelector(".berkeley-restaurants");
        let berkeleyYelp = document.querySelector(".berkeley-yelp");
        let berkeleyIcon = document.getElementById("berkeley-icon");
        
        let santacruz = document.getElementById("santacruz");
        let scRestaurants = document.querySelector(".sc-restaurants");
        let scYelp = document.querySelector(".sc-yelp");
        let scIcon = document.getElementById("sc-icon");
        
        let santabarbara = document.getElementById("santabarbara");
        let sbRestaurants = document.querySelector(".sb-restaurants");
        let sbYelp = document.querySelector(".sb-yelp");
        let sbIcon = document.getElementById("sb-icon");
        
        let ucla = document.getElementById("ucla");
        let laRestaurants = document.querySelector(".la-restaurants");
        let laYelp = document.querySelector(".la-yelp");
        let laIcon = document.getElementById("la-icon");
        
        let riverside = document.getElementById("riverside");
        let riversideRestaurants = document.querySelector(".riverside-restaurants");
        let riversideYelp = document.querySelector(".riverside-yelp");
        let riversideIcon = document.getElementById("riverside-icon");
        
        let irvine = document.getElementById("irvine");
        let irvineRestaurants = document.querySelector(".irvine-restaurants");
        let irvineYelp = document.querySelector(".irvine-yelp");
        let irvineIcon = document.getElementById("irvine-icon");
        
        let sandiego = document.getElementById("sandiego");
        let sdRestaurants = document.querySelector(".sd-restaurants");
        let sdYelp = document.querySelector(".sd-yelp");
        let sdIcon = document.getElementById("sd-icon");

        if(document.documentElement.scrollTop < 449) {
            davis.classList.add("appear");
            davisIcon.classList.add("highlight")

            merced.classList.remove("appear");
            mercedRestaurants.classList.remove("restaurant-appear");
            mercedYelp.classList.remove("yelp-appear");
            mercedIcon.classList.remove("highlight");

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
            davisIcon.classList.remove("highlight");

            merced.classList.add("appear");
            mercedIcon.classList.add("highlight")

            berkeley.classList.remove("appear");
            berkeleyRestaurants.classList.remove("restaurant-appear");
            berkeleyYelp.classList.remove("yelp-appear");
            berkeleyIcon.classList.remove("highlight");

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
            mercedIcon.classList.remove("highlight");

            berkeley.classList.add("appear");
            berkeleyIcon.classList.add("highlight");

            santacruz.classList.remove("appear");
            scRestaurants.classList.remove("restaurant-appear");
            scYelp.classList.remove("yelp-appear");
            scIcon.classList.remove("highlight");

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
            berkeleyIcon.classList.remove("highlight");

            santacruz.classList.add("appear");
            scIcon.classList.add("highlight");

            santabarbara.classList.remove("appear");
            sbRestaurants.classList.remove("restaurant-appear");
            sbYelp.classList.remove("yelp-appear");
            sbIcon.classList.remove("highlight");

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
            scYelp.classList.remove("yelp-appear");
            scIcon.classList.remove("highlight");

            santabarbara.classList.add("appear");
            sbIcon.classList.add("highlight");

            ucla.classList.remove("appear");
            laRestaurants.classList.remove("restaurant-appear");
            laYelp.classList.remove("yelp-appear");
            laIcon.classList.remove("highlight");

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
            sbIcon.classList.remove("highlight");

            ucla.classList.add("appear");
            laIcon.classList.add("highlight");

            riverside.classList.remove("appear");
            riversideRestaurants.classList.remove("restaurant-appear");
            riversideYelp.classList.remove("yelp-appear");
            riversideIcon.classList.remove("highlight");

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
            laIcon.classList.remove("highlight");

            riverside.classList.add("appear");
            riversideIcon.classList.add("highlight");

            irvine.classList.remove("appear");
            irvineRestaurants.classList.remove("restaurant-appear");
            irvineYelp.classList.remove("yelp-appear");
            irvineIcon.classList.remove("highlight");

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
            riversideIcon.classList.remove("highlight");
            
            irvine.classList.add("appear");
            irvineIcon.classList.add("highlight");
            
            sandiego.classList.remove("appear");
            sdRestaurants.classList.remove("restaurant-appear");
            sdYelp.classList.remove("yelp-appear");
            sdIcon.classList.remove("highlight")
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
            irvineIcon.classList.remove("highlight");

            sandiego.classList.add("appear");
            sdIcon.classList.add("highlight");
        }
    }
})