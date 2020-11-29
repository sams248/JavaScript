//////////////////////////////////////////////////////////////////////////
// Values and variables
/*
let js = 'amazing';
console.log(40 + 13 + 22 - 9);

console.log('Sam');

let firstName = "John";
console.log(firstName);

let PI = 3.14;

// Descriptive variable names
let myFirstJob = 'Programmer';
let mySecondJOb = 'Scientist';

console.log(myFirstJob);

// Assignment
// 1.Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions).
// 2. Log their values to the console.

let country = 'USA';
let continent = 'North America';
let population = '326';

console.log(country);
console.log(continent);
console.log(population);
*/

//////////////////////////////////////////////////////////////////////////
// Data types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof (javascriptIsFun));
console.log(typeof 32);
console.log(typeof 'Sam');

// Dynamic typing
javascriptIsFun = 'yes!';
console.log(typeof (javascriptIsFun));

let year;
console.log(year);
console.log(typeof year);

year = 1986;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// Assignment
// 1. Declare a variable called 'isIsland' and set its value according to your country.
// The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// Log the types of 'isIsland', 'population', 'country' and 'language' to the console

const isIsland = false;
let language;
const country = 'USA';
let population = 326;

console.log(typeof isIsland, typeof language, typeof country, typeof population);
*/

//////////////////////////////////////////////////////////////////////////
// let, const, var
/*
let age = 30;
age = 31;
console.log(age);

const birthYear = 1991; //immutable

var job = 'programmer';
job = 'teacher';
console.log(job);


// Assignment
// Set the value of 'language' to the language spoken where you live
// Think about which variables should be const variables (which values will never change, and which might change?).
// Then, change these variables to const. Try to change one of the changed variables now, and observe what happens
const language1 = 'Chinese';
// language1 = 'English'; // TypeError: Assignment to constant variable.
let language2 = 'Chinese';
language2 = 'English';
console.log(language2);
*/

//////////////////////////////////////////////////////////////////////////
// Basic operators
/*
// Math operators
const now = 2020;
const ageSam = now - 1988;
const ageSarah = now - 1982;
console.log(ageSam, ageSarah);

console.log(ageSam * 2, ageSam / 10, 2 ** 3);

const firstName = 'Jack';
const lastName = 'Daniels';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 7;
x *= 2;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageSam > ageSarah);

const isSarahFullAge = ageSarah >= 18;
console.log(isSarahFullAge);


// Assignment
// If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// Increase the population of your country by 1 and log the result to the console
// Finland has a population of 6 million. Does your country have more people than
// Finland?
// The average population of a country is 33 million people. Does your country
// have less people than the average country?
// Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const country = 'USA';
const continent = 'North America';
const language = 'English';
let population = 326000000;
let halfPopulation = population / 2;
console.log(halfPopulation);
population += 1;
halfPopulation = population / 2;
console.log(halfPopulation);
population -= 1;
console.log(population < 33000000);
const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language + '.';
console.log(description);
*/

//////////////////////////////////////////////////////////////////////////
// OPerator precedence
/*
const now = 2020;
const ageSam = now - 1991;
const ageSarah = now - 2008;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageSarah + ageSam) / 2;
console.log(ageSam, ageSarah);
console.log(averageAge);
*/

//////////////////////////////////////////////////////////////////////////
// Coding Challenge # 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


let [markMass, markHeight, johnMass, johnHeight] = [78, 1.69, 92, 1.95];
[markMass, markHeight, johnMass, johnHeight] = [95, 1.88, 85, 1.76];
let markBmi = markMass / (markHeight ** 2);
let johnBmi = johnMass / (johnHeight ** 2);
let markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi);
console.log(markHigherBMI);
*/

//////////////////////////////////////////////////////////////////////////
// Strings and Template Literals
/*
const firstName = 'Sam';
const job = 'scientist';
const birthYear = 1990;
const year = 2020;

const sam = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sam);

const samNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(samNew);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


// Assignment
// Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax
const country = 'USA';
const continent = 'North America';
const language = 'English';
let population = 326000000;
const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);
*/

//////////////////////////////////////////////////////////////////////////
// else, if statements
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can get a driving license....');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`)
}

const birthYear = 2010;
let century

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};

console.log(century)

// Assignment
// If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

const population = 13;

if (population > 33) {
    console.log(`My country's population is above average!`)
} else {
    console.log(`My country's population is ${33 - population} years below average!`)
}


//////////////////////////////////////////////////////////////////////////
// Coding Challenge # 2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI(28.3) is higher than John's (23.9)!"

let [markMass, markHeight, johnMass, johnHeight] = [78, 1.69, 92, 1.95];
[markMass, markHeight, johnMass, johnHeight] = [95, 1.88, 85, 1.76];
let markBmi = markMass / (markHeight ** 2);
let johnBmi = johnMass / (johnHeight ** 2);

