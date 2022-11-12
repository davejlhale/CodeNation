

// const reverseString = (str) => {
//     return str = str.split('').reverse().join('');
// }
// console.log(reverseString("hello world"));

const reverseStringDemo = (str) => {

    console.log(str);

    const strArry = str.split("");
    console.log(strArry);

    const revArray = strArry.reverse();
    console.log(revArray);

    const revString = revArray.join("");
    console.log (revString);

    return revString;
}

console.log("function returns " + reverseStringDemo("hello world"));


let shoppingList = [
    ["Apples","Oranges","Pears"],
    ["Beef","Pork","Lamb"],
    ["Carrots","Leeks","Onions"]
]
console.log(shoppingList[1][2]);


let fruit =  ["Apples","Oranges","Pears"];
let meat =  ["Beef","Pork","Lamb"];
let veg = ["Carrots","Leeks","Onions"];
let itemArray = [fruit,meat,veg];
console.log(itemArray[1][2])


let i=6;
do { 
	i ++;
}
while (i<5)
console.log(i);//displays 7 - still runs once and adds one to 6


i=6
while (i<5){
    i++;
}
console.log(i); //wont enter the loop so displays 6


//runs and displays 0 to 4 at it adds 1 to i (originally 0)5 times
for (i=0;i<5;i++){
    console.log(i);
}

let t =value = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
console.log(t);
if (t>"00:15") {console.log("!jj")}
const sleepTill =() =>{console.log("sleep")}
if ( new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) > "01:00") { sleepTill("08:00")}
