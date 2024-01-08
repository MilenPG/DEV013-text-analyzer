const analyzer = {  

  getWordCount: (text) => {
    const wordCount = text.trim().split(/\s+/g).length;
    return wordCount;
    //por qué me cuenta los espacios como palabras? q hago para que no pase eso?
  },

  getCharacterCount: (text) => {
    return text.length;
    //const characterCount = text.length;
    //return characterCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const characterCountExcludingSpaces = text.replace(/[.,/#¡!$%^&*;:{}[\]=\-_`~()”“"…¿?\s]/g, '').length;
    return characterCountExcludingSpaces;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => { 
    const wordsCharacters = text.replace(/\s+/g, '').trim().length
    const words = text.trim().split(/\s+/g)
    const textsWords = words.length
    const avarageWordLength = parseFloat((wordsCharacters/textsWords).toFixed(2))
    return avarageWordLength;

    /*0. Definir qué es una palabra
      1. Contar caracteres de cada palabra (elto. del array)
      2. Sacar promedio (dividir suma de todos los caracteres, por el numero de palabras) */       
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    const textArray = text.split(/\s+/g)
    /*const numberCount = textArray.filter(callback((/^[0-9]+$/)textArray[i])).length
    return numberCount; */
 
    let numberCount = 0;
    for (let i=0; i <textArray.length; i++) {
      if ((!isNaN(textArray[i])) && textArray[i].replace(' ', '')) {
        parseFloat((numberCount++).toFixed(2))
      }
    }
    return numberCount;

    //const numberArray = textArray.replace(/^\w+/g, "")
    //const numberArray = textArray.filter(onlyNumber);
    //(function(i) {
    
    //if (textArray[i](/^[0-9]+$/)) {
    //  numberCount = textArray((/^[0-9]+$/)[i]).length;
      
    //textArray(i) = (/^[0-9]+$/); {
    //   return numberArray;
    /*0. Establecer qué es un número (usar regular exp): numeros separados por, NaN para ej: 45hjl62)
      1. Recorrer string      
      2. Tomar cada elemento que coincida con ser un numero y empujarlo a un array. (con if...)(array.filter)(match regex)
      3. Retornar cantidad de elementos del array creado. (array.length)
    */
  },

  getNumberSum: (text) => {
    const textArray = text.split(/\s+/g);
    let numberSum = 0;
    for (let i=0; i<textArray.length; i++) {
      if ((!isNaN(textArray[i])) && textArray[i].replace(' ', '')) {
        /*numberSum = parseFloat((textArray).reduce(function (result, element){
        return result+element;
        }, 0));
        return (parseFloat(numberSum)); */
        numberSum += parseFloat(textArray[i]);
      }
    }
    return numberSum;
  },
    
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  /*0. Establecer qué es un número (usar regular exp, NaN para ej: 45hjl62)
      1. Recorrer string
      2. Identificar y almacenar solo los elementos que su valor sea un numero
      3. Almacenar eltos en un array?
      4. Retornar suma de todos los eltos del array creado.*/
};
export default analyzer;