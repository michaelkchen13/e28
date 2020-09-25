let app = new Vue({
    el: '#app',
    data: {
        playerMove: "",
        compMove: "",
        playerWin: 0,
        compWin: 0,
        roundNum: 1,
        winList: [],
        winner: ""
    },
    methods: {
        playGame() {
            moves = ["rock", "paper", "scissors"];

            computersMoveNum = Math.floor(Math.random() * 3);
            this.compMove = moves[computersMoveNum];

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

            obj["round"] = this.roundNum;
            obj["winner"] = this.winner;
            this.winList.push(obj);

            this.roundNum++;
        }
    }
})