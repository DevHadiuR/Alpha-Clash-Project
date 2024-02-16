// ----------way 01----Normal way------------------------

// 1. when the button click , add hidden class on the same page class list.
// 2.and also remove the hidden class from the next page to show it .

// function play(){
// const homeScreen = document.getElementById("home-screen");
// homeScreen.classList.add("hidden");
// const playGround = document.getElementById("playground-screen");
// playGround.classList.remove("hidden");

// }
// -----------re-use or using common functions -----------//
function play() {
  // hide everything show only the playground
  hideElementById("home-screen");
  showElementById("playground-screen");
  hideElementById("score");
  // reset score and life
  setElementById("current-life", 5);
  setElementById("current-score", 0);
  continueGame();
}
function continueGame() {
  const randomAlphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = randomAlphabet.toUpperCase();
  setBackgroundById(randomAlphabet);
}
//------------------Handle Keyboard function-------------------
document.addEventListener("keyup", handleKeyBoardButtonPress);

function handleKeyBoardButtonPress(event) {
  const playerPressed = event.key;
  console.log(playerPressed)
// ----if playes wants to skip the game pressed esc--------------
if(playerPressed === "Escape"){
  gameOver();
}
  //   --------expected key--------------
  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // ---------check the press right or wrong---------
  if (playerPressed === expectedAlphabet) {
    // update score
    // -------------------way 01------------------------------------------
    /* 1. get the current score*/

    // let currentScore = document.getElementById("current-score");
    // let scoreText = currentScore.innerText;
    // let score = parseInt(scoreText);

    // /*2.increase the score by 1*/
    // let NewScore = score + 1;

    // /*3. show the update score*/
    // currentScore.innerText = NewScore;
    // -------------------------way 02----------------------------------------
    const currentScore = getProduceReduceId("current-score");
    const newScore = currentScore + 1;
    setElementById("current-score", newScore);
    // start new round
    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    // --------------------------way 01-----------------------------------
    // //  1. get the current current life number
    // const currentLife = document.getElementById("current-life");
    // const currentLifeText = currentLife.innerText;
    // const currentLifeInt = parseInt(currentLifeText);

    // // 2.reduce the life count
    // let newLife = currentLifeInt - 1 ;
    // // 3.display updated life count
    // currentLife.innerText = newLife;
    // --------------------way 02------------------------------
    const currentLife = getProduceReduceId("current-life");
    const newLife = currentLife - 1;
    setElementById("current-life", newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}
function gameOver() {
  hideElementById("playground-screen");
  showElementById("score");
  const finalResult = getProduceReduceId("current-score");
  setElementById("final-score", finalResult);
  //  clear the last selected highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundById(currentAlphabet);
}
