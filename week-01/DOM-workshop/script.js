console.log("Hello world");
console.log(document);

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const image = document.createElement("img");

console.log(body);
console.dir(body);
console.dir(h1);

h1.textContent = "Hello world!";
image.src = "./assets/image.jpg";
h1.appendChild(image);

//h1.remove();
