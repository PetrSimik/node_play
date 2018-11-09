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

console.log(hobbies.map(hobby => {
    return `hobby: ${hobby}`
}));
console.log(hobbies);