function loadGame(gameName) {
    const gameListLeft = document.getElementById('game-list-left');
    const gameListRight = document.getElementById('game-list-right');

    if (gameListLeft && gameListRight) {
        gameListLeft.classList.add('moved-left');
        gameListRight.classList.add('moved-right');
    }

    document.getElementById("game-frame").src = `games/${gameName}/index.html`;
}

function resetGameList() {
    const gameListLeft = document.getElementById('game-list-left');
    const gameListRight = document.getElementById('game-list-right');

    gameListLeft.classList.remove('moved-left', 'moved-right');
    gameListRight.classList.remove('moved-left', 'moved-right');

    // document.getElementById("game-frame").src = `fireworks/index.html`;
    document.getElementById("game-frame").src = ``;
}