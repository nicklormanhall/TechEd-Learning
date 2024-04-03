// retrieve the form DOM node
const form = document.getElementById("form");


// our event handler function
function handleSubmit(event) {
  event.preventDefault(); // the default behaviour is for the page to refresh on submit

  // new FormData is built into javascript
  // it expects to be given a form DOM node as a parameter
  const data = new FormData(form);
  const formValues = Object.fromEntries(data);

  console.log(formValues);

  // send email, or check a database, or something like that with the info from the form!
}

// add an event listener to my form
form.addEventListener("submit", handleSubmit);

// n.b.
// all functions that are used as an event handler (the function passed to addEventListener)
// will automatically be passed the event as a parameter

//from Moodle

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   // sadly we can't just log formData - it's a speical kind of object. 
//   console.log(formData);
//   const myObj = Object.fromEntries(formData)
//   console.log(myObj) // correctly logs the formData object with the keys being the input name attribute and the value being the value of the input. 
  
// });
