var something =document.querySelector("container");
var questionEl = document.querySelector("intial");
var conentEl = document.querySelector("info");
var bttnEl = document.querySelector("start-game");

var countdownEl = "";
var time = "";
var questionIndex =0;
var questions = [
    {
        question: "6+6",
        answers: [
            12,30,9,0,],
        correct: 12

    },
    {
        question: "10+6",
        answers: [
            16,30,9
    
        ],
        correct: 16

    },
]
// on click function
// if we click the button timer begins and 1st question starts
// what is my timer doing?
var time = 10;
countdownEl.textContent = time + "Seconds left";
var andrew = setInterval(function()
{
    time--;
    if (time ===0){
        // clearInterval(andrew); function shows highscore
        textContent = "";
        alert ("score");
    }
    }, 10000)
};







 var questionDisplay = document.getElementById("question-answer");
 questionDisplay.innerHTML=(questions[questionIndex].question);
console.log(questions[0]);
console.log(questions.question);
console.log(questions[0].question);

var next = document.getElementById("next-button");
next.addEventListener("click", function(event){
    questionIndex++;
    questionDisplay.innerHTML = (questions[questionIndex].question);
});