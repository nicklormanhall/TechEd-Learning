// console.log("Hello world!");

// const person = {
//   name: "Bob",
//   age: 30,
//   favouriteColour: "red",
//   sayHello: function () {
//     console.log("Hello!");
//   },
// };

// person.sayHello(); // Output: Hello!

// const person = {
//     name: "Bob",
//     age: 30,
//     favouriteColour: "red",
//     sayHello: function (name) {
//       console.log("Hello " + name + "!");
//     },
//   };

//   person.sayHello("Alice"); // Output: Hello Alice!

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  getAge: function () {
    return person.age;
  },
};

const age = person.getAge();
const newAge = person.age;

console.log(age); // Output: 30
console.log(newAge);
