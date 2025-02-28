let currentGame = '';
        
$(document).ready(function() {
    $('#pages').turn({
        display: 'single',
        acceleration: true,
        gradients: true,
        duration: 500,
        elevation: 350,
        when: {
            turned: function(e, page) {
                if (page == 1) {
                    $('#game-list-left, #game-list-right').removeClass('moved-left moved-right');
                    document.getElementById('game-frame').src = ``;
                } else if (page == 2) {
                    $('#game-list-left').addClass('moved-left');
                    $('#game-list-right').addClass('moved-right');
                }
            }
        }
    });
});

function loadGame(gameName) {
    if (gameName === '') {
        $('#pages').turn('page', 1);
        return;
    }
    
    const currentPage = $('#pages').turn('page');
    
    if (currentPage === 2 && currentGame !== gameName) {
        $('#pages').turn('page', 1);
        
        setTimeout(() => {
            document.getElementById('game-frame').src = `games/${gameName}/index.html`;
            currentGame = gameName;
            
            $('#pages').turn('next');
        }, 800); 
    } 

    else if (currentPage === 1) {
        document.getElementById('game-frame').src = `games/${gameName}/index.html`;
        currentGame = gameName;
        
        $('#pages').turn('next');
    }
}

function resetGameList() {
    $('#pages').turn('page', 1);
}