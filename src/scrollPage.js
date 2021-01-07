document.getElementById('davis-icon').addEventListener('click', scrollToDavis);
document.getElementById('merced-icon').addEventListener('click', scrollToMerced);
document.getElementById('berkeley-icon').addEventListener('click', scrollToBerkeley);
document.getElementById('sc-icon').addEventListener('click', scrollToSc);
document.getElementById('sb-icon').addEventListener('click', scrollToSb);
document.getElementById('la-icon').addEventListener('click', scrollToLa);
document.getElementById('riverside-icon').addEventListener('click', scrollToRiverside);
document.getElementById('irvine-icon').addEventListener('click', scrollToIrvine);
document.getElementById('sd-icon').addEventListener('click', scrollToSd);

function scrollToDavis() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");
    
    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");
    
    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");
    
    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");
    
    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");
    
    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");
    
    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");
    
    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 0; 

    davis.classList.add("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");   
    santacruz.classList.remove("appear");   
    santabarbara.classList.remove("appear");   
    ucla.classList.remove("appear");   
    riverside.classList.remove("appear");   
    irvine.classList.remove("appear");   
    sandiego.classList.remove("appear");   
    
    davisIcon.classList.add("highlight");
    mercedIcon.classList.remove("highlight")   
    berkeleyIcon.classList.remove("highlight");  
    scIcon.classList.remove("highlight");  
    sbIcon.classList.remove("highlight");  
    laIcon.classList.remove("highlight");  
    riversideIcon.classList.remove("highlight");  
    irvineIcon.classList.remove("highlight");  
    sdIcon.classList.remove("highlight");  
}

function scrollToMerced() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 451;
    
    davis.classList.remove("appear");
    merced.classList.add("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.remove("appear");
    riverside.classList.remove("appear");
    irvine.classList.remove("appear");
    sandiego.classList.remove("appear");
    
    davisIcon.classList.remove("highlight");
    mercedIcon.classList.add("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToBerkeley() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 1121;

    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.add("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.remove("appear");
    riverside.classList.remove("appear");
    irvine.classList.remove("appear");
    sandiego.classList.remove("appear");
    
    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.add("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToSc() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");
    
    document.documentElement.scrollTop = 1801;  
    
    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.add("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.remove("appear");
    riverside.classList.remove("appear");
    irvine.classList.remove("appear");
    sandiego.classList.remove("appear");  

    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.add("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToSb() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 2481;   
    
    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.add("appear");
    ucla.classList.remove("appear");
    riverside.classList.remove("appear");
    irvine.classList.remove("appear");
    sandiego.classList.remove("appear");  
    
    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.add("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToLa() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 3151;    

    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.add("appear");
    riverside.classList.remove("appear");
    irvine.classList.remove("appear");
    sandiego.classList.remove("appear");  

    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.add("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToRiverside() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 3851;  
    
    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.remove("appear");
    riverside.classList.add("appear");
    irvine.classList.remove("appear");
    sandiego.classList.remove("appear");  
    
    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.add("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToIrvine() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 4521; 

    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.remove("appear");
    riverside.classList.remove("appear");
    irvine.classList.add("appear");
    sandiego.classList.remove("appear");   

    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.add("highlight");
    sdIcon.classList.remove("highlight"); 
}

function scrollToSd() {
    let davis = document.getElementById("davis");
    let davisIcon = document.getElementById("davis-icon");

    let merced = document.getElementById("merced");
    let mercedIcon = document.getElementById("merced-icon");

    let berkeley = document.getElementById("berkeley");
    let berkeleyIcon = document.getElementById("berkeley-icon");

    let santacruz = document.getElementById("santacruz");
    let scIcon = document.getElementById("sc-icon");

    let santabarbara = document.getElementById("santabarbara");
    let sbIcon = document.getElementById("sb-icon");

    let ucla = document.getElementById("ucla");
    let laIcon = document.getElementById("la-icon");

    let riverside = document.getElementById("riverside");
    let riversideIcon = document.getElementById("riverside-icon");

    let irvine = document.getElementById("irvine");
    let irvineIcon = document.getElementById("irvine-icon");

    let sandiego = document.getElementById("sandiego");
    let sdIcon = document.getElementById("sd-icon");

    document.documentElement.scrollTop = 5201;

    davis.classList.remove("appear");
    merced.classList.remove("appear");
    berkeley.classList.remove("appear");
    santacruz.classList.remove("appear");
    santabarbara.classList.remove("appear");
    ucla.classList.remove("appear");
    riverside.classList.remove("appear");
    irvine.classList.remove("appear");
    sandiego.classList.add("appear");
    
    davisIcon.classList.remove("highlight");
    mercedIcon.classList.remove("highlight");
    berkeleyIcon.classList.remove("highlight");
    scIcon.classList.remove("highlight");
    sbIcon.classList.remove("highlight");
    laIcon.classList.remove("highlight");
    riversideIcon.classList.remove("highlight");
    irvineIcon.classList.remove("highlight");
    sdIcon.classList.add("highlight"); 
}

