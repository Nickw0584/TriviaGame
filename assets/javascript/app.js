//The Mastiff Quiz
//
//const countText

//create a timer




//display questions right

//display questions wrong

//make sure only one answer can be checked

//have a click start button

//have an all done end

//const startButton = document.getElementById("start");
//startButton.addEventListener("click",function(){
//const timer = setInterval(function() {
//let count = 120;
//console.log(count);
//  count--;
// if(count === 0) {
// stopInterval()
//}
//}, 1000);

//const stopInterval = function() {
//console.log('time is up!');
//clearInterval(timer);
//}

const myQuestions = [
    {
        question: "This mastiff/ molassor has the record being the tallest dog?",
        answers: {
            a: "English Mastiff",
            b: "Great Dane",
            c: "Dogue de Bordeaux"
        },
        correctAnswer: "b"
    },

    {
        question: "This mastiff is considered the dog of war and is also from France?",
        answers: {
            a: "Dogue de Bordeaux",
            b: "Cane Corso",
            c: "Neopalitan Mastiff"
        },
        correctAnswer: "a"
    },

    {
        question: "A mastiff is considered a molosser?",
        answers: {
            a: "true",
            b: "false",
            c: "both"
        },
        correctAnswer: "a"
    },

    {
        question: "This mastiff is considered to have the strongest bite at over 700psi?",
        answers: {
            a: "Cane Corso",
            b: "Dogue De Bordeaux",
            c: "Great Dane"
        },
        correctAnswer: "a"
    },

    {
        question: "This mastiff is also known as the Samuri of mastiffs?",
        answers: {
            a: "Tosa Inu",
            b: "Dogo Caneria",
            c: "Dogo Argentina"
        },
        correctAnswer: "a"
    },

    {
        question: "This is considered the African Mastiff?",
        answers: {
            a: "Ca de Bou",
            b: "Boerboel",
            c: "Cane Corso"
        },
        correctAnswer: "b"
    },

    {
        question: "This African mastiff is used to protect againist lions and other African prey animals?",
        answers: {
            a: "Boerboel",
            b: "Cane Corso",
            c: "Ca de Bou"
        },
        correctAnswer: "a"
    },

    {
        question: "This mastiff is often called the Italian mastiff. ",
        answers: {
            a: "Cane Corso",
            b: "Neopalitan Mastiff",
            c: "Cane De Parso"
        },
        correctAnswer: "b"
    },

    {
        question: "This Italian mastiff is heavy boned and has lots of wrinkles, it was also in Harry Potter?",
        answers: {
            a: "Neapolitan Mastiff",
            b: "Cane Corso",
            c: "Dogue De Bordeaux"
        },
        correctAnswer: "a"
    },

    {
        question: "With the highest bite psi of all mastiffs this dog is used as a police dog in Italy?",
        answers: {
            a: "Persa De Canro",
            b: "Neopolitan Mastiff",
            c: "Cane Corso"
        },
        correctAnswer: "c"
    }];
const myQuestionsAsString = myQuestions.join(" ; ");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        //  store the output and the answer choices
        const output = [];
        let answers;

        // for each question
        for (let i = 0; i < questions.length; i++) {

            // first reset the answers
            answers = [];

            // each available answer
            for (letter in questions[i].answers) {

                // html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine the output list into html
        quizContainer.innerHTML = output.join("");
    }

    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let userAnswer = "";
        let numCorrect = 0;

        // for each question
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector("input[name=question" + i + "]:checked") || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // adds to correct answers
                numCorrect++;

                answerContainers[i].style.color = "green";
            }
            // if answer is wrong or blank
            else {
                answerContainers[i].style.color = "red";
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
    }



    // on submit, show results
   // submitButton.onclick = function () {
        //showResults(questions, quizContainer, resultsContainer);
       // clearInterval(timer);
   // };
    newFunction();


    function newFunction() {
        const startButton = document.getElementById("start");
        startButton.addEventListener("click", function () {
            let count = 3;

            // shows the questions
            showQuestions(questions, quizContainer);

            const timer = setInterval(function () {
                console.log(count);
                count--;
                if (count === 0) {
                    showResults(questions, quizContainer, resultsContainer);
                    stopInterval();
                }
            }, 1000);
            const stopInterval = function () {
                console.log('time is up!');
                clearInterval(timer);

            };
            submitButton.onclick = function () {
                showResults(questions, quizContainer, resultsContainer);
                stopInterval();
        }});


    }

    //submitButton.onclick = function () {
       // showResults(questions, quizContainer, resultsContainer);
       // stopInterval();
    //};
    

}
