import analyzer from './analyzer.js';

document.querySelector("textarea").addEventListener("input", function(event) {
  const textArea = event.target.value;

  const callWordCount = analyzer.getWordCount(textArea);
  document.querySelector('li[data-testid="word-count"]').innerHTML = `Recuento de palabras:<br>${callWordCount}`;

  const callCharacterCount = analyzer.getCharacterCount(textArea);
  document.querySelector('li[data-testid="character-count"]').innerHTML = `Recuento caracteres:<br>${callCharacterCount}`;

  const callCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textArea);
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML = `Recuento de caracteres sin espacios, ni signos:<br>${callCharacterCountExcludingSpaces}`;

  const callAvarageWordLength = analyzer.getAverageWordLength(textArea);
  document.querySelector('li[data-testid="word-length-average"]').innerHTML = `Longitud promedio de palabras:<br>${callAvarageWordLength}`;

  const callNumberCount = analyzer.getNumberCount(textArea);
  document.querySelector('li[data-testid="number-count"]').innerHTML = `Recuento de números:<br>${callNumberCount}`;

  const callNumberSum = analyzer.getNumberSum(textArea);
  document.querySelector('li[data-testid="number-sum"]').innerHTML = `Suma total de números:<br>${callNumberSum}`;

});


const reload = document.getElementById("reset-button").addEventListener("click", function() {
  location.reload();
  reload;
});