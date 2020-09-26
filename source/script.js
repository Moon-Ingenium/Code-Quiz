var questionIndex =0;
var questions = [
    {
        question: "6+6",
        answers: [
            12,30,9
    
        ],
        correct: 12

    },
    {
        question: "10+6",
        answers: [
            16,30,9
    
        ],
        correct: 16

    },
];
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