function validSpacing(string) {
  let stringArray = string.split(" ");
  let filteredArray = stringArray.filter((val) => val !== '')
  let reformedString = filteredArray.join(' ');
  if (string === reformedString) {
    console.log(true);
  } else {
    console.log(false);
  }
}

validSpacing('Hello  world ');
validSpacing('Hello world');
