function sortArray(array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) !== 0) oddArray.push(array[i]);
  }

  oddArray = oddArray.sort(function(a, b){return a - b});
  
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) !== 0) {
      array[i] = oddArray[0];
      oddArray.shift();
    }
  }
  console.log(array);
}

sortArray([1, 11, 2, 8, 3, 4, 5])
sortArray([5, 3, 2, 8, 1, 4])