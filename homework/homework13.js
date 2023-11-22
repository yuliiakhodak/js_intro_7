// Task 1

const countVC = str => {
    const vowels = str.split("").filter(x => ("AaEeOoIiUu".includes(x)))
    const consonants = str.split("").filter(x => !("AaEeOoIiUu".includes(x)) && !(x >=" !" && x <= "@"))

    const obj = {
        vowels: vowels.length,
        consonants: consonants.length
    }
    return obj
}
console.log(countVC("Hello"))
console.log(countVC("Programming"))
console.log(countVC("123AbC"))
console.log(countVC("123!@#xyz"))
console.log(countVC(""))

// Task 2 

const countChars = str =>{
const letters = str.toLowerCase().split("").filter(x => x >= "a" && x <= "z")
const numbers = str.split("").filter(x => x >= "1" && x <= "9")
const specials = str.split("").filter(x => x >= "!" && x <= "/" &&  x >= ":" && x <= "@")

const obj = {
    letters: letters.length,
    numbers: numbers.length,
    specials: specials.length
}
return obj
}

console.log(countChars(" "))

// Task 3 -???
const maxOccurrences = str =>{
 let arr =  str.toLowerCase().replaceAll(" ", "").split("")
 let arr2 = []
 let count = 1 
for (i = 0; i < arr.length; i++ ){
    
}
 return arr
}

console.log(maxOccurrences("Hello"))  


 /// Task 4 

 const starOut = string => {
    for (const el of string.split(' ')) {
        if (el.includes('*'))
            return el.replaceAll('*', '').slice(0, 1) + el.replaceAll('*', '').slice(-1)

    }
    return string
}
console.log(starOut("ab*cd"))
console.log(starOut("ab**cd"))
console.log(starOut("xm*sm*sy"))
console.log(starOut("abc"))
console.log(starOut("***"))
console.log(starOut("   "))
console.log(starOut(""))

const str = "abc"
arr = str.split(" ")
console.log(arr)

 // Task 5

 function romanToInt(str) {
    // Define a map of Roman numeral symbols and their corresponding values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    // Iterate through the Roman numeral string from right to left
    for (let i = str.length - 1; i >= 0; i--) {
        const currentSymbol = str[i];
        const currentValue = romanValues[currentSymbol];

        // If the value of the current symbol is less than the next symbol, subtract it
        if (i < str.length - 1 && romanValues[str[i + 1]] > currentValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
}

// Examples
console.log(romanToInt("I"));                  // Output: 1
console.log(romanToInt("IV"));                 // Output: 4
console.log(romanToInt("CXII"));               // Output: 112
console.log(romanToInt("MMM"));                // Output: 3000
console.log(romanToInt("MMMDCCCLXXXVIII"));   // Output: 3888
console.log(romanToInt("MDCLXVI"));            // Output: 1666