
function incrementer1(string) {
  let firstDigit = string.search(/[1-9]/g);
  let length = string.length;
  let finalString;
  if (firstDigit !== -1) {
    let endNumBefore = string.substring(firstDigit, length);
    let stringStart = string.substring(0, firstDigit);
    let endNumAfter = (endNumBefore/1) + 1;
    endNumAfter = endNumAfter.toString();
    if ((endNumAfter.length > endNumBefore.length) && (stringStart.charAt(stringStart.length - 1) == "0")) {
      stringStart = stringStart.substring(0, stringStart.length -1);
    }
    finalString = stringStart + endNumAfter;
  } else {
    if (string.charAt(length -1) == "0") {
      finalString = string.replace(/0\b/, '1')
    } else {
      finalString = string + '1';
    }
  }
  console.log(finalString);
}

let string = "foobar099"

incrementer1(string)