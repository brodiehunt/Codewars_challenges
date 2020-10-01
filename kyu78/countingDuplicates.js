function countingDuplicates(string) { 
  string = string.toLowerCase();
  let count = [];

  for (i = 0; i < string.length; i++) {
    for (x = 0; x < string.length; x++) {
      if ( i !== x ) {
        if ((string[i] == string[x]) && (!count.includes(string[i]))) {
          count.push(string[i]);
  
        }
      } 
    }
  }
  console.log(count.length);
  return count.length; 
}

countingDuplicates("1122aaabb")