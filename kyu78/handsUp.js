// start with an original array, which has each players down. 
// rules are that player 1 puts 1 hand up then 2, then down.
// player 2 can only put change position on the move where player 1 puts down their hand
// player 3 can only change position on the move where player 2 puts their hands down. 

// some potential logic.
// on each move array[0] +1 unless array[0] === 2 then array[0] = 0,
// on each 3rd iteration, array[1] follows the same pattern
// on each 9th iteration, array[2] follows the same pattern. 
// this is silly way to do it. 
// const getPositions = s => {
//   let arr = [0, 0, 0]
//   for (i = 1; i <= s; i++ ) {
//     if ( (i % 3 == 0) && (i % 9 == 0 )) {
//       arr.forEach((position, index) => {
//         if (position === 2) {
//           arr[index] = 0
//         } else {
//           arr[index] += 1; 
//         }
//       })
//     } else if (i % 3 == 0) {
//       if ( arr[1] === 2) {
//         arr[1] = 0;
//       }else {
//         arr[1] +=1
//       }
//       if (arr[0] == 2) {
//         arr[0] = 0;
//       }else {
//         arr[0] += 1;
//       }
//     } else {
//       if (arr[0] == 2) {
//         arr[0] = 0;
//       }else {
//         arr[0] += 1;
//       }
//     }
//    }
//   console.log(arr)
// }

// getPositions(98)

// new logic. 
// the first player always moves, so whatever the step, the first array index is equal to the modulo of the step by 3.
// the second player makes a move every 3 moves, and therefore will have as many moves as the amount of steps divided by 3.
// this number will be used to determine what positon that player is at. 
// same logic used for the third index of the array but with 9 being the number to divide by. 

const getPositions = s => {
  // create array
  let arr = new Array(3);
  //finding how many moves the second person has had. 
  let indexTwoMoves = Math.floor(s/3)
  // finding how many moves the third person has had.
  let indexThreeMoves = Math.floor(s/9)

  //finding the value of each index.
  arr[0] = s % 3;
  arr[1] = indexTwoMoves % 3;
  arr[2] = indexThreeMoves % 3; 
  
  return arr;
  // console.log(arr)

}

getPositions(98)

// completed
// Note: best solution seemed to be what i have but compressed into less lines of code. 