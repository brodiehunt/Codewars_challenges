function oddOrEven(array) {
  const reducer = (accumulator, currentVal) => accumulator + currentVal;

  let reduceResult = array.reduce(reducer, 0)
  if (reduceResult === 0 || reduceResult%2 === 0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}

oddOrEven([0, 1, 5])