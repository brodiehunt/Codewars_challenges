function solve(equation) {
  let equationArray = equation.split('');
  for (let i = 0, x = equationArray.length - 1; i < Math.floor(equationArray.length / 2); i++, x--) {
    let temp = equationArray[i];
    equationArray[i] = equationArray[x]; 
    equationArray[x] = temp; 
  }
  equationReverse = equationArray.join('');
  console.log(equationReverse);
}
solve("100*b/y")

function solve2(equation) {
  let equation
}

// split the string into an array containing whole numbers and individual symbols
// reverse the array, 
// join all elements of array