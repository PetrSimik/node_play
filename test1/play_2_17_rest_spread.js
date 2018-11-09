//rest and spread operator
// impl pattern add copy of existitng + add some new. (do not add existing)

const hobbies = ['sports', 'cookin',1, true,];
// const copiedArray = hobbies.slice(); //option 1 to copy array slice no param
const copiedArray = [...hobbies]; // ... spread operator ; same as +- ; take object after operator and pull out all properties away
console.log(copiedArray);

const person = {
    name: 'Petr',
    age: 22, 
    greet() { console.log (`Hi, I am ${this.name}`)}
};

//the same with object = used to pull objects out of array
const copiedPerson = {...person};
console.log(copiedPerson);

//create array (wrong)
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3]
// }

// ... correct variable number of  .; mergge multiple object to array 
const toArray = (...args) => {
    return args
}

console.log(toArray(1,2,3,4))