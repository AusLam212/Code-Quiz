// Creating elements through JS that will show up as the intro of the quiz in html
var container = document.querySelector(".container");
var introTitle = document.createElement("h1");
var introText = document.createElement("p");
var startButton = document.createElement("button");
var timer = document.querySelector("#timer");
var questionOnPage = document.querySelector(".question")
var lineBreak = document.createElement("br");

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
var questions = [
    // 0
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correct: "alerts"
    },
    //1
    {
        question: "The condition of an if/else statement is enclosed within a __.",
        answers: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        correct: "curly brackets"
    },
    //2
    {
        question: "Arrays in Javascript can be used to store __.",
        answers: [
            "numbers",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        correct: "numbers"
    },
    //3
    {
        question: "String values must be enclosed within __ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        correct: "quotes"
    },
    //4
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "Javascript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        correct: "console.log"
    }
];


//Add click event to start timer when button is clicked
startButton.addEventListener("click", function() {
    startQuiz();
    container.removeChild(introTitle);
    container.removeChild(introText);
    container.removeChild(startButton);

    //Add question to page
    questionOnPage.textContent = questions[0].question;
    //Add answer array to page through for loop
    for (var i = 0; i < 4; i++) {
        var answerOnPage = document.createElement("button");
        answerOnPage.setAttribute("class", "btn");
        answerOnPage.textContent = questions[0].answers[i];
        container.append(answerOnPage);
    }
});

//Add click event for answer buttons
answerOnPage.addEventListener("click", function() {

})


//Created function that starts the timer
function startQuiz() {
    var timeLeft = 75;

    setInterval(function() {
        timer.textContent = "Time: " + timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            //ADD DATA HERE AT END ONCE SCORE PAGE IS CREATED
        }
    }, 1000);
}