Vue.component('game-results', {
    data: function () {
      return {}
    },
    props: {
      winner: String,
      playerwin: Number,
      compwin: Number,
      winlist: Array,
      resetScore: Function,
    },
    template: `#game-results`,
  })


let app = new Vue({
    el: '#app',
    data: {
        gameOn: false,
        playerMove: "",
        compMove: "",
        playerWin: 0,
        compWin: 0,
        roundNum: "",
        winList: [],
        winner: "",
        winnerTF: false,
        loseTF: false,
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

            // reset win/lose to false, affects the win/lose color
            this.loseTF = false;
            this.winnerTF = false;

            // Player Chooses Rock
            if (this.playerMove == "rock") {
                if (this.compMove == "rock") {
                    this.winner = "Noone";
                }
                if (this.compMove == "paper") {
                    this.winner = "Computer";
                    this.loseTF = true;
                    this.compWin++;
                }
                if (this.compMove == "scissors") {
                    this.winner = "Player";
                    this.winnerTF = true;
                    this.playerWin++;
                }
            }
            // Player Chooses Paper
            if (this.playerMove == "paper") {
                if (this.compMove == "rock") {
                    this.winner = "Player";
                    this.winnerTF = true;
                    this.playerWin++;
                }
                if (this.compMove == "paper") {
                    this.winner = "Noone";
                }
                if (this.compMove == "scissors") {
                    this.winner = "Computer";
                    this.loseTF = true;
                    this.compWin++;
                }
            }
            // Player Chooses Scissors
            if (this.playerMove == "scissors") {
                if (this.compMove == "rock") {
                    this.winner = "Computer";
                    this.loseTF = true;
                    this.compWin++;
                }
                if (this.compMove == "paper") {
                    this.winner = "Player";
                    this.winnerTF = true;
                    this.playerWin++;
                }
                if (this.compMove == "scissors") {
                    this.winner = "Noone";
                }
            }

            // add info to winList array
            obj["round"] = this.roundNum + 1;
            obj["winner"] = this.winner;
            this.winList.push(obj);

            // change to next round
            this.roundNum++;
        },
        resetScore() {
            this.playerWin = 0;
            this.compWin = 0;
            this.winList = [];
            this.winner = "";
            this.roundNum = "";
            this.gameOn = false;
        }
    },
    computed: {
        playerMovesImage() {
            // changes players chosen move image
            if (this.playerMove == "rock") {
                return "images/rock.png";
            } else if (this.playerMove == "paper") {
                return "images/paper.png";
            } else if (this.playerMove == "scissors") {
                return "images/scissors.png";
            } else {
                return null;
            }
        },
        compMovesImage() {
            // changes computers chosen move image
            if (this.compMove == "rock") {
                return "images/rock.png";
            } else if (this.compMove == "paper") {
                return "images/paper.png";
            } else if (this.compMove == "scissors") {
                return "images/scissors.png";
            } else {
                return null;
            }
        },
    }
})