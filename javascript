// this is a basic JS program
function greet(name) {
  return "Hello, " + name + "!";
}

const personName = "Arnold";
const greeting = greet(personName);
console.log(greeting);

// create array of no.
const numbers = [1, 2, 3, 4, 5];

// calculate sum of no. in array
let sum =0;
for (const num of numbers) {
  sum += num;
}
console.log("Sum of numbers:", sum);

// check if no. is even or odd
function isEven(number) {
  return number % 2 ==0;
}

const  testNumber = 7;
console.log(testNumber, "is even:", isEven(testNumber));
