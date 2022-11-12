

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