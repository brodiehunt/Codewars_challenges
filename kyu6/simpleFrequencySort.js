let arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7];
let instanceArray = [];
// create an array from the original with no duplicates. 
let noDupArray = [...new Set(arr)];
// define a function we are going to use to find how many instances of the current indexed value
  //exist in the original array.
let numOfInstances = (array, val) => array.reduce((a,v) => (v === val ? a + 1 : a), 0);
// enter for loop for each element of the array with no duplicates
for (let i = 0, instances; i < noDupArray.length; i++ ) {
  instanceArray.push(numOfInstances(arr, noDupArray[i]));
}

for (let x = 0; x < instanceArray.length; x++ ) {
  let max = x;
  for (let y = x + 1; y < instanceArray.length; y++ ) {
    if (instanceArray[y] > instanceArray[max]) {
      max = y;
    }
    if (max !== x) {
      let tempInstanceArray = instanceArray[x];
      let tempNoDupArray = noDupArray[x];
      noDupArray[x] = noDupArray[max];
      instanceArray[x] = noDupArray[max];
      noDupArray[max] = tempNoDupArray;
      instanceArray[max] = tempNoDupArray;
    }
  }
}
console.log(noDupArray);
console.log(instanceArray);