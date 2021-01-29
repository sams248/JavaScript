const sc = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allowQuantity = {
  lisbon: 5,
  others: 7,
};

const check = function (city) {
  if (sc.length > 0) {
    const allowed =
      city == 'lisbon' ? allowQuantity.lisbon : allowQuantity.others;

    sc.forEach(item => {
      if (item.quantity > allowed) item.quantity = allowed;
    });
  }
};
check('lisbon');

const description = `Order with ${sc[0].quantity} ${sc[0].product}${
  sc.length > 1 ? ', etc...' : '.'
}`;

console.log(description);
