// create a quiz app of 10 random mcq type questions.
// next button click -> next question...
// each question should be display for 60 second.
// after 60 second it should be change to next question.
// count user's mark while attempting test and show at the end of quiz.
// and show excellent, good, average, poor result based on mark.

// 10 questions
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
  }
];

const question_index = document.getElementById("question-index");
const question = document.getElementById("question");

const option_A_text = document.getElementById("option-a-text");
const option_B_text = document.getElementById("option-b-text");
const option_C_text = document.getElementById("option-c-text");
const option_D_text = document.getElementById("option-d-text");

const option_A_btn = document.getElementById("option-a-btn");
const option_B_btn = document.getElementById("option-b-btn");
const option_C_btn = document.getElementById("option-c-btn");
const option_D_btn = document.getElementById("option-d-btn");

const timer_counter = document.getElementById("timer-count");
const next_question_btn = document.getElementById("next-question-btn");

const start_quiz_btn = document.getElementById("start-btn");
const quiz_container = document.getElementById("quiz-container");

const quiz_result = document.getElementById("quiz-result");
const quiz_mark = document.getElementById("quiz-mark");
const quiz_status = document.getElementById("quiz-status");

let currentQuestionIndex = -1;
let timerId = 0;
const answers = [];
let score = 0;

const displayQuestions = () => {
  
  if (option_A_btn.checked) {
    answers.push(0);
  } else if (option_B_btn.checked) {
    answers.push(1);
  } else if (option_C_btn.checked) {
    answers.push(2);
  } else if (option_D_btn.checked) {
    answers.push(3);
  }

  option_A_btn.checked = false;
  option_B_btn.checked = false;
  option_C_btn.checked = false;
  option_D_btn.checked = false;

  if (currentQuestionIndex >= questionsList.length - 1) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == questionsList[i].answer) {
        score++;
      }
    
    alert("Quiz End...!");
    quiz_container.className = "d-none";
    quiz_result.className = "container my-4";
    quiz_mark.textContent = score + "/" + questionsList.length;
    const percentage = (score * 100) / questionsList.length;

    if (percentage >= 95) {
      quiz_status.textContent = "Excellent...";
    } else if (percentage >= 85) {
      quiz_status.textContent = "Good...";
    } else if (percentage >= 75) {
      quiz_status.textContent = "Average...";
    } else if (percentage >= 65) {
      quiz_status.textContent = "Poor...";
    } else if (percentage < 50) {
      quiz_status.textContent = "Failed...";
    }
    return;
  };

  let seconds = 10;
  timerId = setInterval(() => {
    timer_counter.textContent = seconds;
    if (seconds > 0) {
      seconds--;
    } else {
      clearInterval(timerId);
      displayQuestions();
    }
  }, 1000);


  currentQuestionIndex++;
  question_index.textContent = "Q-" + (currentQuestionIndex + 1);
  question.textContent = questionsList[currentQuestionIndex].question;
  option_A_text.textContent = questionsList[currentQuestionIndex].options[0];
  option_B_text.textContent = questionsList[currentQuestionIndex].options[1];
  option_C_text.textContent = questionsList[currentQuestionIndex].options[2];
  option_D_text.textContent = questionsList[currentQuestionIndex].options[3];
};

next_question_btn.addEventListener("click", () => {
  clearInterval(timerId);
  displayQuestions();
});

displayQuestions();

//quiz start on click
start_quiz_btn.addEventListener("click", () => {
  quiz_container.className = "container";
  start_quiz_btn.className = "d-none";
});