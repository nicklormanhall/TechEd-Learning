console.log("Hello world");
console.log(document);
console.dir(document);

//select one HTML element to manipulate

document.querySelector("h2");
document.querySelector("h1");

console.log(document.querySelector("h1")); //me testing
console.log(document.querySelector(".test")); //me testing

const secondTitle = document.getElementById("second-title");

// //change the content of my h2
secondTitle.textContent = "Amazing title";

// Updated the h1

const h1 = document.querySelector("h1");
h1.textContent = "this text has been updated the text.Content";

// //create a new element
const section = document.querySelector("section");

const newImg = document.createElement("img");
newImg.src =
  "https://static.independent.co.uk/2023/01/19/12/Red%20bird%20of%20paradise.jpg?width=1200&height=900&fit=crop";
newImg.alt = "bird-of-paradise";
newImg.className = "bird-image";
section.appendChild(newImg);

// //remove an element
const removedH2 = document.getElementById("remove-please");

removedH2.remove();

// //change the background colour
document.body.style.backgroundColor = "aquamarine";

const body = document.querySelector("body");

const h2 = document.createElement("h2");
h2.textContent = "This is an added heading!";
body.appendChild(h2);
