console.log("JS-Conditionals");

// if (1 > 0) {
//   console.log("1 is greater than 0");
// }

// let age = 18;
// let legalDrivingAge = 17;

// if (age > legalDrivingAge) {
//   console.log("You can drive!");
// }

// assume you're not old enough to drive
// let isRoadLegal = false; // boolean does change after checks

// // set age and legal driving age
// const age = 18; // const: age doesn't change during the running program
// const legalDrivingAge = 17;

// if (age > legalDrivingAge) {
//   isRoadLegal = true;
// }

// console.log("Am I road legal?", isRoadLegal);

// let age = 16;
// let legalDrivingAge = 17;

// if (age > legalDrivingAge) {
//   console.log("You're old enough to drive!");
// } else if (age === legalDrivingAge) {
//   console.log("You're just old enough to drive!");
// } else {
//   console.log("You can't drive yet!");
// }

let age = 17;
let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age === 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  }
  // ...
}
