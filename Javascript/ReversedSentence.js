function reverseWords(sentence) {
  
  const words = sentence.split(' ');

 
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

 
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

let input = prompt("Enter a sentence: ");
const reversedSentence = reverseWords(input);

console.log("Reversed sentence are: "+reversedSentence);