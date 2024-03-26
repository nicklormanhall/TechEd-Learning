console.log("Hello world!");

function sayHello() {
  console.log("Hello world!");
}

sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}

sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!

// add function
function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log("The result is", result); // Output: The result is 6
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: Another result is 12

// multiply function
function multiply(a, b) {
  return a * b;
}

// subtract function
function subtract(a, b) {
  return a - b;
}

// divide function
function divide(a, b) {
  return a / b;
}

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

(" TEST FUNCTIONS TO SEE WHICH FUNCTION RUNS WITH THE SAME NAME");
function calculate(b, a, operator) {
  switch (operator) {
    case "+":
      return add(b, a);
    case "-":
      return subtract(b, a);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "invalid operator - test";
  }
}
const result2 = calculate(1, 5, "+");
console.log("The result is", result); // Output: The result is 6

const anotherResult2 = calculate(2, 10, "*");
console.log("Another result is", anotherResult); // Output: Another result is 20
