const words = ["world", "hello"];
const sentence = words.reduceRight((acc, word) => acc + " " + word);
console.log(sentence); 