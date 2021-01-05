const axios = require("axios");

window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".davis-get-restaurants").addEventListener('click', getRestaurants);
    
    function getRestaurants(e) {
        e.preventDefault();
        console.log('get restaurants')

        let API_KEY =
          "E8QhotyXIDO6bpaPb3o2fi_YM4s2Fc0rYIye3Dx9iV30cwjH9elw5ODw6uVmRw092Mt3MA9GbxcwOwlqMFifrh1e-OsrloZ1vA3Uh-PrHpfbRJOeS7zzcZWsOyf0X3Yx";
        
        let yelpREST = axios.create({
            baseURL: "https://api.yelp.com/v3/",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-type": "application/json",
            },
        });

        yelpREST("/businesses/search", {
            params: {
                location: "davis, california",
                term: "restaurants",
                limit: 5,
            }
        }).then(({data}) => {
            let { businesses } = data
            businesses.forEach((b) => {
                console.log("Name: ", b.name)
            })
        })
    }
})



