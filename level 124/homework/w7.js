function countWords(sentence) {
    const wordMap = new Map();
    const words = sentence.toLowerCase().match(/\b\w+\b/g); 

    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    return wordMap;
}

const sentence = "The quick brown fox jumps over the lazy dog. The dog was not amused.";
const wordCount = countWords(sentence);

for (const [word, count] of wordCount) {
    console.log(`"${word}" appears ${count} times`);
}