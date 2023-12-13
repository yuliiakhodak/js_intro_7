// Task 1

const repeatingX = str => {
    let str1 = str.toLowerCase()
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === 'x' && str1[i + 1] === 'x') return true
    }
    return false
}

console.log(repeatingX("xTechxGlobalx"))
console.log(repeatingX("Hello Xx World"))
console.log(repeatingX("x x x "))
console.log(repeatingX("xxxx"))

// Task 2

const isPerfectSquare = num => {
    if (num === 0) return true
    for (let i = 1; i <= num; i++) {
        if (num / i === i) return true
    }
    return false
}

console.log(isPerfectSquare(25))
console.log(isPerfectSquare(24))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(-1))
console.log(isPerfectSquare(144))



// Task 3

const convertTemperature = (num, str) => {
    if (str === 'Celsius') {
        return (num * 9 / 5) + 32
    }
    if (str === 'Fahrenheit') {
        return (num - 32) * 5 / 9
    }
}

console.log(convertTemperature(100, 'Celsius'))
console.log(convertTemperature(32, 'Fahrenheit'))
console.log(convertTemperature(0, 'Celsius'))
console.log(convertTemperature(212, 'Fahrenheit'))

// Task 4 

const sumOfEvenNumbers = arr => arr.filter(x => x % 2 === 0).reduce((acum, num) => acum + num, 0)

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumOfEvenNumbers([]))

// Task 5

const capsOdds = arr => {

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 !== 0) arr[i] = arr[i].toUpperCase()
    }
    return arr
}
console.log(capsOdds(["Hello", "World"]))
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]))
console.log(capsOdds([]))
