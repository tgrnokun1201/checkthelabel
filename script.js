var answers = [
    "No label",
    "Just friends",
    "Best friends",
    "Friends with benefits",
    "More than friends",
    "Mutual feelings",
    "In a situationship",
    "Dating",
    "No chance",
    "Already taken by someone"
];

window.onload = function () {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var eightball = document.getElementById("eight-ball");
    var question = document.getElementById("question");

    eightball.addEventListener("click", function () {
        if (question.value.length < 1) {
            eight.innerText = "";
            answer.innerText = "???";
        } else {
            eight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });
}