if (markBmi > johnBmi) {
    console.log(`Mark's BMI ${(markBmi)} is higher than John's ${(johnBmi)}!`)
} else {
    console.log(`John's BMI ${(johnBmi)} is higher than Mark's ${(markBmi)}!`)
}
*/

//////////////////////////////////////////////////////////////////////////
// type conversion, type coercion
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number('Sam')); // NaN
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old!');
console.log('I am ' + '23' + ' years old!');
console.log('23' + '10' + 3);
console.log('23' + '10' - 3);
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);

// Assignment

// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; => 4
// '19' - '13' + '17'; => '617'
// '19' - '13' + 17; => 23
// '123' < 57; => false
// 5 + 6 + '4' + 9 - 4 - 2; => 1143
// 2. Execute the operations to check if you were right
*/

//////////////////////////////////////////////////////////////////////////
// Truthy and falsy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sam'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height;
if (height || height == 0) {
    console.log('Height is defined!')
} else {
    console.log('Height is undefined!')
}


//Assignment
// Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have ? ');
// If there is only 1 neighbour, log to the console 'Only 1 border!'(use loose equality == for now)
// Use an else -if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1.
// Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// Test the code with different values of 'numNeighbours', including 1 and 0.
// Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening ?
// Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.
// Reflect on why we should use the === operator and type conversion in this situation

let numNeighbours = Number(prompt('How many neighbour countries does your country have ?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
};
*/

//////////////////////////////////////////////////////////////////////////
// Equality operators
/*
const age = '18';
if (age === 18) console.log('You just became an adult! (strict)');
if (age == 18) console.log('You just became an adult! (loose)');


const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('Cool! 7 is also a cool number!');
} else {
    console.log('Number is not 7 or 23!');
}

if (favorite !== 23) console.log('Why not 23?');


// Assignment
// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
const country = 'Canada';
const language = 'English';
const population = 37.6;
const isIsland = true;

if (language === 'English' && population < 50 && isIsland) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria :(`)
};
*/

//////////////////////////////////////////////////////////////////////////
// Logical operators
/*
const hasDriversLicense = false;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// };

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive!');
};
*/

//////////////////////////////////////////////////////////////////////////
// Coding challenge 3
/*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Calculate the average score for each team, using the test data below
// Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
// Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const scoresDolphins = [96, 108, 89];
// const scoresKoalas = [88, 91, 110];

// const scoresDolphins = [97, 112, 101];
// const scoresKoalas = [109, 95, 123];

const scoresDolphins = [97, 112, 101];
const scoresKoalas = [109, 95, 106];

const averageScoreDolphons = (scoresDolphins[0] + scoresDolphins[1] + scoresDolphins[2]) / 3;
const averageScoreKoalas = (scoresKoalas[0] + scoresKoalas[1] + scoresKoalas[2]) / 3;
console.log(`Dolphons average score: ${averageScoreDolphons}`);
console.log(`Koalas average score: ${averageScoreKoalas}`);

const minRequiredAvgScore = 100;

if (averageScoreDolphons > averageScoreKoalas && averageScoreDolphons > minRequiredAvgScore) {
    console.log('Dolphons won the competition!');
} else if (averageScoreDolphons < averageScoreKoalas && averageScoreKoalas > minRequiredAvgScore) {
    console.log('Koalas won the competition!');
} else if (averageScoreDolphons === averageScoreKoalas && averageScoreKoalas > minRequiredAvgScore) {
    console.log('It was a draw!');
} else {
    console.log('There was no winner!')
}
*/

//////////////////////////////////////////////////////////////////////////
// The switch statement
/*
const day = 'Wednesday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup!');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos!');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day!');
}


if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup!');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos!');
} else if (day == 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Not a valid day!');
};


// Assignment
// Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

language = 'French';
switch (language) {
    case 'Chineese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers!');
        break;
    case 'English':
        console.log('3rd place!');
        break;
    case 'Hindi':
        console.log('number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
*/

//////////////////////////////////////////////////////////////////////////
// Expressions vs statements
/*
// Expressions
3 + 4
1991
true && false && !false

// Statement
if (23 > 10) {
    const s = '23 is bigger!';
}
*/

//////////////////////////////////////////////////////////////////////////
// The conditional (Ternary) operator
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!')

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}.`)


// Assignment
// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
const country = 'USA';
const population = 326;
population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`)
*/

//////////////////////////////////////////////////////////////////////////
// Coding challenge 4
/*
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// Data 1: Test for bill values 275, 40 and 430.

const bill = 430;
const tip = (bill > 50 && bill < 300) ? 15 : 20;
const total = bill + tip * bill / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`)
*/

//////////////////////////////////////////////////////////////////////////
