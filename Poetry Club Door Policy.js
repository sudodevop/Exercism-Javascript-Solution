export function frontDoorResponse(line) {
  const firstLetter = line[0];
  console.log(firstLetter);
  return firstLetter;
}

export function frontDoorPassword(word) {
  const slicing = word.slice();
  const lowerWord = slicing.toLowerCase().substring(1);
  const upperWord = slicing[0].toUpperCase();
  return upperWord + lowerWord;
  console.log(upperWord + lowerWord);
}

export function backDoorResponse(line) {
  const wordSlice = line.slice();
  const wordTrim = wordSlice.trim();
  const last = wordTrim.charAt(wordTrim.length - 1);
  return last;
  console.log(last);
}

export function backDoorPassword(word) {
  const nowWord = frontDoorPassword(word);
  const finalWord = nowWord + ", please";
  return finalWord;
  console.log(finalWord);
}
