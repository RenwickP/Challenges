// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
  let x = 0;
  for (let i = num; i >= 0; i--) {
    x += i;
  }
  return x;
}

// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
  retrun(arr[0]);
}

// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

function filterArray(arr) {
  let x = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString() !== arr[i]) {
      x.push(arr[i]);
    }
  }
  return x;
}

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

function triangle(n) {
  return (n * (n + 1)) / 2;
}
