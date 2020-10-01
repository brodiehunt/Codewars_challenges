function getSum( a, b) {
  var sum = 0;
   if ( a > b ) {
     for (let i = b; i <= a; i++) {
       sum = sum + i;  
     }
   } else if ( a < b ) {
     for (let i = a; i <= b; i++) {
       sum = sum + i;
     }
   } else {
     return a;
   }
   console.log(sum);
}


getSum( -1, 0)