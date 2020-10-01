function rot13(message){
  let alph1 = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I",
               "j", "J", "k", "K", "l", "L", "m", "M"];
  let alph2 = ["n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V",
               "w", "W", "x", "X", "y", "Y", "z", "Z"];
  let answer = "";
  let patt = /[A-z]/;
  
  for (let i = 0, indexOfChar, temp; i < message.length; i++) {
    if (message.charAt(i).match(patt)) {
      indexOfChar = alph1.indexOf(message.charAt(i));
      if (indexOfChar !== -1) {
        temp = alph2[indexOfChar];
        answer += temp;
      } else {
        indexOfChar = alph2.indexOf(message.charAt(i));
        temp = alph1[indexOfChar];
        answer += temp;
      }
    } else {
      answer += message.charAt(i);
    }
  }
  return answer;
}

let message = "hello123666&&";
rot13(message);