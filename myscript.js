
const tripDistance = document.getElementById('trip-distance');
console.log("tripDistance");

let userAgeInput = document.getElementById("user-age");

let userNameInput = document.getElementById("full-name");

let generatedEvent = document.getElementById('generated-event');

let output = document.getElementById('final-price');
let pricePerKM = 0.27;

let priceBase = ""


generatedEvent.addEventListener("click", function(){

    const priceBase = pricePerKM * tripDistance.value;

    document.querySelector('h1').innerHTML = userNameInput.value;

    document.getElementById('final-price').innerHTML = priceBase.value;

    
    if (userAgeInput.value == "Minorenne"){

        teenPrice = priceBase - ((priceBase * 17) / 100);

        document.getElementById("final-price").innerHTML = teenPrice;

    } else if (userAgeInput.value == "Maggiorenne") {
        oldPrice = priceBase - ((priceBase * 33) / 100);
        document.getElementById("final-price").innerHTML = oldPrice;
    };
    userAgeInput = "Minorenne";
    userNameInput = "";

});


// const discountTeen = parseInt ((priceBase * 17) / 100);
// console.log(discountTeen);

