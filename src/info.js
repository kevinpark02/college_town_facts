window.addEventListener("DOMContentLoaded", (event) => {
    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        let davis = document.getElementById("davis")
        let merced = document.getElementById("merced")
        let berkeley = document.getElementById("berkeley")
        let santacruz = document.getElementById("santacruz")
        let santabarbara = document.getElementById("santabarbara")
        let ucla = document.getElementById("ucla")
        let riverside = document.getElementById("riverside")
        let irvine = document.getElementById("irvine")
        let sandiego = document.getElementById("sandiego")

        if(document.documentElement.scrollTop < 449) {
            davis.classList.add("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 1119) && (document.documentElement.scrollTop > 450)) {
            davis.classList.remove("appear");
            merced.classList.add("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 1799) && (document.documentElement.scrollTop > 1120)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.add("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 2479) && (document.documentElement.scrollTop > 1800)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.add("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 3149) && (document.documentElement.scrollTop > 2480)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.add("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 3849) && (document.documentElement.scrollTop > 3150)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.add("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 4519) && (document.documentElement.scrollTop > 3850)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.add("appear");
            irvine.classList.remove("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 5199) && (document.documentElement.scrollTop > 4520)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.add("appear");
            sandiego.classList.remove("appear");
        } else if ((document.documentElement.scrollTop < 7000) && (document.documentElement.scrollTop > 5200)) {
            davis.classList.remove("appear");
            merced.classList.remove("appear");
            berkeley.classList.remove("appear");
            santacruz.classList.remove("appear");
            santabarbara.classList.remove("appear");
            ucla.classList.remove("appear");
            riverside.classList.remove("appear");
            irvine.classList.remove("appear");
            sandiego.classList.add("appear");
        }
    }
})