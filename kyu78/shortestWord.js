function shortestWord(s) {
  let array = s.split(" ");
  let shortest = 20; 

  for (let i = 0; i < array.length; i++) {
    shortest = (array[i].length < shortest) ? array[i].length : shortest;
  }
  return shortest; 
}

shortestWord("Which is the shortest word")