let basket = document.getElementById("basket");
let gameArea = document.getElementById("game-area");
let score = 0;

document.addEventListener("keydown", (event) => {
    let basketLeft = parseInt(getComputedStyle(basket).left);
    if (event.key === "ArrowLeft" && basketLeft > 0) {
        basket.style.left = basketLeft - 20 + "px";
    }
    if (event.key === "ArrowRight" && basketLeft < 240) {
        basket.style.left = basketLeft + 20 + "px";
    }
});

function createApple() {
    let apple = document.createElement("div");
    apple.classList.add("apple");
    apple.style.left = `${Math.random() * 270}px`;
    gameArea.appendChild(apple);

    let fall = setInterval(() => {
        let appleTop = parseInt(getComputedStyle(apple).top) || 0;
        if (appleTop < 370) {
            apple.style.top = appleTop + 5 + "px";
        } else {
            let basketLeft = parseInt(getComputedStyle(basket).left);
            let appleLeft = parseInt(getComputedStyle(apple).left);

            if (Math.abs(appleLeft - basketLeft) < 40) {
                score++;
                document.getElementById("score").textContent = score;
            }

            clearInterval(fall);
            apple.remove();
        }
    }, 100);

    setTimeout(() => apple.remove(), 5000);
}

setInterval(createApple, 2000);
