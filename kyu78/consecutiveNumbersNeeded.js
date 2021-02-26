function consecutiveNumbers(arr) {
  let sortArr = arr.sort((a,b) => a-b);
  let numbersNeeded = 0;
  for (i = 1; i < sortArr.length; i++) {
    numbersNeeded += (sortArr[i] - sortArr[i-1] - 1);

  }
  console.log(sortArr)
  console.log(numbersNeeded)

}


arr = [4, 5, 10, 9, 6]

consecutiveNumbers(arr);