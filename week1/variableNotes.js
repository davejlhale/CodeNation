// //activity one
// let userName = "Dave";
// let userAge = "47";
// let favColour = "Green";

// console.log(`Hi ${userName}, I hear you are ${userAge} and like the colour ${favColour}!` );

//  userName = "Sam";
//  userAge = "26";
//  favColour = "Blue";
 
// console.log(`Hi ${userName}, I hear you are ${userAge} and like the colour ${favColour}!` );

// //activity two
// let dayOfWeek = "Monday";
// let breakfast = "Oats";
// let lunch = "Ham sandwhich";
// let dinner = "Bangers & Mash";

// console.log (`
// ${dayOfWeek}

// Breakfast   ${breakfast}
// Lunch       ${lunch}
// Dinner      ${dinner}`);

//  dayOfWeek = "Tuesday";
//  breakfast = "Toast";
//  lunch = "Cheese sandwhich";
//  dinner = "Fish & Chips";

//  console.log (`
// ${dayOfWeek}

// Breakfast   ${breakfast}
// Lunch       ${lunch}
// Dinner      ${dinner}`);


//activity three
let todaysDate = new Date()
const userBirthday = new Date(1975, 7, 28)  

//todaysDate-userBirthday gives milliseconds between the two dates
//1000 ms in 1 sec * 60 secs in a min * 60 mins in an hour * 24 hours in a day
let totalDaysAlive = Math.floor((todaysDate-userBirthday) / (1000 * 3600 * 24));
console.log (`
You were born on    ${userBirthday} 
Today is            ${todaysDate}.

The number of days you have been alive is ${totalDaysAlive}`);

let nextBirthday = new Date(userBirthday);
nextBirthday.setFullYear(todaysDate.getFullYear());

if (todaysDate > nextBirthday) {
    nextBirthday.setFullYear(todaysDate.getFullYear() + 1);
}
let daysToNextBD = Math.floor((nextBirthday - todaysDate) / (1000*60*60*24))
//Calculate difference between days
console.log(`Your have ${daysToNextBD} days till your next birthday on the ${nextBirthday}` );


// //activity four
// const playerOneMark = "X";
// const playerTwoMark = "O";
// const playerNoneMark= " ";

// let space1 = playerOneMark;
// let space2 = playerTwoMark;
// let space3 = playerNoneMark;
// let space4 = playerOneMark;
// let space5 = playerTwoMark;
// let space6 = playerNoneMark;
// let space7 = playerOneMark;
// let space8 = playerNoneMark;
// let space9 = playerTwoMark;

// const rowDivider = "-----------";

// console.log(` ${space1} | ${space2} | ${space3}` );
// console.log (`${rowDivider}`)
// console.log(` ${space4} | ${space5} | ${space6}` );
// console.log (`${rowDivider}`)
// console.log(` ${space7} | ${space8} | ${space9}` );

// console.log(space9.name);


console.log(Date.now());
console.log(new Date());