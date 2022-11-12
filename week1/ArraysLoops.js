// //activity one
// let favSongs = [
//     "With or without you",
//     "Comfortable Numb",
//     "Baby Shark"
// ]

// favSongs[3]="Bad";
// favSongs.push("Baby one more time");

// // for (i in favSongs) {
// //     console.log(favSongs[i]);
// // }

// favSongs.pop();

// // for (i in favSongs) {
// //     console.log(favSongs[i]);
// // }


// //activity two
// favSongs.map(display)
// function display(song){
//     console.log(song)
// }

// //activity three
// let filmArray = [
//     "Film One",
//     "Film Two",
//     "Film Three",
//     "Film Four",
//     "Film Five"
// ]
// filmArray.push("Film Six");

// filmArray[filmArray.length] = "Film Seven";

// for (i in filmArray){
//     console.log(filmArray[i]);
// }


// for (i=0;i<6;i++) {

//     num = Math.floor((Math.random() *50))+1;
//     console.log(num);
// }


// for (i=9;i>=0;i--){
//     console.log(i);
// }


let newFilmArray = [
    "film one",
    "GhostBusters",
    "GhostBusters",
    "film four",
]

for (i in newFilmArray) {
    console.log(`Screen ${i} is showing ${newFilmArray[i]}`);
    }

if (newFilmArray[2]=="GhostBusters") {
        console.log("Yay it's Ghostbusters");
    }    else {
    console.log("Boo! We want Ghostbusters");
    }
//activity 5
function getRandomNumber(min,max) {
    return Math.floor((Math.random() * max))+min;
}
function divisibleBy(number,factor){
    return number%factor==0  
}

let numbersToPick = 6
for (i=0;i<numbersToPick;i++) {
  let randomNumber = getRandomNumber(1,30);
  let factor = 7;
    if (divisibleBy(randomNumber,factor)) {
        console.log(`${randomNumber} is divisible by ${factor}.`);
    } else {
        console.log(`${randomNumber} is not divisible by ${factor}.`);
    }
    
}

// //activity six
// let bobsFollowers = [
//     "Dave",
//     "Sam",
//     "Jane",
//     "Sally"
// ]

// let hannahsFollowers = [
//     "Pete",
//     "Dave",
//     "sarah",
//     "Jane"
// ]

// const sharedFollowers = bobsFollowers.filter(element => hannahsFollowers.includes(element));
// console.log(sharedFollowers);
// for (i in sharedFollowers) {
//     console.log (sharedFollowers[i]);

// }
//let walk = ['w'];
let walk = ['n','n','n','s','n','s','n','s','n','s'];

console.log(isValidWalk(walk));
function isValidWalk(walk) {
    //insert brilliant code here
  if (walk.filter(element => element=="n").length !== walk.filter(element => element=="s").length) {
  return false; }

  if (walk.filter(element => element=="e").length !== walk.filter(element => element=="w").length ){
    return false;
  }
  if ( walk.length !==10) { return false;}
  else return true;
  }

  let str='abracadabara';

    let vowels=['a','e','i','o','u'];
    let totalVowels=0;
//bobsFollowers.filter(element => hannahsFollowers.includes(element))
    str = str.split('')
  for (i in vowels) {
    totalVowels += str.filter(element => element==[vowels[i]]).length;
  }
console.log(totalVowels);

// for (i in bobsFollowers) {
//     for (j in hannahsFollowers){
//         if (bobsFollowers[i] == hannahsFollowers[j]) {
//             console.log(`The two influencers share the follower called ${bobsFollowers[i]}`);
//         }
//     }
// }

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData));
function countPositivesSumNegatives(input) {
    // your code here
    input.red
    let answer =[];
    let pos=0;
    let neg=0;
    
    for (num in input){
        console.log(input[num])
      switch (true){
              case input[num]<0:
                console.log("less"); neg+=input[num];
              break;
              case input[num]>0: 
              console.log("more");
              pos+=1;
              break;
              }
    }
    
    if (neg!=0 || pos !=0) {
      answer = [pos,neg]
    }
    return answer;
  }

console.log(getSum(0,1));

function getSum( a,b )
{
  let sum=0;
  if (a>b) {
    [a, b] = [b, a];
  }
  console.log("a"+a +" b"+b)
  for (i=a;i<=b;i++){
    console.log("i"+i);
    sum+=i;
  }
  return sum;
  
}