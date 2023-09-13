/*
We can extract a callback fun ction from builting array methods
*/

let numbers = [1,2,3]
numbers.forEach((number,index) => console.log(index))
let person = {
    name:"Alex",
    age: 28
}

console.log(person)
console.log(JSON.stringify(person))

//JSON.stringify(obj, function)
console.log("\n------\n")
const OnlynameJSON = JSON.stringify(person, (key, value) =>{
    console.log(key, value)
    if(key ==="age" && value < 30) return undefined
    else return value
}) 

console.log(OnlynameJSON)