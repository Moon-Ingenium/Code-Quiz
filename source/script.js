var something = document.querySelector(".container");
var questionEl = document.querySelector(".intial");
var contentEl = document.querySelector(".info");
var bttnEl = document.querySelector(".start-game");
var verifyEl = document.querySelector(".answer-verify");
var endGame = document.querySelector(".intials-score");
var countdownEl = document.querySelector(".timer-score");

var time = 100;
var quizIndex =0;
var quiz = [
    {
        question: "The condition in an if/else statement is enclosed with_____",
        answers: [
            "quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"

    },
    {
        question: "Which of the following is true: Arrays can be used to store:",
        answers: [
            "numbers and strings", "other arrays", "booleans", "all of the above"

        ],
        correct: "all of the above"

    },
    {
        question: "What do we enclose string values in?",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"


    },
    {
        question: "What is a useful tool for debugging?",
        answers: ["JavaScript", "terminal", "for loops", "console.log"],
        correct: "console.log"
    },

];

// start button
bttnEl.addEventListener("click", function (event) {
    bttnEl.style.display = "none";
    scoreCounter();
    console.log(quiz, "quiz index");
    questionEl.textContent= quiz[quizIndex].question;
    contentEl.textContent ="";
    var i =0;
    for (i = 0; i< quiz[0].answers.length; i++){
        var answerbtn = document.createElement("BUTTON");   
        answerbtn.innerHTML = quiz[0].answers[i];      
        contentEl.appendChild(answerbtn);
        answerbtn.className ="answer-button";
        if (quiz[0].answers[i] === quiz[0].correct )
        {
            answerbtn.setAttribute("data-correct", true);

        }
    
    }

} );



document.body.addEventListener("click", function(event){
    var target = event.target
    if(target.classList.contains("answer-button")) {
        var isCorrect = target.getAttribute("data-correct");
        if(isCorrect){
            verifyEl.textContent ="Correct!";

        }
        else{
            verifyEl.textContent ="Wrong!"
            time= time-10;
        }
        quizIndex++;
    questionEl.textContent= quiz[quizIndex].question;
    contentEl.textContent ="";
    // creating answers as buttons
    var i =0;
    for (i = 0; i< quiz[0].answers.length; i++){
        var answerbtn = document.createElement("BUTTON");   
        answerbtn.innerHTML = quiz[quizIndex].answers[i];      
        contentEl.appendChild(answerbtn);
        answerbtn.className ="answer-button";
        if (quiz[quizIndex].answers[i] === quiz[quizIndex].correct )
        {
            answerbtn.setAttribute("data-correct", true);

        }
    }
    }

    
});


function scoreCounter() {
    
    var intervalID = setInterval(function () {
        time--;
        countdownEl.textContent = "Score: " + time;
        if (time === 0 || quizIndex >= 4) {
            // clearInterval(andrew); function shows highscore this needs to say or if questions are over 
            countdownEl.textContent = "Score : " + time;
            clearInterval(intervalID);
            tallyScore();
            
        }
        
    }, 1000)
};
//    
// stop the time and display score 

function tallyScore (){
   if(quizIndex>=4)
        {
            countdownEl.textContent ="";
            verifyEl.textContent ="";
            questionEl.textContent ="All Done!"
            contentEl.textContent ="Your Score is " + time;
            endGame.style.display ="block";
            // 
            

            
        

  }
  endGame.addEventListener("submit", function(event){
   var highScorePage= document.getElementById("name").value;
//    localStorage.setItem("test", "test")
    
    // renderTodos();
    // localStorage.setItem("name", JSON.stringify(value);
    // if(event) {

    // }
    // 
})
 
}







