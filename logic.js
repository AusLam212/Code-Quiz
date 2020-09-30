// Creating elements through JS that will show up as the intro of the quiz in html
var container = document.querySelector(".container");
var introTitle = document.createElement("h1");
var introText = document.createElement("p");
var startButton = document.createElement("button");

//Total time on counter
var timeLeft = 75;

//Putting text in created elements to show as intro
introTitle.textContent = "Code Quiz Challenge";
introText.textContent = "Try to answer the following questions within the time limit. Keep in mind that answering incorrect will penalize your score by 10 seconds.";
startButton.textContent = "Start";

//Created attributes to style and center text on starting screen
startButton.setAttribute("class", "btn text-center");
introTitle.setAttribute("style", "text-align:center;");
introText.setAttribute("style", "text-align:center;");

//Appending intro text to page
container.appendChild(introTitle);
container.appendChild(introText);
container.appendChild(startButton);

//Questions Array
var questions = {
    question: "Commonly used data types DO NOT include ______.",
    a: "boolean",
    b: "string",
    c: "number",
    d: "quotes",
    answer: d,

    question: "The condition of an if/else statement is enclosed with ______.",
    a: "()",
    b: "{}",
    c: "[]",
    d: "<>",
    answer: a,

    question: "Arrays in Javascript can be used to store ______.",
    a: "Other arrays",
    b: "numbers",
    c: "strings";
    d: "All of the above",
    answer: d,

    question: "A very useful tool in development and debugging is ______.",
    a: "alert()",
    b: "console.log()",
    c: "prompt()";
    d: "function()",
    answer: b,
}


[
    "Commonly used data types do not include ______.",
    "The condition of an if/else statement is enclosed with ______.",
    "Arrays in Javascript can be used to store ______.",
    "A very useful tool in development and debugging is ______.",
];


startButton.addEventListener("click", function() {

})