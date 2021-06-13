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
    document.getElementById('score').innerHTML = score;
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
        if (score > 3) {
            welcome.innerText = "Congratulations! You passed!";
        }   else {
            welcome.innerText = "Sorry! You failed!";
        }
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
    if (selectedButton.dataset = correct) {
        score++;
        console.log(score);
    }
    document.getElementById('score').innerHTML = score;
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
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
        ]
    },
    {
        question: 'What is your name?',
        answers: [
            { text: 'John', correct: false},
            { text: 'Levi', correct: true},
            { text: 'Jacob', correct: false},
            { text: 'Marley', correct: false},
        ]
    },
    {
        question: 'What is your quest?',
        answers: [
            { text: 'To reclaim the Iron Throne', correct: false},
            { text: 'To seek the Holy Grail', correct: true},
            { text: 'To defeat the Blight', correct: false},
            { text: 'To cast the One Ring into the fires of Mt. Doom', correct: false},
        ]
    },
    {
        question: 'What is your favorite color?',
        answers: [
            { text: 'Black', correct: false},
            { text: 'Red', correct: false},
            { text: 'Green', correct: true},
            { text: 'Blue', correct: false},
        ]
    },
    {
        question: 'What is the capital of Assyria?',
        answers: [
            { text: 'Assur', correct: true},
            { text: 'Constantinople', correct: false},
            { text: 'Baghdad', correct: false},
            { text: 'Cairo', correct: false},
        ]
    },
]