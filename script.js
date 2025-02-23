function loadGame(gameName) {
    const iframe = document.getElementById('game-frame');
    const gameListLeft = document.getElementById('game-list-left');
    const gameListRight = document.getElementById('game-list-right');

    if (gameListLeft && gameListRight) {
        gameListLeft.classList.add('moved-left');
        gameListRight.classList.add('moved-right');
    }
    
    iframe.classList.add('page-turn');

    setTimeout(() => {
        iframe.src = `games/${gameName}/index.html`;
    }, 200);

    setTimeout(() => {
        iframe.classList.remove('page-turn');
    }, 600);
}

function resetGameList() {
    const iframe = document.getElementById('game-frame');
    const gameListLeft = document.getElementById('game-list-left');
    const gameListRight = document.getElementById('game-list-right');

    gameListLeft.classList.remove('moved-left', 'moved-right');
    gameListRight.classList.remove('moved-left', 'moved-right');

    iframe.classList.add('page-turn');

    setTimeout(() => {
        iframe.src = ``;
        // iframe.src = `fireworks/index.html`;
    }, 200);
    
    setTimeout(() => {
        iframe.classList.remove('page-turn');
    }, 600);
}