// Task 1

function tripleWord(arg){
    return arg + arg + arg;
}
console.log(tripleWord("Tech"));

// Task 2

function has4(arg1){
    return arg1.length >= 4;
}
console.log(has4("Tech"))

// Task 3

function celciusToFahrenheit(num){
    return num * 9 / 5 + 32;
}
console.log(celciusToFahrenheit(20));

// Task 4

function kgToPounds(kg){
    return kg * 2.2
}
console.log(kgToPounds(1));
console.log(kgToPounds(100));

// Task 5 

function rectangleArea(x, y){
    return x * y;
}
function rectanglePerimeter(x, y){
    return 2 * (x + y);
}

console.log(rectangleArea(5,4));
console.log(rectangleArea(3,7));
console.log(rectanglePerimeter(5,4));
console.log(rectanglePerimeter(3,7));

// Task 6 

function squareArea(x){
    return x * x;
}

function squarePerimeter(x){
    return x * 4;
}

console.log(squareArea(3));
console.log(squarePerimeter(3));
