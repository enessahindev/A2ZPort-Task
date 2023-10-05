function findLongestWord(sentence) {
  const words = sentence.split(/\s+/);

  let longestWord = "";
  let maxVowels = 0;

  for (const word of words) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, "");

    const length = cleanWord.length;
    const vowels = cleanWord.match(/[aeiouAEIOU]/g)
      ? cleanWord.match(/[aeiouAEIOU]/g).length
      : 0;

    if (
      length > longestWord.length ||
      (length === longestWord.length && vowels > maxVowels)
    ) {
      longestWord = cleanWord;
      maxVowels = vowels;
    }
  }

  return longestWord;
}

const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers. (Sokrates)";
const longest = findLongestWord(sentence);
console.log("Longest word:", longest);
