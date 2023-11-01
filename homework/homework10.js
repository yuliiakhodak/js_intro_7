// Task 1
function calculateTotalPrice1(obj) {
    const priceList = {
        "apple": 2.00,
        "orange": 3.29,
        "mango": 4.99,
        "pineapple": 5.25
    };
    let sum = 0;
    for (let prod in obj) {
        for (let product in priceList) {
            if (prod === product) sum += obj[prod] * priceList[product];
        }
    }
    return sum;
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); // Output: 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); // Output: 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); // Output: 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })); // Output: 12.24


// Task 2 - ??????????????????????????????????

// Task 3

const nthWord = (str, num) => {
    if (num < str.split(" ").length) return str.split(" ")[num - 1]
    else return ""
}
console.log(nthWord("I like programming languages", 2))
console.log(nthWord("QA stands for Quality Assurance", 4))
console.log(nthWord("Hello World", 3))
console.log(nthWord("", 1))

// Task 4
const isArmstrong = num => {
    const arrNum = num.toString().split("")
    numbersOfGigits = arrNum.length
    let newNum = 0;
    arrNum.forEach(x => {
        newNum += parseInt(x) ** arrNum.length
    });
    return newNum === num
}
console.log(isArmstrong(153))
console.log(isArmstrong(123))
console.log(isArmstrong(1634))
console.log(isArmstrong(153))
console.log(isArmstrong(1111))

// Task 5  
const reverseNumber = num => {
   let  revNum = 0
    while (num != 0) {
        revNum = revNum * 10 + num % 10
        num = Math.trunc(num / 10)
    }
    return revNum
}
console.log(reverseNumber(371))
// Task 6

const doubleOrTriple = (arr, boolean) => (boolean === true) ? arr.map(x => x * 2) : arr.map(x => x * 3)

console.log(doubleOrTriple([1, 5, 10], true))
console.log(doubleOrTriple([3, 7, 2], false))

// Task 7 
const splitString = (str, num) => {
    if ((str.length < num) || (str.length % num !== 0)) return ""
    return str.slice(0, num) + " " + str.slice(num)
}

console.log(splitString("JavaScript", 5))
console.log(splitString("Java", 2))
console.log(splitString("Automation", 3))
console.log(splitString("Hello", 6))
console.log(splitString("12", 1))


console.log(371 % 10)