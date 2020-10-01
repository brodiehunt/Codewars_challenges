function sparseSplit(arr) {
  let result = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      tempArr.push(arr[i]);
    } else {
      if (tempArr.length > 0) result.push(tempArr);
      tempArr = [];
    }
  }
  console.log(result);
}

let arr = [1, 2, 3,, 4,, 5,,];
sparseSplit(arr)