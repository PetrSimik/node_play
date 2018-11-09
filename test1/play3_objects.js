const person = {
    name: 'Petr',
    age: 22, 
    // greet: () => { console.log (`Hi, I am ${this.name}`)}
    //this refer to global scope.  proto musim odstranit : =>
    greet() { console.log (`Hi, I am ${this.name}`)}
}


// console.log(person);
person.greet();