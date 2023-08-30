let number = 5;
let randomNumber = Math.floor(Math.random() * 10 + 1)
let attemps = 1;
while ( number !== randomNumber ){
randomNumber = Math.floor(Math.random() * 10 + 1)
attemps++;
}
console.log(`The number is finally ${randomNumber} and it took ${attemps} time/s`)

let number1 = 2;
let attemps1 = 0;
let randomNumber1;
do {randomNumber1 = Math.floor(Math.random() * 10 + 1)
    attemps1++;
} while (number1 !== randomNumber1 )
console.log(`The number is finally ${randomNumber1}, ${attemps1}`)