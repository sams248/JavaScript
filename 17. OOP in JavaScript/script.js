'use strict';

///////////////////////////////////////////////////
// Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const sam = new Person('Sam', 1988);
console.log(sam);

const james = new Person('James', 1976);
console.log(james);

console.log(sam instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

console.log(Person.prototype);

sam.calcAge();
james.calcAge();

console.log(sam.__proto__);

console.log(Person.prototype === sam.__proto__);

console.log(Person.prototype.isPrototypeOf(sam));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(sam.species, james.species);

console.log(sam.hasOwnProperty('firstName'));
console.log(sam.hasOwnProperty('species'));

// Prototypal Inheritance on Built-In Objects
console.log(sam.__proto__);
console.log(sam.__proto__.__proto__);
console.log(sam.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 7, 9, 1, 2, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__);

// not a good practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);
*/

///////////////////////////////////////////////////
// Coding challenge 1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const bmw = new Car('BMW', 120);
console.log(bmw);

const mercedes = new Car('Mercedes', 95);
console.log(mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
console.log(bmw);

mercedes.brake();
console.log(mercedes);
*/

///////////////////////////////////////////////////
// ES6 classes
/*
// class expression
// const PersonCl = class {}

// class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method

  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Jackson', 1997);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__);
console.log(jessica.__proto__ == PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}!`);
};

jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

// Setters and getters
const account = {
  owner: 'sam',
  movements: [200, 350, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log(jessica.age);

console.log(jessica);

console.log(jessica.fullName);

// const james = new PersonCl('james', 19);

PersonCl.hey();
*/

///////////////////////////////////////////////////
// Object.create()
/*
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven, (name = 'Steven');
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

console.log(ford.speedUS);
ford.accelerate();
console.log(ford);
ford.brake();
ford.brake();
console.log(ford);
ford.speedUS = 50;
console.log(ford);
*/

///////////////////////////////////////////////////
// Inheritence between classes using constructor functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, major) {
  Person.call(this, firstName, birthYear);
  this.major = major;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.major}.`);
};
const mike = new Student('Mike', 2002, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed *= 1.2;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`
  );
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.brake();
tesla.brake();
console.log(tesla);
*/

///////////////////////////////////////////////////
// Inheritence between classes using ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method

  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, major) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.major = major;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.major}.`);
  }

  calcAge() {
    console.log(
      `I am ${
        2021 - this.birthYear
      } years onld, but as a student I feel more like ${
        2021 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Marhta Jones', 2002, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

///////////////////////////////////////////////////
// Inheritence between classes using Object.create()
/*
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, major) {
  PersonProto.init.call(this, firstName, birthYear);
  this.major = major;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.major}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

///////////////////////////////////////////////////
// Another class example
/*
class Account {
  // Pub;ic fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;

    console.log(`Thanks for openning an account, ${owner}!`);
  }

  // Public methods
  // Public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Private methods
  // _approveLoan(val) (not implemented in the browsers yet)
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
      return this;
    }
  }

  static helper() {
    console.log('Helper!');
  }
}

const acc1 = new Account('Sam', 'USD', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);

console.log(acc1.getMovements());

Account.helper();

// Chaining
acc1.deposit(300).deposit(100).withdraw(35).requestLoan(1000).withdraw(2000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed *= 1.2;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate();
rivian.accelerate();
rivian.chargeBattery(90);
rivian.brake();
console.log(rivian);

console.log(rivian.speedUS);
*/