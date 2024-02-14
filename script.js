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
  hideElementById("home-screen");
  showElementById("playground-screen");
  continueGame();
}
function continueGame() {
  const randomAlphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = randomAlphabet.toUpperCase();
  setBackgroundById(randomAlphabet);
}
//------------------Handle Keyboard function-------------------
function handleKeyBoardButtonPress(event) {
  const playerPressed = event.key;
  //   --------expected key--------------
  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // ---------check the press right or wrong---------
  if (playerPressed === expectedAlphabet) {
    console.log("you win");
    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lost the game . and you one life");
  }
}
document.addEventListener("keyup", handleKeyBoardButtonPress);
