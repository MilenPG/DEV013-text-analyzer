import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.querySelector("textarea").addEventListener("input", function(event) {
  const textArea = event.target.value;
  /*ESTE SERÁ EL ARGUMENTO DE MI PARAMETRO (analyzer.getCharacterCount(texto);)
  AHORA: 
  - Ir a cada elto. de lista y reemplazar el título (MODIFICAR ¿textContent o innerText?) "Recuento de X", por: `Recuento de X\b${funcionrespectiva}`  */

  const callWordCount = analyzer.getWordCount(textArea);
  //console.log(`Recuento de palabras: ${callWordCount}`);
  document.querySelector('li[data-testid="word-count"]').innerHTML = `Recuento de palabras:<br>${callWordCount}`;

  const callCharacterCount = analyzer.getCharacterCount(textArea);
  //console.log("Recuento caracteres: " + callCharacterCount);
  document.querySelector('li[data-testid="character-count"]').innerHTML = `Recuento caracteres:<br>${callCharacterCount}`;
  /*const showCharacterCount = document.querySelector('li[data-testid="character-count"]');
  showCharacterCount.innerText = `Recuento caracteres \n \n ${callCharacterCount}`

    ? const showCharacterCount = document.querySelector('li[data-testid="character-count"]');
    ? showCharacterCount.innerHTML = `Recuento caracteres\b${characterCount}`;*/

  const callCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textArea);
  //console.log(`Recuento de caracteres sin espacio: ${callCharacterCountExcludingSpaces}`);
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML = `Recuento de caracteres sin espacios, ni signos:<br>${callCharacterCountExcludingSpaces}`;

  const callAvarageWordLength = analyzer.getAverageWordLength(textArea);
  document.querySelector('li[data-testid="word-length-average"]').innerHTML = `Longitud promedio de palabras:<br>${callAvarageWordLength}`;

  const callNumberCount = analyzer.getNumberCount(textArea);
  //console.log(`Recuento de números: ${callNumberCount}`);
  document.querySelector('li[data-testid="number-count"]').innerHTML = `Recuento de números:<br>${callNumberCount}`;

  const callNumberSum = analyzer.getNumberSum(textArea);
  //console.log(`Suma total de números: ${callNumberSum}`);
  document.querySelector('li[data-testid="number-sum"]').innerHTML = `Suma total de números:<br>${callNumberSum}`;

});


const reload = document.getElementById("reset-button").addEventListener("click", function() {
  location.reload();
  reload;
});