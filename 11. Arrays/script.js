"use strict";

/////////////////////////////////////////////////
// Simple Array methods
/*
let arr = ["a", "b", "c", "d", "e"];

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// Splice method
console.log(arr.splice(-1));
console.log(arr);

// Reverese method

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// Concat method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join method
console.log(letters.join("--"));
*/

/////////////////////////////////////////////////
// Looping arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log("--------- forEach ----------");
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

/////////////////////////////////////////////////
// forEach with maps and sets
/*
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(set);
  console.log(`${_}: ${value}`);
});
*/

/////////////////////////////////////////////////
// Coidng challenge 1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice();
  const dogsJuliaCatsRemoved = dogsJuliaCopy.splice(1, 2);

  const allDogs = dogsJuliaCatsRemoved.concat(dogsKate);
  allDogs.forEach((dogAge, index) => {
    const str =
      dogAge > 3
        ? `an adult, and is ${dogAge} years old.`
        : "still a little puppy.";
    console.log(`Dog number ${index + 1} is ${str}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/////////////////////////////////////////////////
// The map method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}.`
);

console.log(movementsDescriptions);
*/

/////////////////////////////////////////////////
// The filter method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdrawals = movements.filter((mov) => mov < 0);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(movements);
console.log(withdrawals);
console.log(deposits);
console.log(depositsFor);
*/

/////////////////////////////////////////////////
// The reduce method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator is like a snowball
const balance = movements.reduce((acc, cur, index, arr) => {
  console.log(`Iteration ${index}: ${acc}`);
  return cur + acc;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, cur) => Math.max(acc, cur), movements[0]);
console.log(max);
*/

/////////////////////////////////////////////////
//  Coding challenge 2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = function (dogAges) {
  const dogHumanAges = dogAges.map((age) =>
    age <= 2 ? 2 * age : 16 + age * 4
  );
  const adultDogAges = dogHumanAges.filter((age) => age >= 18);
  const averageAges = adultDogAges.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  return averageAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/////////////////////////////////////////////////
//  Coding challenge 3
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
Data 1: [5, 2, 4, 1, 15, 8, 3]
Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = (dogAges) =>
  dogAges
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/////////////////////////////////////////////////
// The find method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

let firstWithdrawalWithFor;
for (const mov of movements) {
  if (mov < 0) {
    firstWithdrawalWithFor = mov;
    break;
  }
}
console.log(firstWithdrawalWithFor);
*/

/////////////////////////////////////////////////
// some and every
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
console.log(movements.includes(450));

// Condition
// some
console.log(movements.some((mov) => mov === 450));

const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit);

// every
console.log(movements.every((mov) => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/////////////////////////////////////////////////
// flat and flatMap
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const account1 = {
  owner: "Sam Smith",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};

const accounts = [account1, account2, account3];

// flat
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
*/

/////////////////////////////////////////////////
//  Sorting Arrays
/*
// Strings
const owners = ["Sam", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// return < 0, a, b (keep order)
// return > 0, b, a (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);
*/

/////////////////////////////////////////////////
// Creating annf filling arrays
/*
const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays and fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
console.log(x);
x.fill(2);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
*/

/////////////////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion.
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order
*/
/*
// Test data
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

console.log("Part 1---------------------------");
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);
console.log("Part 2");
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog);
console.log(
  `Sarah's dog is${
    sarahDog.curFood >= sarahDog.recommendedFood ? "" : "not"
  } eating enough food.`
);
console.log("Part 3");
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);
console.log("Part 4");
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
console.log("Part 5");
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
console.log("Part 6");
console.log(
  dogs.some(
    (dog) =>
      dog.curFood >= 0.9 * dog.recommendedFood &&
      dog.curFood <= 1.1 * dog.recommendedFood
  )
);
console.log("Part 7");
console.log(
  dogs.filter(
    (dog) =>
      dog.curFood >= 0.9 * dog.recommendedFood &&
      dog.curFood <= 1.1 * dog.recommendedFood
  )
);
console.log("Part 8");
console.log(
  dogs.slice().sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood)
);
*/