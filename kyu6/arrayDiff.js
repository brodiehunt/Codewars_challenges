function difference(array1, array2) {
  let array = []
  for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < array1.length; x++) {
      if (array2[i] !== array1[x]) {
        array.push(array1[x]);
      }
    }
  }
  console.log(array);
}

// difference([1,16,14,14],[14,16])

function arrayDiff(a, b) {
  let array = a;
  let i = 0;
  function checkEquality(num) {
    return num !== b[i];
  }

  for (i; i < b.length; i++) {
    array = array.filter(checkEquality);
  }
  console.log(array);
}

arrayDiff([1,8,2], [])