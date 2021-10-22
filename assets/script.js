// create array of questions
var questions = [
    {
        title: "Arrays in javascript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "When was javascript first introduced?",
        choices: ["1980", "2000", "1995", "2008"],
        answer: "1995",
    },
    {
        title: "What are global variables?",
        choices: ["variables that have a passport", "Mr.Worldwide", "variables that can be accessed throughout the Js file", "variables that have scope"],
        answer: "variables that can be accessed throughout the Js File",
    },
    {
        title: "Which symbol is used for comments in Javascript?",
        choices: ["//", "<!---->", "*/", "comment"],
        answer: "//",
    },
    {
        title: "What are all the looping structure in Javascript?",
        choices: ["for", "while", "do-while", "all of the above"],
        answer: "all of the above",
    }
]
// possible variables 
var score = 0;
var questionCount = 0;



// start timer 
// loop through array 
// Penalize player for wrong answer 
// Game is over when timer hits zero or questions are answered
// Save initials and score 