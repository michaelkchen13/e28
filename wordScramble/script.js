Vue.component('guess-results', {
  data: function () {
    return {

    }
  },
  props: {
    gameplayed: Boolean,
    playerwin: Boolean,
    playagain: Function,
  },
  template: `#guess-results`,
  methods: {

  }
})



let app = new Vue({
  el: "#app",
  data: {
    playerName: "",
    playerWin: "",
    gameOn: false,
    gamePlayed: false,
    words: [
      ["apple", "Sometimes red, sometimes delicious"],
      ["washington", "Rushmore’s left edge"],
      ["pumpkin", "Halloween’s favorite fruit"],
      ["football", "Play with your hands or feet, depending on your location"],
    ],
    word: "",
    wordArrayNum: "",
    wordArrayNumNew: "",
    wordArray: [],
    shuffleWord: "",
    hint: "",
    guess: "",
  },
  methods: {
    submitGuess() {
      //test to see if answer is correct and display result
      this.gamePlayed = true;
      if (this.guess == this.word) {
        this.playerWin = true;
        console.log("win");
      } else {
        this.playerWin = false;
      }
    },
    randomWord() {
      // sets random word on start game
      this.wordArrayNum = Math.floor(Math.random() * this.words.length);
      this.word = this.words[this.wordArrayNum][0];
      this.hint = this.words[this.wordArrayNum][1];
      this.gameOn = true;
    },
    playAgain() {
      // sets new scrambled word, tests if word is the same as the last
      this.wordArrayNumNew = Math.floor(Math.random() * this.words.length);
      while (this.wordArrayNumNew == this.wordArrayNum) {
        this.wordArrayNumNew = Math.floor(Math.random() * this.words.length);
      }
      this.wordArrayNum = this.wordArrayNumNew;
      this.word = this.words[this.wordArrayNum][0];
      this.hint = this.words[this.wordArrayNum][1];

      // removes past results and guess
      this.playerWin = null;
      this.guess = "";
    },
  },
  computed: {
    scrambleWord() {
      // scrambles word with array scambler
      this.shuffleWord = "";
      this.wordArray = this.words[this.wordArrayNum][0].split("");

      while (this.wordArray.length > 0) {
        this.shuffleWord += this.wordArray.splice(
          (this.wordArray.length * Math.random()) << 0,
          1
        );
      }
      return "Your mystery word is: " + this.shuffleWord;
    },
  },
});