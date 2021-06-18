let score = 0;
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')
let welcome = document.getElementById('welcome');
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    welcome.classList.add('hide');
    score = 0;
    document.getElementById('score').innerHTML = "Score: " + score;;
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        welcome.classList.remove('hide');
        if (score > 6) {
            welcome.innerText = "Your score is " + score + "/10! Congratulations! You passed!";
        }   else {
            welcome.innerText = "Your score is " + score + "/10. Sorry! You failed!";
        }
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
    if (selectedButton.dataset = correct) {
        score++;
    }
    document.getElementById('score').innerHTML = "Score: " + score;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true},
            { text: '<js>', correct: false},
            { text: '<scripting>', correct: false},
            { text: '<javascript>', correct: false},
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Creative Style Sheets', correct: false},
            { text: 'Cascading Style Sheets', correct: true},
            { text: 'Colorful Style Sheets', correct: false},
            { text: 'Computer Style Sheets', correct: false},
        ]
    },
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answers: [
            { text: 'In the <head> section', correct: true},
            { text: 'In the <body> section', correct: false},
            { text: 'At the end of the document', correct: false},
        ]
    },
    {
        question: 'How do you select all p elements inside a div element??',
        answers: [
            { text: 'div + p', correct: false},
            { text: 'div/p', correct: false},
            { text: 'div.p', correct: true},
            { text: 'div p', correct: false},
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '=', correct: true},
            { text: 'x', correct: false},
            { text: '*', correct: false},
            { text: '-', correct: false},
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msgBox("Hello World");', correct: false},
            { text: 'alert("Hello World");', correct: true},
            { text: 'msg("Hello World");', correct: false},
            { text: 'alertBox("Hello World");', correct: false},
        ]
    },
    {
        question: 'Which CSS property controls the text size?',
        answers: [
            { text: 'font-style', correct: false},
            { text: 'font-size', correct: true},
            { text: 'text-style', correct: false},
            { text: 'text-size', correct: false},
        ]
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        answers: [
            { text: 'text-style:capitalize', correct: false},
            { text: "You can't do that with CSS", correct: false},
            { text: 'transform:capitalize', correct: false},
            { text: 'text-transform:capitalize', correct: true},
        ]
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        answers: [
            { text: 'text-style:capitalize', correct: false},
            { text: "You can't do that with CSS", correct: false},
            { text: 'transform:capitalize', correct: false},
            { text: 'text-transform:capitalize', correct: true},
        ]
    },
    {
        question: 'Choose the correct HTML element to define important text',
        answers: [
            { text: '<b>', correct: false},
            { text: "<i>", correct: false},
            { text: '<strong>', correct: true},
            { text: '<important>', correct: false},
        ]
    },
]