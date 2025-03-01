const allWordPairs = [
    { word: "Olma", emoji: "🍎" },
    { word: "Kitob", emoji: "📖" },
    { word: "Quyosh", emoji: "☀️" },
    { word: "Oy", emoji: "🌙" },
    { word: "Baliq", emoji: "🐟" },
    { word: "Mushuk", emoji: "🐱" },
    { word: "Gul", emoji: "🌸" },
    { word: "Telefon", emoji: "📱" },
    { word: "Mashina", emoji: "🚗" },
    { word: "Samolyot", emoji: "✈️" },
    { word: "Soat", emoji: "⏰" },
    { word: "Shar", emoji: "🎈" },
    { word: "Igna", emoji: "🪡" },
    { word: "Sovg'a", emoji: "🎁" },
    { word: "Koptok", emoji: "⚽" },
    { word: "Bo'ri", emoji: "🐺" },
    { word: "Yo'lbars", emoji: "🐯" },
    { word: "Zebra", emoji: "🦓" },
    { word: "Sigir", emoji: "🐮" },
    { word: "Maymun", emoji: "🐒" },
    { word: "Ot", emoji: "🐴" },
    { word: "Panda", emoji: "🐼" },
    { word: "Ayiq", emoji: "🐻" },
    { word: "Xo'roz", emoji: "🐓" },
    { word: "Quyon", emoji: "🐰" },
    { word: "Tulki", emoji: "🦊" },
    { word: "Sher", emoji: "🦁" },
    { word: "Sichqon", emoji: "🐁" },
    { word: "Qurbaqa", emoji: "🐸" },
    { word: "Jo'ja", emoji: "🐥" },
    { word: "Yalqov", emoji: "🦥" },
    { word: "Tarvuz", emoji: "🍉" },
    { word: "Uzum", emoji: "🍇" },
    { word: "Pomidor", emoji: "🍅" },
    { word: "Sabzi", emoji: "🥕" },
    { word: "Banan", emoji: "🍌" },
    { word: "Soyabon", emoji: "☂️" },
    { word: "Qor parcha", emoji: "❄️" },
    { word: "Oltiburchak", emoji: "⎔" },
    { word: "To'rtburchak", emoji: "⃞" },
    { word: "Beshburchak", emoji: "⬠" },
    { word: "Uchburchak", emoji: "△" },
    { word: "Parallelogram", emoji: "▰" },
    { word: "Halqa", emoji: "◯" },
    { word: "Romb", emoji: "◆" },
    { word: "Kvadrat", emoji: "⬜" },
    { word: "Doira", emoji: "⚫️" },
    { word: "Sakkizburchak", emoji: "🛑" },
    { word: "Sakkizburchak", emoji: "⯄" },
    { word: "Qalam", emoji: "✏️" }
];

const wordsColumn = document.getElementById('words-column');
const emojisColumn = document.getElementById('emojis-column');
const canvas = document.getElementById('connection-canvas');
const retryButton = document.getElementById('retry-button');
const errorDialog = document.getElementById('error-dialog');
const dialogCloseButton = document.getElementById('dialog-close');
const winDialog = document.getElementById('win-dialog');
const winDialogCloseButton = document.getElementById('win-dialog-close');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let selectedCell = null;
let matchedPairs = [];
let currentLines = [];
let currentGamePairs = [];
let totalPairs = 6;

function initGame() {
    wordsColumn.innerHTML = '';
    emojisColumn.innerHTML = '';
    
    selectedCell = null;
    matchedPairs = [];
    currentLines = [];
    
    const shuffledAllPairs = [...allWordPairs].sort(() => Math.random() - 0.5);
    currentGamePairs = shuffledAllPairs.slice(0, totalPairs);
    
    const shuffledWords = [...currentGamePairs].sort(() => Math.random() - 0.5);
    const shuffledEmojis = [...currentGamePairs].sort(() => Math.random() - 0.5);
    
    shuffledWords.forEach(pair => {
        const cell = document.createElement('div');
        cell.className = 'cell word-cell';
        cell.textContent = pair.word;
        cell.dataset.word = pair.word;
        wordsColumn.appendChild(cell);
        
        cell.addEventListener('click', () => handleCellClick(cell, 'word'));
    });
    
    shuffledEmojis.forEach(pair => {
        const cell = document.createElement('div');
        cell.className = 'cell emoji-cell';
        cell.textContent = pair.emoji;
        cell.dataset.emoji = pair.emoji;
        cell.dataset.word = pair.word;
        emojisColumn.appendChild(cell);
        
        cell.addEventListener('click', () => handleCellClick(cell, 'emoji'));
    });
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleCellClick(cell, type) {
    if (matchedPairs.some(pair => 
        (type === 'word' && pair.wordCell === cell) || 
        (type === 'emoji' && pair.emojiCell === cell))) {
        return;
    }
    
    if (!selectedCell) {
        selectedCell = { cell, type };
        cell.classList.add('selected');
        return;
    }
    
    if (selectedCell.cell === cell) {
        cell.classList.remove('selected');
        selectedCell = null;
        return;
    }
    
    if (selectedCell.type === type) {
        selectedCell.cell.classList.remove('selected');
        cell.classList.add('selected');
        selectedCell = { cell, type };
        return;
    }
    
    const wordCell = type === 'word' ? cell : selectedCell.cell;
    const emojiCell = type === 'emoji' ? cell : selectedCell.cell;
    
    if (wordCell.dataset.word === emojiCell.dataset.word) {
        matchedPairs.push({ wordCell, emojiCell });
        
        wordCell.classList.remove('selected');
        emojiCell.classList.remove('selected');
        wordCell.classList.add('matched');
        emojiCell.classList.add('matched');
        
        drawConnection(wordCell, emojiCell, true);
        
        if (matchedPairs.length === totalPairs) {
            setTimeout(() => {
                winDialog.style.display = 'block';
            }, 500);
        }
    } else {
        wordCell.classList.remove('selected');
        emojiCell.classList.remove('selected');
        
        errorDialog.style.display = 'block';
    }
    
    selectedCell = null;
}

function drawConnection(wordCell, emojiCell, isPermanent) {
    const wordRect = wordCell.getBoundingClientRect();
    const emojiRect = emojiCell.getBoundingClientRect();
    
    const startX = wordRect.right;
    const startY = wordRect.top + wordRect.height / 2;
    const endX = emojiRect.left;
    const endY = emojiRect.top + emojiRect.height / 2;
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = isPermanent ? '#27ae60' : '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    if (isPermanent) {
        currentLines.push({
            startX, startY, endX, endY,
            color: '#27ae60'
        });
    }
}

function redrawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    currentLines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

dialogCloseButton.addEventListener('click', () => {
    errorDialog.style.display = 'none';
});

winDialogCloseButton.addEventListener('click', () => {
    winDialog.style.display = 'none';
});

retryButton.addEventListener('click', () => {
    initGame();
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    currentLines = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    matchedPairs.forEach(pair => {
        drawConnection(pair.wordCell, pair.emojiCell, true);
    });
});

initGame();