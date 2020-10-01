function getCount(str) { 
  let count = str.match(/[aeiou]/g);
  return count.length;

}

getCount("seaarch")