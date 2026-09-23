// create a quiz app of 10 random mcq type questions.
// next button click -> next question...
// each question should be display for 60 second.
// after 60 second it should be change to next question.
// count user's mark while attempting test and show at the end of quiz.
// and show excellent, good, average, poor result based on mark.

// 10 QUESTIONS
const questionsList = [
  {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["France", "Italy", "Germany", "Spain"],
    answer: 0,
  },

  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1,
  },

  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: 2,
  },

  {
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: 2,
  },

  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: 0,
  },

  {
    question: "Which language is used to style web pages?",
    options: ["JavaScript", "Python", "CSS", "HTML"],
    answer: 2,
  },

  {
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: 1,
  },

  {
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: 0,
  },

  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Lion", "Elephant", "Leopard"],
    answer: 1,
  },

  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: 2,
  },
];

// GET HTML ELEMENTS

// Question
const question_index = document.getElementById("question-index");
const question = document.getElementById("question");

// Option text
const option_A_text = document.getElementById("option-a-text");
const option_B_text = document.getElementById("option-b-text");
const option_C_text = document.getElementById("option-c-text");
const option_D_text = document.getElementById("option-d-text");

// Radio buttons
const option_A_btn = document.getElementById("option-a-btn");
const option_B_btn = document.getElementById("option-b-btn");
const option_C_btn = document.getElementById("option-c-btn");
const option_D_btn = document.getElementById("option-d-btn");

// Timer
const timer_counter = document.getElementById("timer-count");

// Buttons
const start_quiz_btn = document.getElementById("start-btn");
const next_question_btn = document.getElementById("next-question-btn");
const restart_btn = document.getElementById("restart-btn");

// Containers
const quiz_container = document.getElementById("quiz-container");
const quiz_result = document.getElementById("quiz-result");

// Result
const quiz_mark = document.getElementById("quiz-mark");
const quiz_status = document.getElementById("quiz-status");

let currentQuestionIndex = -1;
let timerId = null;
let score = 0;

const resetOptions = () => {
  // Uncheck all radio buttons

  option_A_btn.checked = false;
  option_B_btn.checked = false;
  option_C_btn.checked = false;
  option_D_btn.checked = false;
};

const getSelectedAnswer = () => {
  if (option_A_btn.checked) {
    return 0;
  }
  if (option_B_btn.checked) {
    return 1;
  }
  if (option_C_btn.checked) {
    return 2;
  }
  if (option_D_btn.checked) {
    return 3;
  }
  return -1;
};

const checkAnswer = () => {
  // Get selected option

  const selectedAnswer = getSelectedAnswer();

  if (selectedAnswer === -1) {
    return;
  }
  if (selectedAnswer === questionsList[currentQuestionIndex].answer) {
    score++;
  }
};

const startTimer = () => {
  // Every question has 60 seconds
  let seconds = 60;

  // Display timer
  timer_counter.textContent = seconds;

  // Clear old timer
  clearInterval(timerId);

  // Start timer
  timerId = setInterval(() => {
    // Decrease seconds
    seconds--;

    // Display updated time
    timer_counter.textContent = seconds;

    // When timer reaches 0
    if (seconds <= 0) {
      // Stop timer
      clearInterval(timerId);

      // Automatically move to next question
      nextQuestion();
    }
  }, 1000);
};

const displayQuestion = () => {
  // Increase question index
  currentQuestionIndex++;

  // Get current question
  const currentQuestion = questionsList[currentQuestionIndex];

  // Display question number
  question_index.textContent = "Q-" + (currentQuestionIndex + 1);

  // Display question
  question.textContent = currentQuestion.question;
  option_A_text.textContent = currentQuestion.options[0];
  option_B_text.textContent = currentQuestion.options[1];
  option_C_text.textContent = currentQuestion.options[2];
  option_D_text.textContent = currentQuestion.options[3];

  // Reset previous selection

  resetOptions();

  // Start 60 second timer

  startTimer();
};

const nextQuestion = () => {
  // Stop timer

  clearInterval(timerId);

  // Check current answer

  checkAnswer();

  // Check if current question
  // is the last question

  if (currentQuestionIndex >= questionsList.length - 1) {
    // Show final result

    showResult();

    return;
  }

  // Show next question

  displayQuestion();
};

const showResult = () => {
  // Stop timer

  clearInterval(timerId);

  // Hide quiz container

  quiz_container.classList.add("d-none");

  // Show result container

  quiz_result.classList.remove("d-none");

  // Calculate percentage

  const percentage = (score / questionsList.length) * 100;

  // Display score

  quiz_mark.textContent = score + "/" + questionsList.length;

  // Display result status

  if (percentage >= 90) {
    quiz_status.textContent = "Excellent!";
  } else if (percentage >= 75) {
    quiz_status.textContent = "Good!";
  } else if (percentage >= 50) {
    quiz_status.textContent = "Average!";
  } else {
    quiz_status.textContent = "Poor!";
  }
};

start_quiz_btn.addEventListener("click", () => {
  // Hide Start button

  start_quiz_btn.classList.add("d-none");

  // Show quiz

  quiz_container.classList.remove("d-none");

  // Hide result

  quiz_result.classList.add("d-none");

  // Reset score

  score = 0;

  // Reset question index

  currentQuestionIndex = -1;

  // Show first question
  displayQuestion();
});

next_question_btn.addEventListener("click", () => {
  // Move to next question
  nextQuestion();
});

restart_btn.addEventListener("click", () => {
  // Stop timer
  clearInterval(timerId);
  // Reset score
  score = 0;
  // Reset question index
  currentQuestionIndex = -1;
  // Hide result
  quiz_result.classList.add("d-none");

  // Show quiz
  quiz_container.classList.remove("d-none");

  // Start again
  displayQuestion();
});
