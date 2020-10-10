let app = new Vue({
    el: '#app',
    data: {
        gameOn: false,
        playerMove: "",
        compMove: "",
        playerWin: 0,
        compWin: 0,
        roundNum: 1,
        winList: [],
        winner: "",
        handImagePlayer: "",
        handImageComp: "",
    },
    methods: {
        playGame() {
            this.gameOn = true;
            moves = ["rock", "paper", "scissors"];

            // calculate computers move
            computersMoveNum = Math.floor(Math.random() * 3);
            this.compMove = moves[computersMoveNum];

            // object for winList array
            obj = {};

            // Player Chooses Rock
            if (this.playerMove == "rock") {
                if (this.compMove == "rock") {
                    this.winner = "Noone";
                }
                if (this.compMove == "paper") {
                    this.winner = "Computer";
                    this.compWin++;
                }
                if (this.compMove == "scissors") {
                    this.winner = "Player";
                    this.playerWin++;
                }
            }
            // Player Chooses Paper
            if (this.playerMove == "paper") {
                if (this.compMove == "rock") {
                    this.winner = "Player";
                    this.playerWin++;
                }
                if (this.compMove == "paper") {
                    this.winner = "Noone";
                }
                if (this.compMove == "scissors") {
                    this.winner = "Computer";
                    this.compWin++;
                }
            }
            // Player Chooses Scissors
            if (this.playerMove == "scissors") {
                if (this.compMove == "rock") {
                    this.winner = "Computer";
                    this.compWin++;
                }
                if (this.compMove == "paper") {
                    this.winner = "Player";
                    this.playerWin++;
                }
                if (this.compMove == "scissors") {
                    this.winner = "Noone";
                }
            }

            // add info to winList array
            obj["round"] = this.roundNum;
            obj["winner"] = this.winner;
            this.winList.push(obj);

            // change to next round
            this.roundNum++;
        }
    },
    computed: {
        playerMovesImage() {
            if (this.playerMove == "rock") {
                return "images/fist.png";
            } else if (this.playerMove == "paper") {
                return "images/paper.png";
            } else if (this.playerMove == "scissors") {
                return "images/scissors.png";
            } else {
                return null;
            }
        }
    }
})