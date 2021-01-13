"use strict";

///////////////////////////////////////////////////
// Converting and checking numbers
/*
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Convert string to number
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('pt30', 10)); // has to start with a number

console.log(Number.parseFloat(' 3.50re ', 10));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(25 / 0)); 

// Checking if a value is a number
console.log(Number.isFinite(25)); 
console.log(Number.isFinite(25 / 0)); 
console.log(Number.isFinite('25')); 
console.log(Number.isFinite(+'20X'));

console.log(Number.isInteger(12)); // true
console.log(Number.isInteger(12.0)); // true
*/

///////////////////////////////////////////////////
// Math and rounding
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23pn", 11, 2)); // doesn not work

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.random() * 6 + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(4, 8));

// Rounding
console.log(Math.trunc(23.9));
console.log(Math.round(23.3));
console.log(Math.ceil(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.9));
console.log(Math.floor(-23.9));

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/

///////////////////////////////////////////////////
// The remainder operator
/*
console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(9));
*/

///////////////////////////////////////////////////
// Working with BigInt
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(98274983749287349872349874234);
console.log(98274983749287349872349874234n);
console.log(BigInt(982749837492873));

const hugeNum = 98274983749287349872349874234n;
const num = 33;
// console.log(num * hugeNum); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(BigInt(num) * hugeNum);

// Exceptions
console.log(20n === 20); // false
console.log(typeof 20n);
console.log(20n === "20");

// Divisions
console.log(10n / 3n);
console.log(10 / 3);
*/

///////////////////////////////////////////////////
// Creating dates
/*
// Create a data
const now = new Date();
console.log(now);

console.log(new Date("Jan 08 2021 19:15:25 GMT"));
console.log(new Date("December 24, 2020"));

console.log(new Date(2021, 10, 19, 15, 23, 5)); // month is zero-based
console.log(new Date(2021, 10, 31)); // JS auto corrects the dates

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // timestamp of 3 days later!

// Working with dates
const future = new Date(2021, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(1637353385000));

console.log(Date.now());

future.setFullYear(2040);
*/

///////////////////////////////////////////////////
// Operations with Dates
/*
const future = new Date(2021, 10, 19, 15, 23, 5);
console.log(future);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2025, 3, 4), new Date(2025, 3, 14));
console.log(days1);
*/

///////////////////////////////////////////////////
// Internationalization
/*
// Internationalizing dates
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  weekday: "short",
};
const locale = navigator.language;

console.log(new Intl.DateTimeFormat(locale, options).format(now));

// Internationalizing numbers
const num = 388879.88;

const optionsNum = {
  style: "unit", //"percent" or "currency"
  unit: "mile-per-hour", //"celsius"
  currency: "EUR", // not determined by the locale, should be specified if style is currency currency
  useGrouping: false,
};

console.log(
  "US:      ",
  new Intl.NumberFormat("en-US", optionsNum).format(num)
);
console.log(
  "Germany: ",
  new Intl.NumberFormat("de-DE", optionsNum).format(num)
);
console.log(
  "Iran:    ",
  new Intl.NumberFormat("fa-IR", optionsNum).format(num)
);
console.log(
  "Browser: ",
  new Intl.NumberFormat(navigator.language, optionsNum).format(num)
);
*/

///////////////////////////////////////////////////
// Timers
/*
// setTimeout
const ingredients = ["olives", "pepperoni"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
