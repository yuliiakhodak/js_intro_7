const numbers = [1, 5, 7, 40, 16, 15, 20]

const numbersSorted = numbers.sort()
console.log(numbersSorted)

const numbersReallySorted = numbers.sort((n1, n2) => n1 - n2)
console.log(numbersSorted)