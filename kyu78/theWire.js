function decode(string) {
  let emptArray = [];

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === "5") {
      emptArray.push("0")
    }else if (string.charAt(i)=== "0") {
      emptArray.push("5")
    } else {
      let val = 10 - string.charAt(i); 
      emptArray.push(`${val}`)
    }
  }
  let decodedNum = emptArray.join('');
  return decodedNum
}

decode("4103432323");