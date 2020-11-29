'use strict';
/////////////////////////////////////////////////////////////////////////////
// Activating strict mode
/*
'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log('I can drive:D');

const interface = 'Audio';
const private = 554;
*/

/////////////////////////////////////////////////////////////////////////////
// Functions
/*
function logger() {
    console.log('My name is Sam');
}

// calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Assignment
// Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital is ${capitalCity}.`
}

const usa = describeCountry('USA', 326, 'Washington D.C.');
const spain = describeCountry('Spain', 47, 'Madrid');
const mexico = describeCountry('Spain', 162, 'Mexico City');

console.log(USA);
console.log(spain);
console.log(mexico);
*/


/////////////////////////////////////////////////////////////////////////////
// Function declaration and function expressions
/*
// Function declaration
const age0 = calcAge1(1988);

function calcAge1(birthYear) {
    return 2020 - birthYear;
}

const age1 = calcAge1(1988);

// Function expression
const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}

const age2 = calcAge2(1988);

console.log(age0, age1, age2);

// Assignment
// The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100 Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
//  Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

const usaPopulationPercentage1 = percentageOfWorld1(326);
const spainPopulationPercentage1 = percentageOfWorld1(47);
const mexicoPopulationPercentage1 = percentageOfWorld1(162);

console.log(usaPopulationPercentage1, spainPopulationPercentage1, mexicoPopulationPercentage1);

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

const usaPopulationPercentage2 = percentageOfWorld2(326);
const spainPopulationPercentage2 = percentageOfWorld2(47);
const mexicoPopulationPercentage2 = percentageOfWorld2(162);

console.log(usaPopulationPercentage2, spainPopulationPercentage2, mexicoPopulationPercentage2);
*/

/////////////////////////////////////////////////////////////////////////////
// Arrow function
/*
// Arrow function
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1988);
console.log(age3)

const yearsUntilRequirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`
}

console.log(yearsUntilRequirement(1991, 'Sam'));
console.log(yearsUntilRequirement(1980, 'Tom'));


//Assignment
//  Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3';

const percentageOfWorld3 = population => {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

const usaPopulationPercentage3 = percentageOfWorld3(326);
const spainPopulationPercentage3 = percentageOfWorld3(47);
const mexicoPopulationPercentage3 = percentageOfWorld3(162);

console.log(usaPopulationPercentage3, spainPopulationPercentage3, mexicoPopulationPercentage3);
*/

/////////////////////////////////////////////////////////////////////////////
// Functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice
}

console.log(fruitProcessor(2, 3));

// Assignment
// Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// Call 'describePopulation' with data for 3 countries of your choice

const percentageOfWorld = population => {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the rorld!`;
}

console.log(describePopulation('USA', 326))
*/

/////////////////////////////////////////////////////////////////////////////
// Reviewing functions
/*
const calAge = function (birthYear) {
    return 2020 - birthYear;
}

const yearsUntilRequirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`)
        return retirement
    } else {
        return -1
    }
}

console.log(yearsUntilRequirement(1990, 'John'));
console.log(yearsUntilRequirement(1950, 'Mike'));
*/

/////////////////////////////////////////////////////////////////////////////
// Coding challenge 1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Create an arrow function 'calcAverage' to calculate the average of 3 scores Use the function to calculate the average for both teams
Create a function 'checkWinner' that takes the average score of each team as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
Ignore draws this time
Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)

checkWinner('Dolphins', 'Koalas', scoreDolphins, scoreKoalas);

function checkWinner(firstTeamName, secondTeamName, firstTeamAverage, secondTeamAverage) {
    if (firstTeamAverage >= 2 * secondTeamAverage) {
        console.log(`${firstTeamName} win (${firstTeamAverage} vs. ${secondTeamAverage})`)
    } else if (secondTeamAverage >= 2 * firstTeamAverage) {
        console.log(`${secondTeamName} win (${secondTeamAverage} vs. ${firstTeamAverage})`)
    } else {
        console.log('There was no winner!')
    }
}


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas)

