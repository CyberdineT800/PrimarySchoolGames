const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100);

totalChances = 10;

checkBtnEl.addEventListener("click", () => {
    
    totalChances--;
    let inputValue = inputEl.value;
   
    if (totalChances === 0) {
        inputValue = "";
        inputEl.disabled = true;
        guessEl.textContent = "😥 Afsuski, yutqazdingiz"
        guessEl.style.color = "red";
        checkBtnEl.textContent = "Qaytadan o'ynash 😉";
        remainingChancesTextEl.textContent = "Imkoningiz qolmadi 🙄"
    }
    else if (totalChances < 0) {
        window.location.reload();
    }
    else if (inputValue == randomNumber) {
        inputEl.disabled = true;
        guessEl.textContent = "😍 Ofarin, Siz yutdingiz."
        guessEl.style.color = "green";
        checkBtnEl.textContent = "Qaytadan o'ynash 😉";
        totalChances = 0;
    } else if (inputValue > randomNumber && inputValue < 100) {
        guessEl.textContent = "Taxminingiz katta 👍";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "#1446a0";
    } else if (inputValue < randomNumber && inputValue > 0) {
        guessEl.textContent = "Taxminingiz kichik 👎";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "#1446a0";
    } else {
        guessEl.textContent = "Sizning raqamingiz yaroqsiz!";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "red";
    }
});
