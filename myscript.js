
const tripDistance = document.getElementById('trip-distance').value;
console.log("tripDistance");

let userAgeInput = document.getElementById("user-age");

let generatedEvent = document.getElementById('generated-event');

let userNameInput = document.getElementById("full-name");


generatedEvent.addEventListener("click", function(){
    document.querySelector('h1').innerHTML = userNameInput.value;

    document.getElementById('final-price').innerHTML = priceBase.value;

    console.log(priceBase);
    
    if (userAgeInput.value = "Minorenne"){

        teenPrice = priceBase - discountTeen;

        document.getElementById("final-price").innerHTML = teenPrice;
    ;}
    
    
});


let priceBase = parseFloat (0.27 * tripDistance);
console.log(priceBase);


const discountTeen = parseInt ((priceBase * 17) / 100);
console.log(discountTeen);

