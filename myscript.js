
const tripDistance = document.getElementById('trip-distance');
console.log("tripDistance");



let userAge = "";

let generatedEvent = document.getElementById('generated-event');

// userAgeUnder = document.getElementById('user-ages').value = 'Minorenne';
// console.log('userAgesUnder');

// userAgeOver = document.getElementById('user-ages').value = 'Maggiorenne';
// console.log('userAgesOver');

let userNameInput = document.getElementById("full-name");



generatedEvent.addEventListener("click", function(){
    document.querySelector('h1').innerHTML = userNameInput.value;
    
    if (userAge){
        teenPrice = priceBase - discountTeen;
    } else if (userAge){
        priceBase = priceBase;
    };
    
});

// let priceBase = (0.27 * tripDistance);
// console.log(priceBase);


// const discountTeen = parseFloat((priceBase * 17) / 100);
// console.log(discountTeen);

// const discountOld = parseFloat((priceBase * 40) / 100);
// console.log(discountOld);

