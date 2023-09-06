
const numbers = [0, 10, -4, 5, 2, -3];
console.log(numbers.find(x => x > 0));
console.log(numbers.find(x => x < 0));
console.log(numbers.find(x => x % 2 === 0));
console.log(numbers.find(x => x % 2 !== 0));
// findIndex
console.log("\n----------\n")
console.log(numbers.findIndex(x => x > 0));
console.log(numbers.findIndex(x => x < 0));
console.log(numbers.findIndex(x => x % 2 === 0));
console.log(numbers.findIndex(x => x % 2 !== 0));
console.log(numbers.findIndex(x => x > 100));
console.log("\n----------\n")

const things = ["Knife", "Spoon", "Fork", "Pan", "Mug"];
result =  (things.map((value, i)=>({
     value: value,
    index: i
}))).find(obj => obj.value.length === 3)
console.log(result)
/*
const result = things.map((v, i) => {
    return {
        value: v,
        index: i
    }
}).find(obj => obj.value.length === 3);

console.log(result);

/*
// ALTERNATIVE
const result = {
    value: things.find(x => x.length === 3),
    index: things.findIndex(x => x.length === 3)
};

console.log(result);
*/

/*
// ALTERNATIVE
for(let i = 0; i < things.length; i++){
    if(things[i].length === 3) {
        const result = {
            value: things[i],
            index: i
        }
        console.log(result);
        break;
    }
}
*/



*/