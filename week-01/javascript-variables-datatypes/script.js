// initial JavaScript
console.log("Hello world!"); // Hello World

let myName = "Nick";
console.log(myName);

let myAge = 52;
console.log(myAge);

myAge = 53;
console.log(myAge);

let myAddress = "6 Beech Drive, St Ives, Cambs";
console.log(myAddress);

let myDetails = `My name is ${myName} I am ${myAge} and i live at ${myAddress}`;
console.log(myDetails);

let firstNumber = 10;
let secondNumber = 20;
let yesNo = true;

console.log(firstNumber);
console.log(secondNumber);
console.log(yesNo);

// JS: Data Types workshop

let testNumber = 1;
console.log(testNumber); // Output: 1

let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;

console.log(sweets); // Output: 15

let testName = "Bob";
console.log(testName); // Output: Bob

let firstName = "Bob";
let lastName = "Smith";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: Bob Smith
fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: Bob Smith

firstName = "Imhotep";
console.log(`${firstName} is ${firstName.length} characters long`);

let name = "Bob";
console.log(typeof name); // Output: string

let number = 1;
console.log("The type of number is " + typeof number); // Output: The type of number is number

let isTrue = true;
console.log(`The type of isTrue is ${typeof isTrue}`); // Output: The type of isTrue

let isFalse = false;
console.log(`The type of isFalse is ${typeof isFalse}`); // Output: The type of isFalse

let testName2;
console.log(testName2); // Output: undefined

let age = null;
console.log(age); // Output: null
