let number = 5;
let randomNumber = Math.floor(Math.random() * 10 + 1)
let attemps = 1;
while ( number !== randomNumber ){
randomNumber = Math.floor(Math.random() * 10 + 1)
attemps++;
}
console.log(`The number is finally ${randomNumber} and it took ${attemps} time/s`)

// task 2
let randomNumber1 = Math.floor(Math.random() * 50 + 1);
attemps = 1;
while(randomNumber1 % 10 !== 0){
    randomNumber1 = Math.floor(Math.random() * 50 + 1);
    attemps++;
}
console.log(`Number is ${randomNumber1} and it took ${attemps} attemp/s`);