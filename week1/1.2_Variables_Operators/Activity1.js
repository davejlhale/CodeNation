let myName = "Dave";
let age ="47";
let favColour="Red";

console.log(`My name is ${myName}. I am ${age} and love the colour ${favColour}.`);


myName ="Dave";
age = "48";
favColour="Green";


console.log(`I also go by ${myName} and will be ${age} in July! A month where the trees are ${favColour}.`);




 function extractMiddle(s) {

        let position;
        let length;

        if(s.length % 2 == 1) {
            position = s.length / 2;
            length = 1;
        } else {
            position = s.length / 2 - 1;
            length = 2;
        }

        return s.substring(position, position + length)
    }

    console.log(extractMiddle("handbandanna"));



string = "(xxx) xxx-xxxx"

string = string.replace(/(x)/i3,"2");

console.log(string)
