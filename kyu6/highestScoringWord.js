function high(x) {
  let wordArray = x.split(' ');
  let charValue = {};
  let highestWord;
  let highestScore = 0;
  for (let i = 1, x = 97; i < 27; i++, x++) {
    charValue[`${x}`] = i;
  }

  for (let i = 0; i < wordArray.length; i++) {
    for (let x = 0, sum = 0; x < wordArray[i].length; x++) {
      sum += charValue[`${wordArray[i].charCodeAt(x)}`];
      if ( x == wordArray[i].length - 1) {
        if (sum > highestScore) {
          highestScore = sum;
          highestWord = wordArray[i];
        }
      } 
    }
  }
  console.log(highestWord);
}

high("longest is the longest word");