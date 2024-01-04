const analyzer = {  

  getWordCount: (text) => {
    const wordCount = text.split(" ").length;
    return wordCount;
    //por qué me cuenta los espacios como palabras? q hago para que no pase eso?
  },

  getCharacterCount: (text) => {
    return text.length;
    //const characterCount = text.length;
    //return characterCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const characterCountExcludingSpaces = text.replace(/\s/g, '').length;
    return characterCountExcludingSpaces;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => { 
       
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {console.log(text)
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /*0. Establecer qué es un número (usar regular exp): numeros separados  NaN para ej: 45hjl62)
      1. Recorrer string      
      2. Excluir todo lo que no sea un número 
      3. Contar lo que sí: if....text.length? o text.algo.length?
      */
  },

  getNumberSum: (text) => {console.log(text)
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    /*0. Establecer qué es un número (usar regular exp, NaN para ej: 45hjl62)
      1. Recorrer string
      2. Identificar y almacenar solo los elementos que su valor sea un numero
      3. Almacenar eltos en un array?
      4. Retornar suma de todos los eltos del array creado.
      */  
  },
};

export default analyzer;
