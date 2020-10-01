function persistance(num) {
  let count = 0;
  do {
    numString = num.toString();
    if (num > 9) count++;
    for (let i = 0, mult = 1; i < numString.length; i ++) {
      mult = mult * numString[i];
      num = mult;
    }
  } while (num > 9)
  console.log(count);
}

persistance(4);