var something = document.querySelector("container");
var questionEl = document.querySelector("intial");
var conentEl = document.querySelector("info");
var bttnEl = document.querySelector("start-game");
// total correcr variable for score? total++ correct answers/total-- will trigger time reduction

var countdownEl = document.querySelector("time-score");
var time = "";
var questionIndex = 0;
var quiz = [
    {
        question1: "The condition in an if/else statement is enclosed with_____",
        answers: [
            "quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"

    },
    {
        question2: "Which of the following is true: Arrays can be used to store:",
        answers: [
            "numbers and strings", "other arrays", "booleans", "all of the above"

        ],
        correct: "all of the above"

    },
    {
        question3: "What do we enclose string values in?",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"


    },
    {
        question4: "What is a useful tool for debugging?",
        answers: ["JavaScript", "terminal", "for loops", "console.log"],
        correct: "console.log"
    },

];
// addeventlistener start on click
// prev.addeventlistner("click" function(event){
// event.stopPropagation();}); 

// on click function
// if we click the button timer begins and 1st question starts
// what is my timer doing?
bttnEl.addEventListener("click", function (event) {
    if ()
})



function scoreCounter() {
    var time = 100;
    var score = setInterval(function () {
        time--;
        if (time === 0) {
            // clearInterval(andrew); function shows highscore
            countdownEl.textContent = "";
            tallyScore();
            clearInterval(time);
        }, 1000)
}
};
function tallyScore (){
    if()    {

    }
    else{

    }

}







// var questionDisplay = document.querySelector("start-game");
// questionDisplay.innerHTML = (quiz[questionIndex].question1);
// console.log(questions[0].question);

// var next = document.getElementById("next-button");
// next.addEventListener("click", function (event) {
    // questionIndex++;
    // questionDisplay.innerHTML = (questions[questionIndex].question);
// });