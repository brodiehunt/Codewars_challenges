var maxSequence = function(arr) {
  let maxSum = 0,
      tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tempSum = arr[i];
      if (tempSum > maxSum) { maxSum = tempSum; }
      for (let x = i + 1; x < arr.length; x++ ) {
        tempSum += arr[x];
        if (arr[x] > 0 && tempSum > maxSum) {
          maxSum = tempSum; 
        }
      }
    }
  }
  return maxSum;
}

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSequence([]);