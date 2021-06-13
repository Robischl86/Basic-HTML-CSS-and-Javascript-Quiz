const name = document.getElementById("enter_name")

const begin = document.getElementById("begin");

const restart = document.getElementById("restart");

const correct = document.getElementsByClassName("correct");



points = 0;
localStorage.setItem("points", points);


function correctAnswer() {
localStorage.getItem(points);
points++;
return points;
}



console.log(points);

function restartQuiz() {
localStorage.clear();
}








