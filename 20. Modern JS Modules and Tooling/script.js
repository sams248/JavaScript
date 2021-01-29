///////////////////////////////////////////////////////////////////
// Importing module
/*
// import {addToCart, totalPrice as price, totalQuantity } from './shoppingCarts.js'
// addToCart('bread', 5);
// console.log(price, totalQuantity);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCarts.js';

// ShoppingCart.addToCart('bread', 5);

// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCarts.js';
// console.log(price);

import add from './shoppingCarts.js';

add('pizza', 2);

*/

///////////////////////////////////////////////////////////////////
// The module pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 26;
  const totalQuantity = 25;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
*/

///////////////////////////////////////////////////////////////////
// Bundling with Parcel and npm scripts
/*
import add, { cart } from './shoppingCarts.js';
add('pizza', 2);
add('apples', 8);
add('bread', 4);

console.log(cart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
*/
///////////////////////////////////////////////////////////////////
// Configuring Babel and pollyfilling
/*
const sam = new Person('Sam');

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
*/