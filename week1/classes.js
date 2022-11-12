// let offer ="none";
// let time=1200;

// const cafe = {
//     name :"Whitesheep",
//     seatingCapacity:100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino","Latte","Filter coffee","Tea","Hot chocoalte"
//     ],

//         breakfastOffer: "Free croissant with coffee",
//         lunchOffer: "Sandwhich",
//         noOffer: "Wash you own dishes",

//         openCafe : () => {
//             if (this.hasSpecialOffers){
//                 return "time for a special offer";
//             }
//         },
//         closeCafe : () => {
//             return "Get out";
//         }

        
    
// };

// const object = { propertyName : "Name" }

// object2 = object;
// object.propertyName = "Test";
// console.log(object.propertyName);

// if (time<1100){
//     offer = cafe.breakfastOffer;
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
// } else {
//     offer=cafe.noOffer;
// }

// const tester = () => {return "test"}

// console.log(cafe.openCafe())
// console.log(cafe.closeCafe());

// cafe.closeCafe = tester;

// console.log(cafe.closeCafe())
// console.log(offer);


// let day = "Saturday",test

// console.log(test)

// let alarmToPlay=null;

// const alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// if (day ==="Saturday" || day === "Sunday") {
//     alarmToPlay = alarms.weekendAlarm;
// } else {
//     alarmToPlay = alarms.weekdayAlarm;
// }

// console.log(alarmToPlay);


// const person = {
//     name :"Dave",
//     age:47
// }

// person.favSongs = ["Bad","With or without you"];
// console.table(person.favSongs);
// console.table(person)


const object1 = { propertyName : "Name" }

console.log(object1.propertyName);
object2 = object1;
object2.propertyName = "Test";
console.log(object1.propertyName);
//object2 is a copy of object1
//so changes to one will auto change the others data
//needs clone - google says its a pain best achieved with use of libraries such as angular



const pet = {
    name :"Romany",
    typeOfPet:"Dog",
    age:10,
    colour:"Black",

    eat  ()  { return `${this.name} is eating.`},
    drink  ()  {return `${this.name} is drinking.`}
};

console.log(pet.eat());
console.log(pet.drink());




let tableNumber=101;
let totalBill=0;
let fullOrder=`Table ${tableNumber}\n\n`;

const coffeeShop = {
    branch: "Liverpool",
    drinks: [ 
        ["Beer",3.00],
        ["Coke",2.00]
    ],
    food  : [
        ["Fish & Chips",5.50],
        ["Bangers & Mash",5.00]
    ],

    drinksOrdered (drinksItemNumber) {
        try {
            fullOrder+=`${this.drinks[drinksItemNumber][0]}    ${this.drinks[drinksItemNumber][1].toFixed(2)}\n`  ;
            totalBill +=  this.drinks[drinksItemNumber][1]
        } catch(err) {
            console.log("drinks item not availiable");
        }
    },
    foodOrdered (foodItemNumber) {
        try {
        fullOrder+=`${this.food[foodItemNumber][0]}   ${this.food[foodItemNumber][1].toFixed(2)}\n`;
        totalBill +=  this.food[foodItemNumber][1]
        }
        catch (err) {
            console.log("food item not availiable");
        }
    }
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


function menuSelection() {
    readline.question("[F]ood Menu [D]rinks menu] [E]xit]", function(answer) {
        console.log(answer);
        switch (answer.toUpperCase()){
            case "F" :
                foodSelection();
            break;
            case "D" :
                drinkSelection();
            break;
            case "E":
                console.log(fullOrder);
                console.log(totalBill);
                readline.close();
            break;
            default:
                menuSelection();
                break;
        }
    });
}

function foodSelection() {
    console.table(coffeeShop.food)
    readline.question("Press selection number or [M]enus]", function(answer) {
        console.log("food"+answer);
        switch (answer.toUpperCase()){
            case "F" :
                foodSelection();
            break;
            case "D" :
                drinkSelection();
            break;
            case "M":
                menuSelection();
            break;
            default :
                coffeeShop.foodOrdered(answer);
                foodSelection();
            break;
        }
    });
}
     
function drinkSelection() {
    console.table(coffeeShop.drinks)
    readline.question("Press selection number or [M]enus]", function(answer) {
        switch (answer.toUpperCase()){
            case "F" :
                foodSelection();
            break;
            case "D" :
                drinkSelection();
            break;
            case "M":
                menuSelection();
                break;
            default :
                coffeeShop.drinksOrdered(answer);
                drinkSelection();
            break;
        }
    });
}  
menuSelection();


// const drinksList = {
//         coffee: 1.50,
//         hotChocolate: 2.00,
//         icedCoffee: 2.00,
//         mochaLatte: 3.00
//     }
//     const foodList = {
//             scone: 2.00,
//             croissant: 1.50,
//             chocolateBrownie: 3.00 
//     }

// const coffeeShop = {
//     branch: "",
//     drinksWithPrices: drinksList,
//     foodWithPrices: foodList,

//     drinksOrdered(coffeeNumber, hotChocolateNumber, icedCoffeeNumber, mochaLatteNumber){
//         let drinkString="", drinkCost = (coffeeNumber*this.drinksWithPrices.coffee)+(hotChocolateNumber.drinksWithPrices.hotChocolate)+(icedCoffeeNumber*this.drinksWithPrices.icedCoffee)+
//         (mochaLatteNumber*this.drinksWithPrices.mochaLatte)
//         if (coffeeNumber>0) drinkString += `${coffeeNumber} coffee, `;
//         if (hotChocolateNumber>0) drinkString += `${hotChocolateNumber} hot chocolate, `;
//         if (icedCoffeeNumber>0) drinkString += `${icedCoffeeNumber} iced coffee, `;
//         if (mochaLatteNumber>0) drinkString += `${mochaLatteNumber} moca latte, `;
//         return drinkString+`for a total of £${drinkCost}`
//     },
//     foodOrdered(sconeNumber, croissantNumber, chocolateBrownieNumber){
//         let foodString="", foodCost = (sconeNumber*this.foodWithPrices.scone)+(croissantNumber*this.foodWithPrices.croissant)+(chocolateBrownieNumber*this.foodWithPrices.chocolateBrownie)
//         if (sconeNumber>0) foodString += `${sconeNumber} scones, `;
//         if (croissantNumber>0) foodString += `${croissantNumber} hot chocolate, `;
//         if (chocolateBrownieNumber>0) foodString += `${chocolateBrownieNumber} chocolate brownie, `;
//         return foodString+`for a total of £${foodCost}`
//     }
// }

// console.table(coffeeShop)
// let foodString="",drinkString="";
// console.log(coffeeShop.foodOrdered(1,2,2,4));
// console.debug(coffeeShop);