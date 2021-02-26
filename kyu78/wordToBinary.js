// iterate through given string and return an array with the asicII number for each character. 
// convert each number into a binary number. 

function wordToBin(str){
  let arr = str.split('').map((character) => {
     return (character.charCodeAt(0) >>> 0).toString(2);
    })
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length < 8) {
      let zerosNeeded = 8 - arr[i].length;
      let arr1 = new Array(zerosNeeded).fill(0);
      // let zeroString = arr1.toString()
      arr[i] = arr1.toString() + arr[i]
    }
  }
  console.log(arr)
}


wordToBin('A')

// this was the best solution
function wordToBin(str) {
  return Array.from(str, c => "0" + c.charCodeAt(0).toString(2))
}