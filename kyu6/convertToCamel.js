function toCamelCase(str) {

  
  let spacedString = str.replace(/[-_]/g, ' ')
  let stringArray = spacedString.split(' ')
  let newArray = stringArray.map((word, index) => {
    if (index == 0) return word
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  )
  console.log(newArray)
  return newArray.join(" ")
}

toCamelCase("the_stealth_warrior")