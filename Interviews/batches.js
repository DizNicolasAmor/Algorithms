/*
Create a function batches that returns the maximum number of
whole batches that can be cooked from a recipe.

It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is number representing how many units there are.
*/

const batches = (recipe, available) => {
  const availableProps = Object.getOwnPropertyNames(available);
  let count = parseInt(available[availableProps[0]] / recipe[availableProps[0]]);

  availableProps.forEach((i) => {
    if(parseInt(available[i] / recipe[i]) < count)
      count = parseInt(available[i] / recipe[i]);
  });
  return count;
};

// 0 batches can be made
console.log(batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
));

// 2 batches can be made
console.log(batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
));

// 1 batch can be made
console.log(batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
));

// 2 batches can be made
console.log(batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
));

