function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// 0 - 6 

let num = getRandomNumber(0,6);
console.log(num);
if (num === 0 || num === 6){
    console.log("WEEKEND");
}
else{
    console.log("WEEKDAY");
}

if(num > 0 && num < 6 ){
    console.log("WEEKDAY");
}
else{
    console.log("WEEKEND");
}


let point = 1;
let randomNumber = (10);
console.log(randomNumber);

if (randomNumber % 10 === 0){
    console.log(point * 6);
}
else if (randomNumber % 2 === 0){
    console.log(point * 2);
}
else if (randomNumber === 7){
    console.log(point * 7);
}
else{
    console.log(point);
}

// 0 - 6
let day = getRandomNumber(0,6);
console.log(day);

if (day === 0){
console.log("Vacation")
console.log("RED")
}
else if (day === 6){
    console.log("Vacation")
    console.log("GREEN")
}
else{
    console.log("WORK")
    console.log("BLACK")
}

console.log(" " === false);
console.log(!(5**(10/5)))