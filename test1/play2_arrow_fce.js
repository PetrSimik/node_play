const name = 'test';
let age = 22;

// function summarizeUser(name, age) {
//     return `name is ${name} and age is ${age}`
// }
const summarizeUser =  (name, age) => {
    return `name is ${name} and age is ${age}`
}
console.log(summarizeUser(name,age))


// const add = (a,b) => { return a+b }
const add = (a,b) => a+b; 
console.log(add(1,2));



// const addOne = (a) => a+1;
const addOne = a => a+1;
console.log(addOne(4));


const addRandom = () => 1+2;
console.log(addRandom());