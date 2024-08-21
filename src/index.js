import analyzer from './analyzer.js';

const wordCounter = document.querySelector('li[data-testid="word-count"]');
const characterCounter = document.querySelector('li[data-testid="character-count"]');
const characterNoSpacesCounter = document.querySelector('li[data-testid="character-no-spaces-count"]');
const wordLengthAverageCounter = document.querySelector('li[data-testid="word-length-average"]');
const numberCounter = document.querySelector('li[data-testid="number-count"]');
const numberSumCounter = document.querySelector('li[data-testid="number-sum"]');

document.querySelector("textarea").addEventListener("input", function(event) {
  const textArea = event.target.value;

  const callWordCount = analyzer.getWordCount(textArea);
  wordCounter.innerHTML = `Recuento de palabras:<br>${callWordCount}`;

  const callCharacterCount = analyzer.getCharacterCount(textArea);
  characterCounter.innerHTML = `Recuento caracteres:<br>${callCharacterCount}`;

  const callCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textArea);
  characterNoSpacesCounter.innerHTML = `Recuento de caracteres sin espacios, ni signos:<br>${callCharacterCountExcludingSpaces}`;

  const callAvarageWordLength = analyzer.getAverageWordLength(textArea);
  wordLengthAverageCounter.innerHTML = `Longitud promedio de palabras:<br>${callAvarageWordLength}`;

  const callNumberCount = analyzer.getNumberCount(textArea);
  numberCounter.innerHTML = `Recuento de números:<br>${callNumberCount}`;

  const callNumberSum = analyzer.getNumberSum(textArea);
  numberSumCounter.innerHTML = `Suma total de números:<br>${callNumberSum}`;

});

const reload = document.getElementById("reset-button").addEventListener("click", function() {
  document.querySelector("textarea").value = "";
  wordCounter.innerText = "Recuento de palabras";
  characterCounter.innerText = "Recuento caracteres";
  characterNoSpacesCounter.innerText = "Recuento de caracteres sin espacios, ni signos";
  wordLengthAverageCounter.innerText = "Longitud promedio de palabras";
  numberCounter.innerText = "Recuento de números";
  numberSumCounter.innerText = "Suma total de números";
  // location.reload();
  reload;
});