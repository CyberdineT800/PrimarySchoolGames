let score = 0;
const container = document.getElementById("balloon-container");

function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.backgroundColor = getRandomColor();
    
    balloon.addEventListener("click", () => {
        score++;
        document.getElementById("score").textContent = score;
        balloon.remove();
    });

    container.appendChild(balloon);
    setTimeout(() => balloon.remove(), 4000);
}

function getRandomColor() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createBalloon, 1000);
