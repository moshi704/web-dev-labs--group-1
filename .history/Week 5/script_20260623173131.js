document.getElementById("calcBtn").addEventListener("click", function() {
  const scoreInput = document.getElementById("scoreInput");
  const results = document.getElementById("results");
  const score = Number(scoreInput.value);

  // Input validation
  if (isNaN(score) || score < 0 || score > 100) {
    results.textContent = " Please enter a valid score between 0 and 100.";
    results.styleColor = "red";
    return;
  }

  // Grade calculation
  let grade;
  if (score >= 70) grade = "A";
  else if (score >= 60) grade = "B";
  else if (score >= 50) grade = "C";
  else if (score >= 40) grade = "D";
  else grade = "F";

  // Display result
  results.textContent = `Score: ${score} → Grade: ${grade}`;
  results.style.color = grade === "A" ? "green" : grade === "F" ? "red" : "black";

  // Reset input
  scoreInput.value = "";
});