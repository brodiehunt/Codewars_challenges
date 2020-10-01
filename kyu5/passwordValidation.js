function validation(password) {
  let length = false,
      lowerCase = false,
      upperCase = false,
      number = false,
      validCharacters = false,
      result = false;
      alphanumeric = password.match(/\w/g).join(''),
      passwordDown = password.toLowerCase(),
      passwordUp = password.toUpperCase();
  
  if (password.length > 5) {
    length = true;
  }
  
  if (passwordDown !== password) {
    upperCase = true;
  }

  if (passwordUp !== password) {
    lowerCase = true;
  }

  if (password.search(/\d/g) !== -1) {
    number = true;
  }

  if (password === alphanumeric) {
    validCharacters = true;
  }

  if (length && lowerCase && upperCase && number && validCharacters) {
    result = true;
  }
  console.log(result);
}

validation("HHHHHHHH1")