var something = document.querySelector(".container");
var questionEl = document.querySelector(".intial");
var contentEl = document.querySelector(".info");
var bttnEl = document.querySelector(".start-game");


var countdownEl = document.querySelector(".timer-score");
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

// what is my timer doing?
bttnEl.addEventListener("click", function (event) {
    bttnEl.style.display = "none";
    scoreCounter();
    questionEl.textContent= quiz[0].question1;
    contentEl.textContent ="";
    var i =0;
    for (i = 0; i< quiz[0].answers.length; i++){
        var answerbtn = document.createElement("BUTTON");   
        answerbtn.innerHTML = quiz[0].answers[i];      
        contentEl.appendChild(answerbtn);
        answerbtn.className ="answer-button";
    }
} );

document.body.addEventListener("click", function(event){
    var target = event.target
if(target.classList.contains("answer-button")) {
    
}
});


function scoreCounter() {
    var time = 100;
    var intervalID = setInterval(function () {
        time--;
        countdownEl.textContent = "Time: " + time;
        if (time === 0) {
            // clearInterval(andrew); function shows highscore
            countdownEl.textContent = "";
            tallyScore();
            clearInterval(intervalID);
        }
        
    }, 1000)
};


function tallyScore (){
//     if()    {

//     }
//     else{

//     }

}








// questionDisplay.innerHTML = (quiz[questionIndex].question1);
// console.log(questions[0].question);

// var next = document.getElementById("next-button");
// next.addEventListener("click", function (event) {
    // questionIndex++;
    // questionDisplay.innerHTML = (questions[questionIndex].question);
// });