function list(names) { 
  let string = ''; 
  for (let i = 0; i < names.length; i++) {
    if (i == 0) {
      string = names[i].name; 
    } else if (i == names.length -1) {
      string = string.concat(" & ", names[i].name);
    } else {
      string = string.concat(", ", names[i].name);
    }
  }
  console.log(string);
}
let names = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
list(names)