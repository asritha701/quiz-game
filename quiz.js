const questions = [
  { question: "Capital of India?", options: ["Delhi", "Mumbai", "Chennai"], answer: "Delhi" },
  { question: "Largest planet?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
  { question: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Inside Which HTML element do we put the Javascript? ", options: ["<scripting>", "<javascript>", "<script>", "<js>"],answer: "<script>"},
  { question: "Who is Making the web standarads? ",options: ["Google", "W3C", "microsoft", "mozilla"],answer: "W3C" },
];

let index = 0;
let score = 0;
let timer;
let seconds = 15;

document.getElementById('user').textContent = `Hi, ${localStorage.getItem("username") || "User"}`;

function startTimer() {
  seconds = 15;
  document.getElementById('timer').textContent = `Time Left: ${seconds}s`;
  timer = setInterval(() => {
    seconds--;
    document.getElementById('timer').textContent = `Time Left: ${seconds}s`;
    if (seconds <= 0) {
      clearInterval(timer);
      checkAnswer(null);
    }
  }, 1000);
}

function showQuestion() {
  clearInterval(timer);
  startTimer();
  let q = questions[index];
  document.getElementById('question').textContent = q.question;
  const options = document.getElementById('options');
  options.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    options.appendChild(btn);
  });
  document.getElementById('result').textContent = '';
  document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selected) {
  clearInterval(timer);
  const correct = questions[index].answer;
  const result = document.getElementById('result');
  if (selected === correct) {
    score++;
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `Wrong! Correct: ${correct}`;
    result.style.color = "red";
  }
  document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').onclick = () => {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem("score", score);
    localStorage.setItem("total", questions.length);
    window.location.href = "result.html";
  }
};

showQuestion();