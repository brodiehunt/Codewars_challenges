function count(string) {  
  let obj = {}
  for (let i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (character in obj) {
      obj[`${character}`] = obj[`${character}`] + 1;
    } else {
      obj[`${character}`] = 1;
    }
  }
   return obj;
}

let string = "Hello how are you?"

count('')