checkWinner('Dolphins', 'Koalas', scoreDolphins, scoreKoalas);
*/


/////////////////////////////////////////////////////////////////////////////
// Introduction to arrays
/*
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends)

const y = new Array(1992, 1982, 2020);

console.log(friends[0])

console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends)

// friends = ['Bob', 'Alice'];

const sam = ['Sam', 2020 - 1998, true, friends];
console.log(sam);

// Excercise
const calcAge = function (birthYear) {
    return 2020 - birthYear
}
const years = [1990, 1967, 2010, 2018];

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)


// Assignment
// Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// Log to the console whether the array has 4 elements or not (true or false)
// Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

function percentageOfWorld(population) {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

const populations = [126, 88, 34, 12];
console.log(populations.length === 4);

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[populations.length - 1])];
console.log(percentages);
*/


/////////////////////////////////////////////////////////////////////////////
// Basic array operations 
/*
const friends = ['Micheal', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(newLength)
console.log(friends)

friends.unshift('John');
console.log(friends)

// Remove elemets
const popped = friends.pop();
console.log(popped)
console.log(friends)

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'))

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(21);
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven!')
}

// Assignment
// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array.
// If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbors = ['Canada', 'Mexico'];
neighbors.push('Utopia')
neighbors.pop();

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country :D')
}

const mexicoIndex = neighbors.indexOf('Mexico');
neighbors[mexicoIndex] = "Repulic of Mexico"
console.log(neighbors)
*/

/////////////////////////////////////////////////////////////////////////////
// Coding challenge 2

// Steven is still building his tip calculator, using the same rules as before: Tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20 %.Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above(you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100 
// And now let's use arrays! So create an array 'bills' containing the test data below. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

/*
function calcTip(bill) {
    const tipPercentage = (bill > 50 && bill < 300) ? 15 : 20;
    return tipPercentage * bill / 100;
}

console.log(calcTip(100))

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)
*/


/////////////////////////////////////////////////////////////////////////////// 
// Introduction to objects
/*
const sam = {
    firstName: 'Sam',
    lastName: 'Smith',
    age: 2020 - 1988,
    job: 'Scientist',
    frinds: ['Bob', 'Peter', 'Steven']
}

// Assignment
// Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

const myCountry = {
    country: 'USA',
    population: 328,
    language: 'English',
    neighbors: ['Mexico', 'Canada']
}
*/

/////////////////////////////////////////////////////////////////////////////// 
// Dot vs Bracket notation
/*
const sam = {
    firstName: 'Sam',
    lastName: 'Smith',
    age: 2020 - 1988,
    job: 'Scientist',
    frinds: ['Bob', 'Peter', 'Steven']
}

console.log(sam)

console.log(sam.lastName)
console.log(sam['lastName'])

const nameKey = 'Name';

console.log(sam['first' + nameKey]);
console.log(sam['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Sam? Choose between firstName, lastName, age, job, and firends');
console.log(interestedIn);

console.log(sam.interestedIn) //won't work
console.log(sam[interestedIn])

if (sam[interestedIn]) {
    console.log(sam[interestedIn])
} else {
    console.log('Wrong request! What do you want to know about Sam? Choose between firstName, lastName, age, job, and firends')
}

sam.location = 'USA';
console.log(sam)

console.log(`${sam.firstName} has ${sam.frinds.length} firiends, and his best friend is called ${sam.frinds[0]}.`)


// Assignment
// Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

const myCountry = {
    country: 'USA',
    population: 328,
    language: 'English',
    neighbors: ['Mexico', 'Canada'],
    capital: 'Washington D.C.'
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`)

myCountry.population += 2;
myCountry.population -= 2;
*/

