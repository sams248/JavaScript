'use strict';
///////////////////////////////////////////////
// Scoping in practice
/*
function calcAge(birthYear) {
  const age = 2020 - birthYear;
  console.log(`${firstName} inside calcAge function.`);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating new variable with the same name as outer scope's variable
      const firstName = 'Bob';

      // Reassigning outer scope's variable
      output = 'New output!';

      var millenial = true;

      const str = `Oh, and you are a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // str not accessible because const is block scoped.
    // add(2, 3) not accessible because funstion is block scoped in strict mode.
    console.log(millenial); // Accessible because var is function scoped
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Sam';
calcAge(1992);
*/

///////////////////////////////////////////////
// Hoisting and TDZ in practice
/*
// Hoisting with variables
console.log(me); // undefined
// console.log(job); Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Sam';
let job = 'developer';
const year = 1991;

// Hoisting with functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addExprVar(2,3)); // Uncaught TypeError: addExprVar is not a function

function addDecl(a, b) {
    return a + b
}

const addExpr = function(a, b) {
    return a + b
}

const addArrow = (a, b) => a + b

var addExprVar = function(a, b) {
    return a + b
}

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // since numProducts is undefined and undefined (just like 0) is falsy, we delete shoppingCaert by mistake!

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
const y = 2;
let z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

///////////////////////////////////////////////
// this keyword in practice
/*
console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(this); // undefined (strict mode)
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2020 - birthYear);
  console.log(this); // window object, lexical this keyword (from parent scope)
};

calcAgeArrow(1991);

const sam = {
  year: 1991,
  calcAge: function () {
    console.log(this); // sam object (the owner)
    console.log(2020 - this.year)
  },
};

sam.calcAge();

const matilda = {
    year: 2017
}

// method borrowing
matilda.calcAge = sam.calcAge;
matilda.calcAge();

const f = sam.calcAge;
console.log(f); // undefined
// f();
*/

///////////////////////////////////////////////
// regular vs arrow functions
/*
const sam = {
  firstName: 'Sam',
  year: 1991,
  calcAge: function () {
    console.log(this); // sam object (the owner)
    console.log(2020 - this.year);

    // Solution 1 - pre-ES6
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this); // undefined
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this); 
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}!`), // undefined
};

sam.greet();
sam.calcAge();

// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments)
    return a + b
};

addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b
}

addArrow(2, 4); // uncaught ReferenceError: arguments is not defined
*/

///////////////////////////////////////////////
// primitives vs. objects
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Sam',
    age: 30
}

const friend = me;
friend.age = 27;
console.log('Friend: ',friend);
console.log('Me: ', me);
*/

///////////////////////////////////////////////
// primitives vs. objects in practive
/*
// Primitive types
let lastName = 'Smith';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 27,
};

// Reference types
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
