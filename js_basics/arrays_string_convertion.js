const arr1 = [3, 4, 5];
const arr2 = ['Mouse', 'Computer', 'Desk'];

let arr1_Str = arr1.toString();
let arr2_Str = arr2.toString();
console.log(arr1);
console.log(arr2);
console.log(arr1_Str);
console.log(arr2_Str);

let arr2_str_pipe = arr2.join(" | ");
console.log(arr2_str_pipe);

const newArr = arr2_str_pipe.split(" | ")
console.log(newArr);

let str = "Tech"; // 
let newArray = str.split("");
console.log(newArray);


//'1-2-3-4-5-6' 
let string = "1-2-3-4-5-6"
let array = string.split("-")
let newArray1 = array.join(" 000 ")
//let newString = newArray1.toString();

console.log(newArray1);



