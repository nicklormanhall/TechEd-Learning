const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  const message = event.target.message.value;
  // do something with the form data here
  console.log({ message: message });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:8080/message", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message: message }),
  });
}
