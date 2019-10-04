// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function arrLength(num) {
  return num;
}

const itemsLength = getLength(items, arrLength);
console.log('\nChallenge 1:');
console.log(itemsLength);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

function lastItem(element) {
  return element;
}

const myLast = last(items, lastItem);
console.log('\nChallenge 2:');
console.log(myLast);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function sum(num) {
  return num;
}

const mySum = sumNums(12, 2, sum);
console.log('\nChallenge 3:');
console.log(mySum);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb((x * y));
}

function multiply(num) {
  return num;
}

const myMultiple = multiplyNums(3, 4, multiply);
console.log('\nChallenge 4:');
console.log(myMultiple);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

function doesItInclude(bool) {
  return bool;
}

const isIncluded = contains('Highlighter', items, doesItInclude);

console.log('\nChallenge 5:');
console.log(isIncluded);

/* STRETCH PROBLEM */

const items2 = ['Pencil', 'Notebook', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array.filter((item, index) => array.indexOf(item)=== index));
}

function arrNoDuplicates(arr) {
  return arr;
}

const myNewArr = removeDuplicates(items2, arrNoDuplicates);
console.log('\nStretch Goal:\n');
console.log('Duplicates removed:\t');
console.log(myNewArr);
console.log('Original array:\t');
console.log(items2);