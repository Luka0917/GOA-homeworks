function findMinMaxWords(text) {
    const words = text.split(" ");
    let minWord = words[0];
    let maxWord = words[0];
  
    for (let i = 1; i < words.length; i++){
      if (words[i].length < minWord.length){
        minWord = words[i];
      }
      if (words[i].length > maxWord.length){
        maxWord = words[i];
      }
    }
    return [minWord, maxWord];
}
  
const sentence = "Hello my name is Luka i am 16 years old";
  
console.log(findMinMaxWords(sentence));