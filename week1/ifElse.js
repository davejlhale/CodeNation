//activity one

// let age= 17;
// let country = "UKs";

// if (age>17 && country == "UK") {
//     console.log("Yes I can serve you");
// } else{
//     console.log(`You arn't old enough to drink in ${country}`);
// }


// //activity two

// let pizzaTopping = "Ham";

// switch (pizzaTopping){

//     //favourites
//     case "Ham":
//     case "Cheese":
//     case "Bacon":
//     case "Pepperoni":
//         console.log("These are important ingredients to me");
//         break;
//     //passable
//     case "Onion":
//     case "Beef":
//         console.log(`I dont mind having ${pizzaTopping} on my pizza`);
//         break;
//     //evil !!
//     case "Pinapple":
//         console.log(`${pizzaTopping} should not be on a pizza`);
//         break;
//     default :
//         console.log(`What the.... is ${pizzaTopping} !?!?`);
//         break;
// }



// let favourites = ["Ham", "Cheese", "Bacon","Pepperoni"];
// let passable = ["Onion", "Beef"]
// let evil = ["Pinapple"]

// pizzaTopping = "Pinapple";
// switch (true){

//     case favourites.includes(pizzaTopping) :
//         console.log("These are important ingredients to me");
//         break;
    
//     case passable.includes(pizzaTopping):
//         console.log(`I dont mind having ${pizzaTopping} on my pizza`);
//         break;
    
//     case evil.includes(pizzaTopping):
//         console.log(`${pizzaTopping} should not be on a pizza`);
//         break;
        
//     default :
//         console.log(`What the.... is ${pizzaTopping} !?!?`);
//         break;
// }

//activity three

let password = "12345678";


// if (password.length < 8 ) {
//     console.log("Your password is too short.");
// } else {
//     console.log(`Your password is ${password}`);
// }

// if (num%3==0 && num%5==0){
//     console.log(`JACKPOT ${num} is divisiable by 3 AND 5`);
// } else if (num%3==0 || num%5==0 ) {
//     console.log("This number is divisiable by 3 or 5");
// } else{
//     console.log("Not a useful number! If you like multiples of 3 or 5! "); 
// }


// let num = 15;
// switch (true) {
//     case (num%3==0 && num%5==0): 
//         console.log(`JACKPOT ${num} is divisiable by 3 AND 5`);
//         break;
//     case (num%3==0 || num%5==0 ):
//         console.log("This number is divisiable by 3 or 5");
//         break;
//     default:
//         console.log("Not a useful number! If you like multiples of 3 or 5! "); 
//     break; 
// }

// switch (true) {
//     case (num%3==0 || num%5==0 ):
//         console.log("@This number is divisiable by 3 or 5");
//       break;
//     case (num%3==0 && num%5==0): 
//         console.log(`@JACKPOT ${num} is divisiable by 3 AND 5`);
//         break;
//     default:
//         console.log("@Not a useful number! If you like multiples of 3 or 5! "); 
//     break;  
// }

//activity five

// let num=10;
// switch (true) {
//     case (num%3==0 && num%5==0 ):
//         console.log("fizz buzz");
//       break;
//     case (num%3==0): 
//         console.log(`fizz`);
//         break;
//     case (num%5==0):
//         console.log("buzz" ); 
//     break;  
//     default:
//         console.log(num);
// }

// //example one
// let n=1034301;
// let toTestlaterr=n;
// if (n ==n.toString().split('').reverse().join('') ){
//     console.log(`${n} is a palindrome`);
// } else {
//     console.log(`${n} is NOT a palindrome`);
// }

// //example two
// let num= 2001002
// num = num.toString()
// let num2 = num.split('')
// num2 = num2.reverse()
// num2 = num2.join('')

// if (num==num2) {
//     console.log(`${num} is a palindrome`);
// }else{
//     console.log(`${num} is NOT a palindrome`);
// }




// //activity seven

// let plceOfWork = "Home";
// let date = new Date();
// let townOfHome  = "Liverpool";

// Object.prototype.twoDigits = function () {
//     return ("0" + this).slice(-2);
// }

// time = date.getHours().twoDigits() + ':' + date.getMinutes().twoDigits();
// console.log(time);

// if (        time >= '09:30' && time <= '12.30'  ||
//             time >='13.30' && time <='17.30') {
//     console.log(`I am at ${plceOfWork} in ${townOfHome}`)
// } else if ( time >= '09:00' && time <= '09.30') {
//     console.log(`I am traveling to work at ${plceOfWork}`)
// } else if ( time>='12.30' && time <= '13.30'){
//     console.log(`I am on lunch`);
// }

// //activity eight

// let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels  = [ "a","e","i","o","u"];
// let lastIndex =0;

// function foundVowel() {  
//     msg = `vowel ${vowels[i]} was last found at found position ${index+1}`;
//     if (index>lastIndex) lastIndex = index;  
// }

// function notFoundVowel() {
//     msg = `vowel ${vowels[i]} not found` 
// }

// for (i in vowels) {
//    index = myString.lastIndexOf(vowels[i]);
//    index==-1 ?  notFoundVowel() :  foundVowel();
//    console.log(msg);
// }

// console.log(`The last vowel was at Position ${lastIndex+1}`);


//activity ten
let number1=100;
let number2=102;

sum=number1+number2;
if (sum%2==0) {
    console.log(sum);
} else {
    console.log(number1*number2);
}

