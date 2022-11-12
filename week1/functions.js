// let age = 59;
// if (age<18) {
//     console.log("Child : £8");
// } else if (age>=60) {
//     console.log("Senior : £7.50");
// } else  {
//     console.log("Adult : £10.95");
// }




// let coffeeIsGrinding= false;

// const pressCoffee = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping the grind");''
//     } else {
//         console.log("Grinding is about to begin");
//     }
//     coffeeIsGrinding = !coffeeIsGrinding;
// }

// pressCoffee();
// // pressCoffee();


// // let accNumber = 01234567

// // const cashWithdrawal = (amount,accNum) => {

// //     console.log(`Withdraw ${amount} from ${accNum}`);
// // }

// // cashWithdrawal(300,accNumber);
// // cashWithdrawal(10,1234567);
// // cashWithdrawal(200,12312334);



// let favColour = "Red";

// const displayFavColor = (col) => {
//     console.log(`My favourite colour is ${col}`);
// }

// displayFavColor(favColour);


// const addUp = (num1,num2) => {
//     return num1+num2;
// }


// console.log(addUp(2,5));


const multiplyByNineFiths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFiths(celsius) + 32
};

console.log('the temperature is ' + getFahrenheit(15) + '°F')



// function help () {
//     let helpMe=false;
// }

// console.log(`${help}`);

// const square = function(number) {
//     return number;
// }

// console.log(displayFavColor);


// const factorial =  (n) => {
//     if ((n===0) || (n===1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(100));

// let orderCount = 0;

// const takeOrder =(toppingOne,toppingTwo) => {
//     console.log(`pizza order ${orderCount++} with ${toppingOne} and ${toppingTwo}`)
// }

// takeOrder("ham","pepperoni");
// takeOrder("ham","egg");



// //accountNumber,balance,pinNumber
// let bankAccounts =[
//     [12345678,1000,1234],
//     [55556666,1000,5566],
//     [33334444,1000,3344],
// ];

// const withdrawRequest = (pin,accountNumber,cashRequested) => {
//     let matchingAccount = findAccount(accountNumber);

//     if (!matchingAccount) {
//         console.log("This card does not have a current account");
//         return false;
//     }
//     if (pin!==matchingAccount[2]) {
//         console.log("You have entered the wrong pin number!");
//         return false;
//     }
//     if (cashRequested > matchingAccount[1]) {
//         console.log(`You only have ${matchingAccount[1]}. You dont have the funds to withdraw ${cashRequested}`);
//         return false;
//     }

//     matchingAccount[1] -= cashRequested;
//     console.log (`Withdrawing ${cashRequested}. You now have abalance of ${matchingAccount[1]}`);
// }

// const findAccount = (accountNumber) => {
//     for(accounts in bankAccounts) {
//         if (bankAccounts[accounts][0]===accountNumber) {
//             return bankAccounts[accounts]
//         }
//     }
//     return null; 
// }

// withdrawRequest (1234,12345678,100);
// withdrawRequest (3344,33334444,100);




const coffeeShop = {
    branch: "",
    drinksWithPrices: {
        coffee: 1.50,
        hotChocolate: 2.00,
        icedCoffee: 2.00,
        mochaLatte: 3.00
    },
    foodWithPrices: {
        scone: 2.00,
        croissant: 1.50,
        chocolateBrownie: 3.00
    },
    drinksOrdered(coffeeNumber, hotChocolateNumber, icedCoffeeNumber, mochaLatteNumber){
        let drinkString = ``
        const drinkCost = (coffeeNumber*this.drinksWithPrices.coffee)+(hotChocolateNumber.drinksWithPrices.hotChocolate)+(icedCoffeeNumber*this.drinksWithPrices.icedCoffee)+
        (mochaLatteNumber*this.drinksWithPrices.mochaLatte)
        if (coffeeNumber>1) drinkString += `${coffeeNumber} coffees, `; else if (coffeeNumber==1) drinkString += `1 coffee, `
        if (hotChocolateNumber>1) drinkString += `${hotChocolateNumber} hot chocolates, `; else if (hotChocolateNumber==1) drinkString += `1 hot chocolate, `
        if (icedCoffeeNumber>1) drinkString += `${icedCoffeeNumber} iced coffees, `; else if (icedCoffeeNumber==1) drinkString += `1 iced coffee, `
        if (mochaLatteNumber>1) drinkString += `${mochaLatteNumber} moca lattes, `; else if (mochaLatteNumber==1) drinkString += `1 mocha latte, `
        return drinkString+`for a total of £${drinkCost}`
    },
    foodOrdered(sconeNumber, croissantNumber, chocolateBrownieNumber){
        let foodString = ``
        const foodCost = (sconeNumber*this.foodWithPrices.scone)+(croissantNumber*this.foodWithPrices.croissant)+(chocolateBrownieNumber*this.foodWithPrices.chocolateBrownie)
        if (sconeNumber>1) foodString += `${sconeNumber} scones, `; else if (sconeNumber==1) foodString += `1 scone, `
        if (croissantNumber>1) foodString += `${croissantNumber} croissants, `; else if (croissantNumber==1) foodString += `1 croissant, `
        if (chocolateBrownieNumber>1) foodString += `${chocolateBrownieNumber} chocolate brownies, `; else if (chocolateBrownieNumber==1) foodString += `1 chocolate brownie`
        return foodString+`for a total of £${foodCost}`
    },
    totalOrdered(){
        return foodString+drinkString+`for a total of ${foodCost+drinkCost}`
    },
    clearOrder(){
        foodString="", drinkString="", foodCost=0, drinkCost=0, drinkAddition=[0,0,0,0], foodAddition=[0,0,0], console.log (`Order cleared, ready for next customer`)
    },
    addDrink(drink){
        switch (drink){
            case coffee: drinkAddition[0]++; break;
            case hotChocolate: drinkAddition[1]++; break;
            case icedCoffee: drinkAddition[2]++; break;
            case mochaLatte: drinkAddition[3]++; break;
            default: console.log(`Unknown drink selected, please verify order and try again.`)
        }
    },
    addFood(food){
        switch(food){
            case scone: foodAddition[0]++; break;
            case croissant: foodAddition[1]++; break;
            case chocolateBrownie: foodAddition[2]++; break;
            default: console.log(`Unknown food item selected, please verify order and try again.`)
        }
    },
    submitOrder(){
        if (foodAddition!= [0,0,0]) this.foodOrdered(foodAddition.join());
        if (drinkAddition!= [0,0,0,0]) this.drinksOrdered(drinkAddition.join())
    }
}


addFood()