
function dbLinear(n) {
  function swap(array, leftIndex, rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  }

  function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;
    while ( i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quickSort(array, left, index -1);
      }
      if (index < right) {
        quickSort(array, index, right);
      }
    }
    return array;
  }
  
  let u = new Set ();
  u.add(1);
  let sortedArray;
  for (let i = 0, y, z; i < (n + 100); i++) {
    var array = Array.from(u)
    y = (2 * array[i]) + 1;
    z = (3 * array[i]) + 1;
    u.add(y);
    u.add(z);
  }
  sortedArray = quickSort(array, 0, array.length - 1);
  
  console.log(sortedArray[n]);
  return u;
}

function dbLinear2(n) {
  let u = [1]; 
  
  for (let i = 0, y, z, temp; i <= n; i++) {
    y = (2 * u[i]) + 1;
    z = (3 * u[i]) + 1;
    if (!u.includes(y)) u.push(y);
    if (!u.includes(z)) u.push(z);
    u.sort(function(a, b){return a-b}); 
  }
  console.log(u[n]);
  return u[n];
}

function dblLinear(n) {
  let u = [1], x = 0, y = 0
  for (let i = 0; i < n; i++) {
      let nextX = 2 * u[x] + 1, nextY = 3 * u[y] + 1
      if (nextX <= nextY) {
          u.push(nextX)
          x++
          if (nextX == nextY)
              y++
      } else {
          u.push(nextY)
          y++
      }
  }
   console.log(u[n]);
   console.log(u);
}
// This function works but it is not efficient enough. Things to improve?
// Implement a quicksort ?
// dont check the entire array each time you need to push?
// dbLinear(10)
// dbLinear2(10)
dblLinear(10)