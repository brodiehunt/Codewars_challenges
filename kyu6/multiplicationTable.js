function multiplicationTable(size) {
  let result = [];
  for (let i = 1; i <= size; i++) {
    for (let x = 1, row = []; x <= size; x++) {
      row.push(i * x);
      if (x == size) result.push(row);
    }
  }
  console.log(result);
  return result;
}

multiplicationTable(5)