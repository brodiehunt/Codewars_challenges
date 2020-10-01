function isograms(string) { 
  let string = string.toLowerCase();
  let result; 
  if (string.length == 0) {
    result = true;
  } else {
    outer_loop:
    for (let i = 0; i < string.length; i++) { 
      for (let x = 0; x < string.length; x++) {
        if (i == x ) {
          continue;
        } else {
          result = (string.charAt(i) == string.charAt(x)) ? false : true;
          if (result == false) break outer_loop; 
        }
      }
    }
  } 
  console.log(result); 
}

isograms("abcdeEfghij")