'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 0, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////////////////
// The spread operator
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr, [1, 2, arr]);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu] // shallow copy

// Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const me = 'Sam';
const letters = [...me, ' ', 'S.'];
console.log(letters);
console.log(...letters);
// console.log(`${...me} Smith`); // SyntaxError: Unexpected token '...'

// Real world example
const ingredients = [prompt("Let\s make pasta! Ingredients 1?"), prompt("Ingredients 2?"), prompt("Ingredients 3?")];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Sam'};
console.log(newRestaurant);

const restaurantCpoy = {...restaurant};
restaurantCpoy.name = "Sam's Kitchen";
console.log(restaurant.name);
console.log(restaurantCpoy.name);
/*
/////////////////////////////////////////////////
// Destructuring objects
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutatting variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, obj.a);

({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri : {open: o, close: c}} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: '88 Main street',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: '22 College Ave.',
  starterIndex: 2
});
*/
/////////////////////////////////////////////////
// Destructuring arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const [first, , third] = restaurant.categories;
console.log(first, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/////////////////////////////////////////////////
// Rest pattern and parameters
/*
// 1. Destructuring

// Spread, because on the right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(2, 3, 4, 5));
console.log(add(1, 2, 4, 5, 6, 11, 5));

const x = [23, 5, 7];
console.log(...x);
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'green pepper', 'ham', 'olive');
restaurant.orderPizza('mushrooms');
*/

/////////////////////////////////////////////////
// Short circuiting
/*
console.log('-------OR-------');
console.log(3 || 'Sam');
console.log('' || 'Sam');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 8;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-------AND-------');
console.log(0 && 'Sam');
console.log(8 && 'Sam');

console.log('Hello' && 23 && null && 'Sam');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'pepperoni');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'pepperoni');
*/

/////////////////////////////////////////////////
// Nullish Coalescing operator
/*
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/////////////////////////////////////////////////
// Coding challenge 1
/*
We're building a football betting app!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your1.2.3.4.5.6.7.tasks:
Create one player array for each team (variables 'players1' and
'players2')
The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
Create an array 'allPlayers' containing all players of both teams (22
players)
During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    for (let i = 0; i < playerNames.length; i++) {
      console.log(`Goal ${i} scored by ${playerNames[i]}`);
    }
    console.log(`Total number of goals: ${playerNames.length}`);
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(draw);

// 6
game.printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win!');
team2 < team1 && console.log('Team 2 is more likely to win!');
*/

/////////////////////////////////////////////////
// Looping arrays: the for-of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}
console.log([...menu.entries()]);
*/

/////////////////////////////////////////////////
// Optional chaining
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`); // don't worry about the logged message for closed days:)
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRice?.(0,1) ?? 'Method does not exist');

// Array 
const users = [
  {name: 'Sam', email: 'hello@sam.com'}
];

console.log(users[0]?.name ?? 'users array is empty');
*/

/////////////////////////////////////////////////
// Looping objects: Object keys, values, and entries
/*
// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
};

console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// OEntrie object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}
*/

/////////////////////////////////////////////////
// Coding challenge 2
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.
Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
Use a loop to calculate the average odd and log it to the console.
Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw").
Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    for (let i = 0; i < playerNames.length; i++) {
      console.log(`Goal ${i} scored by ${playerNames[i]}`);
    }
    console.log(`Total number of goals: ${playerNames.length}`);
  },
};


for (const [index, scorer] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${scorer}`);
};

let oddSum = 0;
for (const odd of Object.values(game.odds)) {
  oddSum += odd;
}
const averageOdd = oddSum / Object.keys(game.odds).length
console.log(`Average odd: ${averageOdd}`);

for (const [outcome, odd] of Object.entries(game.odds)) {
  if (Object.keys(game).includes(outcome)) {
    console.log(`Odd of victory ${game[outcome]}: ${odd}`)
  } else {
    console.log(`Odd of draw: ${odd}`)
  }
}

let scorers = {};
for (const scorer of game.scored.values()) {
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
}

console.log(scorers);
*/

/////////////////////////////////////////////////
// Sets
/*
console.log(new Set());

console.log(new Set('Sam'));

const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pizza']);
console.log(ordersSet);

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Steak'));
ordersSet.add('Garlic bread');
ordersSet.add('Garlic bread');

console.log(ordersSet);

ordersSet.delete('Risotto');

console.log(ordersSet);

// ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('samsmith').size);
*/

/////////////////////////////////////////////////
// Maps
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are close!');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C++'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// Convert map to array 
console.log([...question]);

console.log(question.keys());
console.log(question.values());
console.log(question.entries());
*/

/////////////////////////////////////////////////
// Coding Challenge 3
/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17: ⚽ GOAL
*/
/*
const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);

// 1
let events0 = new Array();
for (const e of gameEvents.values()) {
  if (!events0.includes(e)) events0.push(e);
};
console.log(events0);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

// 4
for (const [key, value] of gameEvents.entries()) {
  const half = key < 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${key}: ${value}`);
};
*/

/////////////////////////////////////////////////
// Working with Strings
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat:(');
  else console.log(`You got lucky!`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(typeof 'Sam');
console.log(typeof new String('Sam'));
console.log(typeof new String('Sam').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'pAtrIck';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@sam.io';
const loginEmail = ' Hello@SAM.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';
console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Boolean
const newplane = 'Airbus A320neo';
console.log(newplane.includes('A320'));
console.log(newplane.includes('Boeing'));
console.log(newplane.startsWith('Airb'));

if (newplane.startsWith('Airb') && newplane.endsWith('neo')) {
  console.log('Part of the new Airbus family!');
}

// Practice excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Sam Smith'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Sam'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2364823648723));

// Repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line  ${'✈'.repeat(n)}`);
};
planesInLine(5);
/*


/////////////////////////////////////////////////
// Coding challenge 4
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log)
underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  let maxLength = 0;
  for (const r of rows) {
    if (r.length >= maxLength) maxLength = r.length;
  }

  for (const [index, row] of rows.entries()) {
    const [firtWord, secondWord] = row.toLowerCase().trim().split('_');
    const finalWord = `${firtWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;

    console.log(finalWord.padEnd(maxLength + 5) + '✅'.repeat(index + 1));
  }
});
*/
