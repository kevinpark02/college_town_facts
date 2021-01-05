const axios = require("axios");

window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".davis-get-restaurants").addEventListener('click', getRestaurants);
    
    function getRestaurants(e) {
        e.preventDefault();
        console.log('get restaurants')

        let API_KEY = "E8QhotyXIDO6bpaPb3o2fi_YM4s2Fc0rYIye3Dx9iV30cwjH9elw5ODw6uVmRw092Mt3MA9GbxcwOwlqMFifrh1e-OsrloZ1vA3Uh-PrHpfbRJOeS7zzcZWsOyf0X3Yx";
        // let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql";
        let queryURL = "https://api.yelp.com/v3/graphql";

        let yelp = axios.create({
            baseURL: queryURL,
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': "*"
            },
            method: "GET"
        })

        yelp({
          data: JSON.stringify({
            query: `{
            search(term: "coffee",
                location: "kyoto",
                limit: 10) {
            business {
                name
             }
        }
    }`,
          }),
        }).then(({ data }) => {
          // Double data: data is what Axios puts the response body in, but it's also what GraphQL returns
          let businesses = data.data.search.business;
          businesses.forEach((b) => {
            console.log("Name: ", b.name);
          });
        });
    }
})



