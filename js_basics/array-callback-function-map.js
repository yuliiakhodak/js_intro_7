//  callback function - function called in an another function as an argument 

const names = ["John", "Jane", "Alex"];
const namesUpper = names.map(name => name.toUpperCase());
console.log(namesUpper);

const result = names.map((i, name) =>({
    index: i,
    value : name
}))

console.log(result)