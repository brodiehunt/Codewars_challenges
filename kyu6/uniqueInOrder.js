function uniqueInOrder(iterable) {
  let result = [];
  if (typeof(iterable) == "string") {
    iterable = iterable.split('');
  }
  for (let i = 0; i < iterable.length; i++) {
    if (i == 0) {
      result.push(iterable[i]);
    } else {
      if (iterable[i] !== iterable[i - 1]) result.push(iterable[i]);
    }
  }
  console.log(result);
  return result;
}

let str = "Hhhhhhjjjjjhj";
let array = [1, 2, 3, 3, 2, 4, 4, 5];
uniqueInOrder(array)