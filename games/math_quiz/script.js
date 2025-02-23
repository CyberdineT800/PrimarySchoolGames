let num1, num2, correctAnswer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let result = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        result.textContent = "✅ To'g'ri!";
        generateQuestion();
        document.getElementById("answer").value = "";
    } else {
        result.textContent = "❌ Xato, qayta urinib ko'ring!";
    }
}

generateQuestion();
