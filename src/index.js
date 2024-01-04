import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.querySelector("textarea").addEventListener("input", function(event) {
  const textArea = event.target.value;
  /*ESTE SERÁ EL ARGUMENTO DE MI PARAMETRO (analyzer.getCharacterCount(texto);)
  AHORA: 
  - Ir a cada elto. de lista y reemplazar el título (MODIFICAR ¿textContent o innerText?) "Recuento de X", por: `Recuento de X\b${funcionrespectiva}`  */

  const callWordCount = analyzer.getWordCount(textArea);
  //console.log(`Recuento de palabras: ${callWordCount}`);
  document.querySelector('li[data-testid="word-count"]').innerText = `Recuento de palabras:\n${callWordCount}`;

  const callCharacterCount = analyzer.getCharacterCount(textArea);
  //console.log("Recuento caracteres: " + callCharacterCount);
  document.querySelector('li[data-testid="character-count"]').innerText = `Recuento caracteres:\n${callCharacterCount}`;
  /*const showCharacterCount = document.querySelector('li[data-testid="character-count"]');
  showCharacterCount.innerText = `Recuento caracteres \n \n ${callCharacterCount}`

    ? const showCharacterCount = document.querySelector('li[data-testid="character-count"]');
    ? showCharacterCount.innerHTML = `Recuento caracteres\b${characterCount}`;*/

  const callCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textArea);
  //console.log(`Recuento de caracteres sin espacio: ${callCharacterCountExcludingSpaces}`);
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerText = `Recuento de caracteres sin espacio:\n${callCharacterCountExcludingSpaces}`;

});


const reload = document.getElementById("reset-button").addEventListener("click", function() {
  location.reload();
});