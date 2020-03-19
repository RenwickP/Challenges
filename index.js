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

// Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else return false;
}

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

function arrayOfMultiples(num, length) {
  let x = [];
  for (let i = 1; i <= length; i++) {
    x.push(i * num);
  }
  return x;
}

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else return false;
}

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(change, amountDue) {
  let x = 0;
  let y = [0.25, 0.1, 0.05, 0.01];
  for (let i = 0; i <= change.length - 1; i++) {
    x += change[i] * y[i];
  }
  if (x >= amountDue) {
    return true;
  } else return false;
}

// Write a function that takes two integers (hours, minutes) and converts them into seconds.

function convert(hours, minutes) {
  return hours * 3600 + minutes * 60;
}

// String Reverse

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num) {
  let fun = "";
  for (let i = 1; i <= num; i++) {
    fun += "-";
  }
  return fun;
}
