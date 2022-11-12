
//todo:: 
const dataChecker =(string,rank) => {
    if (!Number.isInteger(rank)) {
        return "rank needs to be numerical"
    }

    if (string=="codenation" && rank === 1) {
       return `${string} is rank ${rank}.`;
    } else if (string==="codenation") {
        return `${string} is not rank One!!! its only at position ${rank}.`;
    } else {
        return "Codenation isn't even ranked!";
    }
}

console.log (dataChecker("codenation",1))
console.log (dataChecker("codenation",true))
console.log (dataChecker("codenation",2))
console.log (dataChecker("codecountry",1))