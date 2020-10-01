function reverse(array) {
  for (i = 0, A = []; i < array.length; i++) {
    A.unshift(array[i]);
  }
  console.log(A)
}

reverse([1, 2, 3])