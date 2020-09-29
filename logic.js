// Creating elements through JS that will show up as the intro of the quiz in html
var container = document.querySelector(".container");
var introTitle = document.createElement("h1");
var introText = document.createElement("p");
var startButton = document.createElement("button");

var timeLeft = 75;

//Putting text in created elements to show as intro
introTitle.textContent = "Code Quiz Challenge";
introText.textContent = "Try to answer the following questions within the time limit. Keep in mind that answering incorrect will penalize your score by 10 seconds.";
startButton.textContent = "Start";

//Created attributes to style and center text on starting screen
startButton.setAttribute("class", "btn");
introTitle.setAttribute("style", "text-align:center;");
introText.setAttribute("style", "text-align:center;");
startButton.setAttribute("style", "display:relative; position: 20px auto;");
//Appending intro text to page
container.appendChild(introTitle);
container.appendChild(introText);
container.appendChild(startButton);