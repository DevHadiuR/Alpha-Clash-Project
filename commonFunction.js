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
function removeBackgroundById(elementId) {
  const elementById = document.getElementById(elementId);
  elementById.classList.remove("bg-orange-400");
}
function getProduceReduceId(elementById) {
  const element = document.getElementById(elementById);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}
function setElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const text = elementText.toLowerCase()
  return text;
}
