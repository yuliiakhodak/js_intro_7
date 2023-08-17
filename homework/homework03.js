// Task 1
num1 = Math.floor(Math.random()* 100 + 1);
num2 = Math.floor(Math.random()* 100 + 1);
num3 = Math.floor(Math.random()* 100 + 1);
console.log((num1 + num2 + num3) / 3 >= 50);

// TASK 2

number1 = Math.floor(Math.random()* 3 + 1);
number2 = Math.floor(Math.random()* 3 + 1);
number3 = Math.floor(Math.random()* 3 + 1);
console.log(number1, number2, number3);
if  (number1 === number2 && number1 === number3) console.log("TRIPLE MATCH");
else if (number1 === number2 || number2 === number3 || number3 === number1) console.log("DOUBLE MATCH");
else console.log("NO MATCH");

// Task 3

function hasA(string){
    return string.toLowerCase().includes("a")
}
console.log(hasA(""))

// Task 4

function doubleOrTripleWord(string1){
    if (string1.length % 2 === 0) 
    return string1 + string1 + string1
    else return string1+ string1
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Glodal"));

// Task 5 
function firstWord(string2){
    if(string2.includes(" "))
    return string2.slice(0,string2.indexOf(" "))
    else return string2
}
console.log(firstWord("Hello World"));

// TASK 6 

function lastWord(string3){
    return string3.slice(string3.lastIndexOf(" ") + 1)
}
console.log(lastWord("I like Java"));

// TASK 7 
function firstlastWord(string4){
    if(string4.includes(" "))
    return string4.slice(0, string4.indexOf(" ")) + string4.slice(string4.lastIndexOf(" ") + 1)
    else return string4 + string4
}

console.log(firstlastWord("Hello World"))

// Task 8 
function startVowel(string5){
    if (string5.toLowerCase().startsWith("a") || 
    string5.toLowerCase().startsWith("e") || 
    string5.toLowerCase().startsWith("i") ||
    string5.toLowerCase().startsWith("o") ||
    string5.toLowerCase().startsWith("u")) 
    return true;
    else return false;
}
console.log(startVowel("Hello"));
console.log(startVowel("apple"));

// Task 9 

 function swap4(string7){
    return string7.slice(string7.length - 4) + string7.slice(4,string7.length - 4) + string7.slice(0,4)
 }
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));

// Task 10
 
function swapFirstLastWord(string8){
    if (string8.includes(" ")){
    firstWord = string8.slice(0,string8.indexOf(" "));
    lastWord = string8.slice(string8.lastIndexOf(" ") + 1 );
    middle = string8.slice(string8.indexOf(" "),string8.lastIndexOf(" ") + 1);
    return lastWord + middle + firstWord;}
    else return " "
}

console.log(swapFirstLastWord("Hello World"))