function tickets(peopleInLine) {
  let till = {"twentyfive" : 0, "fifty" : 0 };
  let canSell;
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      till.twentyfive++;
    } else if (peopleInLine[i] == 50) {
      till.fifty++;
      till.twentyfive--;
    } else {
      if (till.fifty > 0) {
        till.fifty--;
        till.twentyfive--;
      } else {
        till.twentyfive = till.twentyfive - 3;
      }
    }
  canSell = (till.twentyfive < 0) ? "NO" : "YES";
  if (canSell == "NO") break;
  }
  console.log(till);
  console.log(canSell);
  return canSell;
  
}
let peopleInLine = [25, 25, 25, 100];
tickets(peopleInLine)