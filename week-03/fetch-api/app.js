// console.log("Hello world!");

// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }

// getMyStuffFromOverThere();

// using github repo https://api.github.com/repos/nicklormanhall/assessment-week1-northernlights for the stargazer_count

async function getMyNorthernLightsRepo() {
  const response = await fetch(
    "https://api.github.com/repos/nicklormanhall/assessment-week1-northernlights"
  );
  console.log("HTTP Response:", response);
  const data = await response.json();
  //   console.log("JSON Data:", json);

  const wrangledData = data.stargazers_count; //uses the api   "stargazers_count": 0,
  console.log(wrangledData);
  return wrangledData;
}

function displayStart(wrangledDataParameter) {
  const star = document.getElementById("stargazer");
  star.textContent = wrangledDataParameter;
}
async function addStargazerToPage() {
  const wrangledDataArgument = await getMyNorthernLightsRepo();
  displayStart(wrangledDataArgument);
}

addStargazerToPage();
