const numbers = [5, 10, 100];
console.log(numbers.reduce((sum, number) => sum + number));
console.log((numbers.filter(num => num % 2 === 0)).reduce((sum, number) => sum + number))
console.log(numbers.reduce((sum, number) =>(number % 2 === 0 ? sum + number : sum),0))