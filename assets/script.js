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

//timer variables 
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");


var countDown = 76; 
var hold = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");
 

// start timer on click (eventListener)
timer.addEventListener("click", function() {
    //check zero
    if (hold === 0) {
        hold = setInterval(function() {
            countDown--;
            currentTime.textContent = "Time" + countDown;

            if(countDown <= 0){
                clearInterval(hold);
               //call end game 
            }
        }, 1000);
    }
    quiz(questionCount);
})
    
//bring up questions and choices 
function quiz(questionCount) {
    //clear existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    //loop through array 
    // for (i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionCount].title;
        var userChoices = questions[questionCount].choices;
        questionsDiv.textContent = userQuestion;
    // }

    userChoices.forEach(function(newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if(element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        //if correct 
        if(element.textContent == questions[questionCount].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionCount].answer;
        }
        //will deduct 10 sec for wrong answer
        else {
            countDown = countDown - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionCount].answer;
        }
        //questionsDiv.appendChild(createDiv);

    }
    //determines number question user is on 
    questionCount++;
    //quiz(questionCount);
    if (questionCount >= questions.length) {
        //all done will append ulast page w user stats 
        allDone();
        createDiv.textContent = "End of Quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    }
    else {
        quiz(questionCount);
    }
    questionsDiv.appendChild(createDiv);
}

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    //heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!";

    questionsDiv.appendChild(createH1);

    //paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    //calculate time remaining 
    if (countDown >= 0) {
        var timeRemaining = countDown;
        var createP2 = document.createElement("p");
        clearInterval(hold);
        createP.textContent = "Your final score is " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    //label 
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type" , "text");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    //submit 
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./highscore.html");
            
        }
    });

}
