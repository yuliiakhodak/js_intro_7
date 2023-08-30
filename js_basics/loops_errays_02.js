
const numbers = [3, 4, 7, 3, 2, 2, 7];
let sum = 0;
for(const number of numbers){
    sum += number
}
console.log(sum / numbers.length)

/*
const First_array = [ 5, 8, 13, 1, 2 ];
const Second_array = [ 9, 3, 67, 1, 0 ];
console.log(First_array);
console.log(Second_array);

for(i=0; i <= First_array.length - 1; i++ ){
if (First_array[i] < Second_array [i]) First_array.splice(i,1,Second_array[i])
}
console.log(First_array)
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers from the first 2 arrays and output the third array as well.
[ 45, 24, 10, 1, 0 ]
*/

const First_array = [ 5, 8, 2, 1, 2 ];
const Second_array = [ 9, 3, 5, 1, 0 ];
let NewArray = [];


for(i = 0; i <= First_array.length - 1; i++ ){
    let productOfNumbers = First_array[i] * Second_array[i]
    NewArray.push(productOfNumbers)
}
console.log(NewArray);


const num = [1, 3 ,0, 2, 6, 8];
for(i = 0; i <= num.length - 1; i++ ){
    if (num[i] % 2 === 0 ) {
    console.log(num[i]);
    break; 
    }
}

let name ="John";
let reversedName = " ";
reversedName = (name.split("").reverse().join(''));
console.log(reversedName);
//2 way
let reversedName2 = ""
for(let i = name.length-1 ; i>=0; i--){
    reversedName2 += name[i]
}
console.log(reversedName2);

// count
const cities = ["Berlin", "Rome", "Chicago", "Kiev", "Istanbul", "Tokyo"];
for(const city of cities){
    if( city.length % 2 !== 0){
        console.log(city);
        break
    }
}
// length more 5
const longCities = [];
for(const city of cities){
    if( city.length > 5) longCities.push(city)
}
console.log(longCities)



