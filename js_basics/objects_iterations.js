const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
}
car.color = 'Black'
console.log(car.color)
console.log(car.year)
console.log(car.make)
console.log(car.model)

console.log('\n----------\n')

for (const x in car){
    console.log(car[x])
}
// looping all the keys and values together for ... of loop

for(const [key,value] of Object.entries(car)){
console.log(key, value)
}

function more5(arr){
 let count = 0;
 for (const number of arr){
if (number > 5) count++
 }
 return count
}
console.log(more5([3, 4, 5, 6, 7]))