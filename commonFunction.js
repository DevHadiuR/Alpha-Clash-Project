function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}
function getRandomAlphabet() {
  // get or create a alphabet array;
  const alphabetString = "abcdefghijklmnopqrstwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}
function setBackgroundById(elementId) {
  const elementById = document.getElementById(elementId);
  elementById.classList.add("bg-orange-400");
}
