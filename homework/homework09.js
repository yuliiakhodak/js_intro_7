// task 1

const fizzBuzz = num => {
    if (num % 15 === 0) return "FizzBuzz"
    else if (num % 3 === 0) return "Buzz"
    else if (num % 5 === 0) return "Fizz"
    else return num
}
console.log(fizzBuzz(30))

// task 2 

const fizzBuzz2 = num => {
    arr = [];
    for (i = 1; i <= num; i++) {
        if (i % 15 === 0) arr.push("FizzBuzz")
        else if (i % 3 === 0) arr.push("Fizz")
        else if (i % 5 === 0) arr.push("Buzz")
        else arr.push(i)
    }
    return arr
}
console.log(fizzBuzz2(3))

// task 3 

const findSumNumbers = (str) => str.split("").map(x => isNaN(x) ? x = "#" : x).join("").split("#").reduce((x, y) => Number(x) + Number(y))
console.log(findSumNumbers("3for10"))

// Task 4

const findBiggestNumber = str => {
    newArr = []
    str.split("").forEach(x => {
        if (!(x >= 0 && x <= 9)) newArr.push(" ")
        else newArr.push(x)
    });
    numbersArr = (newArr.join("").split(" "))
    let Max = 0;
    for (num of numbersArr) {
        if (parseInt(num) > Max) Max = num
    }
    return Max
}
console.log(findBiggestNumber("ab110c045d"))
console.log(findBiggestNumber("abc$"))
console.log(findBiggestNumber("a1b4c 6#"))
console.log(findBiggestNumber("ab110c045d"))
console.log(findBiggestNumber("525"))
console.log(findBiggestNumber("3 for 10 dollars"))


// Task 5 
const countOccurrencesOfCharacters2 = str => {
    let arr = str.split("");
    let newArr = [];
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            newArr.push(`${count}${arr[i]}`);
            count = 1;
        }
    }
    return newArr.join("");
}

console.log(countOccurrencesOfCharacters2("aaAAa"))

// Task 6 
const fibonacciSeries1 = n => {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibonacciSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }
        return fibonacciSeries;
    }
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

// Task 7 ?????
// Task 8

const findUniques = (arr1, arr2) => {
    if (arr1.length === 0 || arr2.length === 0) return []
    uniqueArr = [];
    arr1.forEach(num => {
        if (!(arr2.includes(num))) uniqueArr.push(num)
    })
    arr2.forEach(num => {
        if (!(arr1.includes(num)) && !(uniqueArr.includes(num))) uniqueArr.push(num)
    })
    return uniqueArr
}
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques([8, 9], [9, 8, 9]))
console.log(findUniques([], []))
console.log(findUniques([-1, -2], [1, 2]))

// Task 9 ?????????????????????????????
const isPowerOf3 = num => {
}
