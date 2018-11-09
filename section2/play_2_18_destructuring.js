//object destructuring
const person = {
    name: 'Petr',
    age: 22, 
    greet() { console.log (`Hi, I am ${this.name}`)}
};

//normal way
// const printName = (personData) => {
//     console.log(personData.name);
// }

// => destruct 
//
//in this function we use object destruct {} in arg list 
const printName = ({name}) => {
    console.log(name);
}
printName(person);

//destructuring name age from person object
const { name, age } = person;
console.log(name, age);

//destructuring of object work also on arrays
const hobbies = ['sports', 'cookin',1, true,];
const [hoby1, hoby2] = hobbies;
console.log(hoby1, hoby2);