
for (i = 1; i <= 30; i++){
    console.log(i)
}

// task 2

for (i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")
    else if (i % 3 === 0 ) console.log("Fizz")
    else if ( i % 5 === 0 ) console.log("Buzz")
    else console.log(i)
}