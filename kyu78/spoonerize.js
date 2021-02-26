function spoonerize(string) {

  let array = string.split(" ");

  let char1 = array[0].charAt(0)
  let char2 = array[1].charAt(0)

  let leftover1 = array[0].slice(1, array[0].length)
  let leftover2 = array[1].slice(1, array[1].length)

  let resultString = char2 + leftover1 + " " + char1 + leftover2;

  return resultString

}

spoonerize("hello world")
