const hello = () => { console.log("Hello CodeNation") };
const shout = (times, fn) => {
    for (let i = 0; i < times; i++) {
        fn();
    }
};
shout(5, hello);


let nums = [2, 3, 5, 7, 9];
const multiplyBy3 = (x) => {
    return x * 3;
};
nums = nums.map(multiplyBy3);
console.log(nums);

let nums2 = [3, 6, 9, 12, 15]
nums2 = nums2.map(x => x * 3);
console.log(nums2);


const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
//swapped params for readability on calls
const doMaths = (num1) => {
    return (fn,num2) => {
        return fn(num1, num2);
    };
};

console.log(doMaths(5)(subtract,4));

console.log(doMaths(5)(add,4));

console.log(doMaths(8)(divide,4));
console.log(doMaths(8)(multiply,4));

console.log(doMaths(8)(multiplyBy3));

const kvArray = [
    { key: 1, axe: 2, value: 10 },
    { key: 2, axe: 2, value: 20 },
    { key: 3, axe: 2, value: 30 },
];

//for each index {} = deconstruct object into vars key, value
//return object
//assuming [] is dynamically named var
const reformattedArray = kvArray.map(({ key, value }) => ({ ["num" + key]: value }));
console.log(reformattedArray)

