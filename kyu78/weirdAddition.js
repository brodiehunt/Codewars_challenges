function addition(one, two) {
  let numberOne = one.toString();
  let numberTwo = two.toString();
  let string = '';
  while ((numberOne.length !== numberTwo.length)) {
    if (numberOne.length > numberTwo.length) {
      numberTwo = '0' + numberTwo;
    } else {
      numberOne = '0' + numberOne;
    }
  }
  for (let i = 0; i < numberOne.length; i++) {
    let num1 = numberOne.charAt(i) / 1,
        num2 = numberTwo.charAt(i) / 1,
        result = num1 + num2;
        string = string + result;
  }

  console.log(numberOne);
  console.log(numberTwo);
  console.log(string);
}

addition(66, 5555)