
const numbers = [-5, 0, 5, 10, 23, - 10]
const posNumber = [];
for(num of numbers){
    if(num > 0) posNumber.push(num);
}

console.log(posNumber);

console.log(numbers.filter(x => x > 0))
console.log(numbers.filter(x => x % 2 === 0))

let newArr = numbers.map(x => 
    { if (x < 0)  return  0 
        else  return x
    })

console.log(newArr)

console.log(numbers.map(x => (x < 0) ?  0 : x ))

const fruits = ["Apple", "Orande", "Kiwi", "Pineapple", "Mango", "Melon"];
let countendsE = 0;
console.log(fruits.filter(fruit => fruit.startsWith("M")));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("apple")));
console.log(fruits.filter(fruit => fruit.length === 5));
console.log(fruits.filter(fruit => fruit.length !== 5));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes("a") || fruit.toLowerCase().includes("e")));

console.log(fruits.filter(fruit => fruit.toLowerCase().includes("i")).length);
console.log(fruits.filter(fruit =>fruit.endsWith("e")).length);
console.log(fruits.map(fruit => (fruit[0] + fruit[fruit.length - 1])));