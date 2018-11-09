//object = reference types = can modify even if const
const person = {
    name: 'Petr',
    age: 22, 
    greet() { console.log (`Hi, I am ${this.name}`)}
};

person.greet();

const hobbies = ['sports', 'cookin',1, true,];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

hobbies.push('programming'); //add new item to object
console.log(hobbies);