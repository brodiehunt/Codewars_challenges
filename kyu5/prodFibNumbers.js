function productFib(prod) {
  let highestSquare = Math.floor(Math.sqrt(prod));
  let x = 0, y = 1, z = 1, temp; 
  while (!((highestSquare > x) && (highestSquare <= y) && (highestSquare < z))) {
    temp = y + z;
    x = y;
    y = z; 
    z = temp;
  }
  if (x * y == prod) {
    console.log([x, y, true]);
  } else if (y * z == prod) {
    console.log([y, z, true]);
  } else {
    if ((x * y) > prod) {
      console.log([x, y, false]);
    } else {
      console.log([y, z, false]);
    }
  }
  
}
  


productFib(84049690)