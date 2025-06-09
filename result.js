const user = localStorage.getItem("username") || "User";
const score = localStorage.getItem("score");
const total = localStorage.getItem("total");

document.getElementById('user').textContent = `Hi, ${user}!`;
document.getElementById('summary').textContent = `You scored ${score} out of ${total}. Grade: ${getGrade(score, total)}`;

function getGrade(score, total) {
  const percent = (score / total) * 100;
  if (percent === 100) return "Excellent!";
  else if (percent >= 70) return "Good!";
  else if (percent >= 40) return "Average";
  else return "Needs Improvement";
}