
const tripDistance = document.getElementById('trip-distance');
console.log("tripDistance");


let userAge = "";

let generatedEvent = document.getElement('generated-event')

userAgeUnder = document.getElementById('user-ages').value = 'Minorenne';
console.log('userAgesUnder');

userAgeOver = document.getElementById('user-ages').value = 'Maggiorenne';
console.log('userAgesOver');


generatedEvent.addEventListener("click", function{
    if (userAgeUnder){
        teenPrice = priceBase - discountTeen;
    } else if (userAgeOver){
        priceBase = priceBase;
    };
    
});

let priceBase = parseFloat(0.27 * tripDistance);
console.log(priceBase);


const discountTeen = parseFloat((priceBase * 17) / 100);
console.log(discountTeen);

const discountOld = parseFloat((priceBase * 40) / 100);
console.log(discountOld);

