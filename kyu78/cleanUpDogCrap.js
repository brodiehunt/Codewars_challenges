function cleanCrap(x, bags, cap) {
  let totalCapacity = bags * cap;
  let currentCount = 0;
  let result;
  
  outsideLoop: 
  for (let i = 0; i < x.length; i++) {
    for (let y = 0; y < x[i].length; y++) {
      if (x[i][y] === '@') {
        currentCount ++;
        if (currentCount > totalCapacity) {
          result = "Cr@p";
          break outsideLoop;
        }
      } 
      if (x[i][y] === 'D') {
        result = "Dog!!"
        break outsideLoop;
      }
    }
  }
  if (result) {
    return result
    
  } else {
    return "Clean"
  }
}

cleanCrap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)
cleanCrap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)