
// TASK 1
// Double or Triple the Word

const doubleOrTripleWord = str => (str.length % 2 === 0) ? str + str + str : str + str

console.log(doubleOrTripleWord("Techo"))

// TASK 2  functionfirstlastWord()

const firstLastWord = str => {
     const arr = str.split(" ")
    return arr[0] + arr[arr.length - 1 ]
}
console.log(firstLastWord(""))

// TASK 3 HAS VOWEL

const hasVowel = str =>{
 const  arr = str.split("")
  if (arr.some(e => "aAeEoOuUIi".includes(e))) return true
  else return false
}

console.log(hasVowel("Java"))

// Task 4 ---- Start Vowel