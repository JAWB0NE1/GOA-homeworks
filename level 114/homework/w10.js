const words = ["Hello", "world", "this", "is", "JavaScript"];

const sentence = words.reduceRight((sentence, word, index) => {
  return index === words.length - 1
    ? word + "."
    : word + " " + sentence;
}, "");
console.log(sentence); 