const analyzer = {  

  getWordCount: (text) => {
    /*const wordCount = text.trim().replace(/[.,/#«»¡!$%^&*;:{}[\]=\-_`~()”“"…¿?\s]/g, '').split(/\s+/g).length;
    return wordCount;*/
    const word = text.trim().replace(/[.,/#«»¡!$%^&*;:{}[\]=\-_`~()”“"'"…¿?]/g, '').split(/\s+/g);
    let wordCount = 0;
    for (let i=0; i<word.length; i++){
      if (word[i] !== '') {
        wordCount = word.length;
      }
    }
    return wordCount;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const characterCountExcludingSpaces = text.replace(/[.,/#«»¡!$%^&*;:{}[\]=\-_`~()”“"…¿?\s]/g, '').length;
    return characterCountExcludingSpaces;
  },

  getAverageWordLength: (text) => { 
    const wordsCharacters = text.replace(/[/#«»¡!$%^&*;:{}[\]=\-_`~()”“"…¿?\s]/g, '').trim().length
    const words = text.trim().split(/\s+/g)
    const textsWords = words.length
    const avarageWordLength = parseFloat((wordsCharacters/textsWords).toFixed(2))
    return avarageWordLength;
  },

  getNumberCount: (text) => {
    const textArray = text.trim().split(/\s+/g)
    /*const numberCount = textArray.filter(callback((/^[0-9]+$/)textArray[i])).length
    return numberCount;*/
    let numberCount = 0;
    for (let i=0; i <textArray.length; i++) {
      if (textArray[i] !== '') {
        const number = Number(textArray[i]);
        if (!isNaN(number)) {
          numberCount++
        }
      }
    }
    return numberCount;
  },

  getNumberSum: (text) => {
    //const textArray = text.match(/\b\d+(\.\d+)?\b/g);
    const textArray = text.split(/\s+/g);
    let numberSum = 0;
    for (let i=0; i<textArray.length; i++) {
      const number = Number(textArray[i]) //para "1.2 jaja 2.5."" no me cuenta el "2.5."
      if (!isNaN(number)) {
        numberSum+= number;
      }
    }
    return numberSum;
  },
};
export default analyzer;