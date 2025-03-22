const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: " Which is the following is not component of multimedia",
        answers: ["paint", "image ", "audio", "video"],
        correct: "paint"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    }, 
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: "William Shakespeare"
    }
];

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const wrongAnswersElement = document.getElementById('wrong-answers');

let currentQuestionIndex = 0;
let userScore = 0;
let wrongAnswers = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    wrongAnswers = 0;
    scoreElement.innerText = `Score: ${userScore}`;
    wrongAnswersElement.innerText = `Wrong Answers: ${wrongAnswers}`;
    nextButton.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(answer) {
    let correct = questions[currentQuestionIndex].correct;
    const buttons = answersElement.querySelectorAll('button');

    buttons.forEach(button => {
        if (button.innerText === correct) {
            button.style.backgroundColor = '#28a745'; // Green for correct answer
        } else if (button.innerText === answer && answer !== correct) {
            button.style.backgroundColor = '#dc3545'; // Red for wrong answer
        }
        button.disabled = true; // Disable buttons after selection
    });

    if (answer === correct) {
        userScore += 1;
        scoreElement.innerText = `Score: ${userScore}`;
    } else {
        wrongAnswers += 1;
        wrongAnswersElement.innerText = `Wrong Answers: ${wrongAnswers}`;
    }

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz completed! Your final score is ${userScore}/${questions.length}. Wrong answers: ${wrongAnswers}`);
        startQuiz();
    }
});

startQuiz();