const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Hyderabad", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Markup Language", "None"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Inside Which HTML element do we put the Javascript? ",
    options: ["<scripting>", "<javascript>", "<script>", "<js>"],
    answer: "<script>"
  },
  {
    question: "Who is Making the web standarads? ",
    options: ["Google", "W3C", "microsoft", "mozilla"],
    answer: "W3C"
  },
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function showQuestion() {
  let currentQuestion = questions[currentIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = '';

  currentQuestion.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = 'none';
  resultEl.textContent = '';
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    score++;
    resultEl.textContent = "Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "Wrong!";
    resultEl.style.color = "red";
  }
  nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showFinalResult();
  }
};

function showFinalResult() {
  questionEl.textContent = "Quiz Finished!";
  optionsEl.innerHTML = '';
  resultEl.innerHTML = `Your score is ${score} out of ${questions.length}`;
  nextBtn.textContent = "Restart";
  nextBtn.onclick = () => location.reload();
}

showQuestion();