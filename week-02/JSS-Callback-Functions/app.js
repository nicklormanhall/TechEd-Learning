// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

//-------------------

function myAwesomeFunction(onCompleteCallback) {
    console.log("Running myAwesomeFunction... doing complex tasks...");
    console.log("Complex task complete. I will notify the user");
    onCompleteCallback();
  }
  
  myAwesomeFunction(function () {
    console.log("notifyUser function was called!");
  });

  //-------------------

  myAwesomeFunction(() => {
    console.log("notifyUser function was called!");
  });