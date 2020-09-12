document.addEventListener('DOMContentLoaded', function () {

    // activate function rps on button click
    document.getElementById('shoot').onclick = function () {
        rps();
    }

})

function rps() {
    let moves = ['rock', 'paper', 'scissors']
    let win = document.getElementById('win');
    let lose = document.getElementById('lose');
    let tie = document.getElementById('tie');

    // hide all messages
    win.style.display = 'none';
    lose.style.display = 'none';
    tie.style.display = 'none';

    // get random value to choose computers move and set computers move
    computersMoveNum = Math.floor(Math.random() * 3);
    let computersMove = moves[computersMoveNum];

    // display computers move onto the page
    document.getElementById('computersMove').innerHTML = computersMove;

    // check users move and apply logic for game
    document.getElementsByName('action').forEach(usersMove => {
        if (usersMove.checked == true) {
            if (computersMove == 'rock') {
                if (usersMove.id == 'rock') {
                    tie.style.display = 'block';
                } else if (usersMove.id == 'paper') {
                    win.style.display = 'block';
                } else if (usersMove.id == 'scissors') {
                    lose.style.display = 'block';
                }
            } else if (computersMove == 'paper') {
                if (usersMove.id == 'rock') {
                    lose.style.display = 'block';
                } else if (usersMove.id == 'paper') {
                    tie.style.display = 'block';
                } else if (usersMove.id == 'scissors') {
                    win.style.display = 'block';
                }
            } else if (computersMove == 'scissors') {
                if (usersMove.id == 'rock') {
                    win.style.display = 'block';
                } else if (usersMove.id == 'paper') {
                    lose.style.display = 'block';
                } else if (usersMove.id == 'scissors') {
                    tie.style.display = 'block';
                }
            }
        }
    })

}