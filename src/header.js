window.addEventListener("DOMContentLoaded", (event) => {
    window.onscroll = function() { myFunction() };
    
    const mainHeader = document.getElementById("header");
    
    const sticky = mainHeader.offsetTop;
    
    function myFunction() {
        if (window.pageYOffset > sticky) {
            mainHeader.classList.add("sticky")
        } else {
            mainHeader.classList.remove("sticky")
        }
    }
})






