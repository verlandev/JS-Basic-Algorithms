// 1.1--------------

const character = {
    name:"Jack Sparrow", 
    age:25
};

// 1.2--------------

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log('Soy ' + firstName + ' ' + lastName + ", tengo " + age + " años y me gustan los lobos.");

// 1.3---------------
const toy1 = {name: "Buss myYear", price: 19};
const toy2 = {name: "Rallo mcKing", price: 29};
console.log(toy1.price + toy2.price);

// 1.4 ---------------

let globalBasePrice = 25000;
const car1 = {
    name: 'BMW m&m', 
    basePrice: 50000, 
    finalPrice: 60000
};


const car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000
};

console.log((globalBasePrice + car1.finalPrice), (globalBasePrice + car2.finalPrice))// nos da 85 000 y 105 000 

