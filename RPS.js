const RPS = ['Rock', 'Paper', 'Scissor'];

    function choose() {
        const randomIndex = Math.floor(Math.random() * RPS.length);
        return RPS[randomIndex];
    }
    

    const startEnd = document.getElementById('startEnd');
    let r = document.getElementById('rock'),
        p = document.getElementById('paper'),
        s = document.getElementById('scissor'),
        playerAction = '',
        computerAction = '',
        scorePlayer = 0,
        scoreComputer = 0,
        winFor = '';
    const gameElements = document.getElementsByClassName('game');

    function winner() {
        if (playerAction === computerAction) {
            document.getElementById('win').textContent = "It's a Draw!!!";
            return;
        } else if (playerAction === 'Rock') {
            (computerAction === 'Paper') ? winFor = 'Computer' : winFor = 'Player';
            document.getElementById('win').textContent = String(winFor + ' WON!!');
        } else if (playerAction === 'Paper') {
            (computerAction === 'Scissor') ? winFor = 'Computer' : winFor = 'Player';
            document.getElementById('win').textContent = String(winFor + ' WON!!');
        } else if (playerAction === 'Scissor') {
            (computerAction === 'Rock') ? winFor = 'Computer' : winFor = 'Player';
            document.getElementById('win').textContent = String(winFor + ' WON!!');
        }
        (winFor === 'Player') ? scorePlayer++ : scoreComputer++;
    }

    function updateScore() {
        document.getElementById('playerAction').textContent = playerAction;
        document.getElementById('computerAction').textContent = computerAction;
        document.getElementById('scorePlayer').textContent = scorePlayer;
        document.getElementById('score_Computer').textContent = scoreComputer;

        if (scoreComputer === 5) {
            document.getElementById('end').textContent = 'WINNER IS COMPUTER!!!';
            scorePlayer = 0;
            scoreComputer = 0;
            for (const element of gameElements) {
                element.style.display = 'none';
            }        }
        if (scorePlayer === 5) {
            document.getElementById('end').textContent = 'WINNER IS PLAYER!!!';
            scorePlayer = 0;
            scoreComputer = 0;
            for (const element of gameElements) {
                element.style.display = 'none';
            }
        }
    }

    r.addEventListener('click', function () {
        playerAction = 'Rock';
        computerAction = choose();
        winner();
        updateScore();
    });

    p.addEventListener('click', function () {
        playerAction = 'Paper';
        computerAction = choose();
        winner();
        updateScore();
    });

    s.addEventListener('click', function () {
        playerAction = 'Scissor';
        computerAction = choose();
        winner();
        updateScore();
    });
    startEnd.addEventListener('click', function (){
        for (const element of gameElements) {
            element.style.display = 'flex';
        }
        playerAction = '',
        computerAction = '',
        scorePlayer = 0,
        scoreComputer = 0,
        winFor = '';
        updateScore();
        location.reload();
    });

