function longShort(string1, string2) {
  let answer;
  if (string1.length > string2.length) {
    answer = string2 + string1 + string2;
  }
  if (string2.length > string1.length) {
    answer = string1 + string2 + string1;
  }
  console.log(answer);
}

longShort('15', '355')

