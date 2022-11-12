let breakfast = "Jam and Toast";
let lunch = "Ham Sandwhich";
let dinner = "Fish & Chips"

let today = [breakfast,lunch,dinner];

console.log (
    `I had ${breakfast} for breakfast.
I had ${lunch} for lunch.
I had ${dinner} for diner.`)

breakfast = "Coco Pops";
lunch = "Tomato soup";
dinner = "Bangers & Mash"

let tomorrow = [breakfast,lunch,dinner];

console.log (
    `I had ${breakfast} for breakfast.
I had ${lunch} for lunch.
I had ${dinner} for diner.`)


console.table( today);
console.table( tomorrow);

function daysmeals(breakfast,lunch,dinner) {
this.breakfast=breakfast;
this.lunch=lunch;
this.dinner=dinner;
}

const weeksMeals = {}
weeksMeals.monday = new daysmeals(today[0],today[1],today[2]);
weeksMeals.today = new daysmeals("Toast","Ham sandwich","Bangers & Mash");
weeksMeals.tomorrow = new daysmeals("Cereal","Soup","Fish&Chips");





