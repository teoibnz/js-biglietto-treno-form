
const tripDistance = document.getElementById('trip-distance');
console.log("tripDistance");

let userAgeInput = document.getElementById("user-age");

let generatedEvent = document.getElementById('generated-event');

let userNameInput = document.getElementById("full-name");

// let tripDurationInput = document.getElementById("trip-distance");

generatedEvent.addEventListener("click", function(){
    document.querySelector('h1').innerHTML = userNameInput.value;
    document.getElementById('final-price').innerHTML = priceBase.value;
    console.log(priceBase);
    // document.querySelector('h2').innerHTML = tripDurationInput.value;
    if (userAgeInput.value = "Minorenne"){
        teenPrice = priceBase - discountTeen;
    } else if (userAgeInput){
        priceBase = priceBase;
    };
    
});

let priceBase = parseInt (0.27 * tripDistance);
console.log(priceBase);


const discountTeen = parseInt ((priceBase * 17) / 100);
console.log(discountTeen);

// const discountOld = ((priceBase * 40) / 100);
// console.log(discountOld);

