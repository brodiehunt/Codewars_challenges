function reverseBits (n) {
  let binary = n.toString(2);
  let reverseBinary = binary.split('').reverse().join('');
  var reverseNumber = parseInt(reverseBinary, 2);
  console.log(reverseNumber)
  
  
  
}

reverseBits(417);