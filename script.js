const questions = [
  
    [
        {
            question: "Which of the following is not a component of multimedia?",
            answers: ["Text", "Audio", "Paint", "Video"],
            correct: "Paint"
        },
        {
            question: "Which of the following is an example of multimedia in business?",
            answers: ["Video conferencing", "Interactive presentations", "Digital marketing", "All the above"],
            correct: "All the above"
        },
        {
            question: "Which multimedia hardware is essential for capturing high-quality images?",
            answers: ["Printer", "Digital camera", "Scanner", "Microphone"],
            correct: "Digital camera"
        },
        {
            question: "What is the main purpose of the testing phase in multimedia application development?",
            answers: ["To design the interface", "To ensure quality", "To write code", "To market the product"],
            correct: "To ensure quality"
        },
        {
            question: "Which of the following is an example of output multimedia devices?",
            answers: ["Keyboard", "Mouse", "Speaker", "Microphone"],
            correct: "Speaker"
        },
        {
            question: "What is the main advantage of using vector images over raster images?",
            answers: ["They are smaller in size", "They don’t lose quality when scaled", "They are easier to create", "They support more colors"],
            correct: "They don’t lose quality when scaled"
        },
        {
            question: "Which image format is best for digital photography due to its high compression efficiency?",
            answers: ["PNG", "JPEG", "GIF", "BMP"],
            correct: "JPEG"
        },
        {
            question: "Which image format is used for animated images?",
            answers: ["JPEG", "PNG", "GIF", "BMP"],
            correct: "GIF"
        },
        {
            question: "Which image format is used for web graphics due to its small size and ability to support animation?",
            answers: ["JPEG", "PNG", "GIF", "BMP"],
            correct: "GIF"
        },
        {
            question: "Which unit commonly measures image resolution?",
            answers: ["Pixels per inch", "Bits per pixel", "Bytes per second", "Frames per second"],
            correct: "Pixels per inch"
        },
        {
            question: "What is a grayscale image?",
            answers: ["An image with only black and white pixels", "An image with different shades of gray without any color", "An image with high contrast", "An image with a single color tone"],
            correct: "An image with different shades of gray without any color"
        },
        {
            question: "How many bits per pixel are used in an 8-bit grayscale image?",
            answers: ["1 bit", "8 bits", "16 bits", "24 bits"],
            correct: "8 bits"
        },
        {
            question: "How many bits per pixel are used in a binary image?",
            answers: ["1 bit", "8 bits", "16 bits", "24 bits"],
            correct: "1 bit"
        },
        {
            question: "What is the maximum number of shades in an 8-bit grayscale image?",
            answers: ["128", "256", "512", "1024"],
            correct: "256"
        },
        {
            question: "What happens if you increase the resolution of an image?",
            answers: ["It becomes blurry", "It becomes sharper and clearer", "It loses color", "It becomes smaller in size"],
            correct: "It becomes sharper and clearer"
        },
        {
            question: "In RGBA, what does 'A' stand for?",
            answers: ["Alpha", "Amplitude", "Accuracy", "Alignment"],
            correct: "Alpha"
        },
        {
            question: "What is the range of values for the alpha channel in an 8-bit image?",
            answers: ["0 to 100", "0 to 255", "0 to 512", "0 to 1024"],
            correct: "0 to 255"
        },
        {
            question: "What happens when the alpha value of a pixel is set to zero?",
            answers: ["The pixel appears fully opaque", "The pixel appears fully transparent", "The pixel becomes black", "The pixel becomes white"],
            correct: "The pixel appears fully transparent"
        },
        {
            question: "What does an image histogram represent?",
            answers: ["The color palette of the image", "The frequency distribution of pixel intensities", "The size of the image", "The resolution of the image"],
            correct: "The frequency distribution of pixel intensities"
        },
        {
            question: "If an image has a histogram that is evenly spread across the entire range of intensities, what can be inferred?",
            answers: ["The image is low contrast", "The image is high contrast", "The image is grayscale", "The image is monochrome"],
            correct: "The image is high contrast"
        }
    ],  {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
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