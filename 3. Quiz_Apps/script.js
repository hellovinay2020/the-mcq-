const questions = [
    {
        question: "What is the full form of USB?",
        options: ["A. Unshielded System Board", "B. Universal System Board", "C. Unidentified System Bus", "D. Universal System Bus"],
        answer: 3
    },

    {
        question: "What is 2 + 2?",
        options: ["A. 3", "B. 4", "C. 5", "D. 6"],
        answer: 1
    },
    {
        question: "What is the decimal equivalent of the binary number 10111?",
        options: ["A. 21", "B. 39", "C. 42", "D. 23"],
        answer: 3
    },
    
    {
        question: "What is the mean of the Booting in the system?",
        options: ["A. Install the program", "B. To scan", "C. Restarting computer", "D. To turn off"],
        answer: 2
    },

    {
        question: "Which one of the following groups contains graphical file extensions?",
        options: ["A. JPG, CPX, GCM", "B. GIF, TCE, WMF", "C. TCP, JPG, BMP", "D. JPG, GIF, BMP"],
        answer: 3
    },

    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(li);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    if (selectedIndex === correctAnswer) {
        score++;
    }

    Array.from(answersElement.children).forEach((li, index) => {
        if (index === correctAnswer) {
            li.style.backgroundColor = '#28a745'; // Green for correct
        } else {
            li.style.backgroundColor = '#dc3545'; // Red for wrong
        }
        li.style.pointerEvents = 'none';
    });

    nextButton.style.display = 'block';
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function restartQuiz() {
    startQuiz();
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
startQuiz();