/////////////////////////////////////////////////////////////////////////////// 
// Object methods
/*
const sam = {
    firstName: 'Sam',
    lastName: 'Smith',
    birthYear: 1988,
    job: 'Scientist',
    frinds: ['Bob', 'Peter', 'Steven'],
    hasDriversLicence: true,

    // calcAge: function (birthYear) {
    //     return 2020 - birthYear
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2020 - this.birthYear
    // }

    calcAge: function () {
        // console.log(this)
        this.age = 2020 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers license!`)
    }
};

console.log(sam.calcAge())
console.log(sam.age)
sam.getSummary()


// Assignment
// Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// Call the 'describe' method
// Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

const myCountry = {
    country: 'USA',
    population: 328,
    language: 'English',
    neighbors: ['Mexico', 'Canada'],
    capital: 'Washington D.C.',
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`)
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0;
        return this.isIsland
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

/////////////////////////////////////////////////////////////////////////////// 
// Coding challenge 3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
//     / (height * height)(mass in kg and height in meter)
// Your tasks:
// 1.2.3.For each of them, create an object with properties for their full name, mass, and
// height(Mark Miller and John Smith)
// Create a 'calcBMI' method on each object to calculate the BMI(the same
// method on both objects).Store the BMI value to a property, and also return it
// from the method
// Log to the console who has the higher BMI, together with the full name and the
// respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
// tall.

/*
const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
} else {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
}
*/

/////////////////////////////////////////////////////////////////////////////// 
// Iteration: The for Loop
/*
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

// Assignment
// There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let count = 1; count <= 50; count++) {
    console.log(`Voter ${count} is voting!`)
}
*/

/////////////////////////////////////////////////////////////////////////////// 
// Looping Arrays, breaking and continuing
/*
const sam = ['Sam', 'Smith', 2020 - 1998, 'Scientist', ['Jack', 'Pat', 'Matt']];

const samTypes = [];

for (let i = 0; i < sam.length; i++) {
    console.log(sam[i], typeof sam[i]);

    // samTypes[i] = typeof sam[i]
    samTypes.push(typeof sam[i])
}

console.log(samTypes)

const years = [1991, 2007, 1978, 2002];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2020 - years[i]);
}

// continue and break
console.log('-------Only strings---------------')
for (let i = 0; i < sam.length; i++) {
    if (typeof sam[i] !== 'string') continue;
    console.log(sam[i]);
}

console.log('-------Break with number---------------')
for (let i = 0; i < sam.length; i++) {
    if (typeof sam[i] === 'number') break;
    console.log(sam[i]);
}

// Assignment
// Let's bring back the 'populations' array from a previous assignment
// Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier.

const populations = [126, 88, 34, 12];

function percentageOfWorld(population) {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

const percentages = [];

for (let i = 0; i < populations.length; i++) {
    percentages[i] = percentageOfWorld(populations[i]);
}

console.log(percentages)
*/

/////////////////////////////////////////////////////////////////////////////// 
// Looping backwards and loops in loops
/*
const sam = [
    'Sam',
    'Smith',
    2020 - 1998,
    'Scientist',
    ['Jack', 'Pat', 'Matt']
];

for (let i = sam.length; i >= 0; i--) {
    console.log(i, sam[i]);
}

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`Starting excercise ${excercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise: ${excercise}: Lifting weight repetition ${rep}`);
    }
}


// Assignment
// Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];


for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbours[i][j]}`)
    }
}
*/

/////////////////////////////////////////////////////////////////////////////// 
// The while lopp
/*
let rep = 1
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) console.log('Loop is about to end...')
}

// Assignment
// Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')

const populations = [126, 88, 34, 12];

function percentageOfWorld(population) {
    const worldPopulation = 7900;
    return 100 * population / worldPopulation;
}

const percentages = [];

let i = 0;
while (i < populations.length) {
    percentages[i] = percentageOfWorld(populations[i]);
    i++
}

console.log(percentages)
*/

/////////////////////////////////////////////////////////////////////////////// 
// Coding Challenge 4
/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array.
 */
/*
function calcTip(bill) {
    const tipPercentage = (bill > 50 && bill < 300) ? 15 : 20;
    return tipPercentage * bill / 100;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(calcAverage(totals))
*/
