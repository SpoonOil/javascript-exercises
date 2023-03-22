const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numArray) {
	let total = 0;
  for (let num of numArray) {
    total+= num;
  }
  return total;
};

const multiply = function(numArray) {
  let total = numArray[0];
  for (let i = 0; i < numArray.length; i++) { 
    if (i==0) {continue}
    total = total*numArray[i];
  }
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num == 0) {return 1}
	let numArray = [];
  for (let i = num; i > 0; i--) {
    numArray.push(i);
  }
  return multiply(numArray)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
