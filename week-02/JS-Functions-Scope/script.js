// console.log("Hello world!");

// const name = "Bob";

// function sayHello() {
//   console.log("Hello " + name + "!");
// }

// sayHello(); // Output: Hello Bob!
// console.log("line10", name); // Output: Bob

function sayHello() {
  const name = "Bob";
  console.log("Hello " + name + "!");
}

sayHello(); // Output: Hello Bob!

console.log(name); // Output: Uncaught ReferenceError: name is not defined
