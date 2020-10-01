function smaller(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      result.push(0);
      continue;
    } else {
      for (let x = i + 1, count = 0; x < arr.length; x++) {
        if (arr[i] > arr[x]) count++; 
        if (x == arr.length -1) result.push(count);
      }
    }
  }
  console.log(result);
}


function smallest(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    
  }
}





arr = [5, 4, 7, 9, 2, 4, 4, 5, 6];
smallest(arr)