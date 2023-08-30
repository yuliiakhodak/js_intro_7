// TASK 1

let random = Math.floor(Math.random()*10 + 1);
console.log(random);
console.log(random%2 === 0);

// TASK 2

let randomNumber2 = Math.floor(Math.random()* 10 + 1);
console.log(randomNumber2)
console.log(randomNumber2 % 2 !== 0)

// Task 3 (-5 and 5);

let num1 = Math.floor(Math.random()*11 - 5);
console.log(num1);
console.log(num1 > 0);

// TASK 4 

let num2 = Math.floor(Math.random() * 11 - 5);
console.log(num2);
console.log(num2 < 0);

// TASK 5

let num3 = Math.floor(Math.random()* 50 + 1);
console.log(num3);
console.log(num3 % 5 === 0);

// TASK 6
let num4 = Math.floor(Math.random() * 50 + 1)
console.log(num4);
console.log(num4 % 7 === 0);

// Task 7

let num5 = Math.floor(Math.random() * 10 + 1);
let num6 = Math.floor(Math.random() * 10 + 1);
console.log(num5, num6);
console.log(num5 + num6);

// Task 8 
let num7 = Math.floor(Math.random() * 10 + 1);
let num8 = Math.floor(Math.random() * 10 + 1);
console.log(num7, num8);
console.log(Math.abs(num7 - num8));

// Task 9
let num9 = Math.floor(Math.random() * 10 + 1);
let num10 = Math.floor(Math.random() * 10 + 1);
console.log(num9, num10);
console.log(num9 * num10);

// Task 10
let num11 = Math.floor(Math.random() * 10 + 1);
console.log(num11);
console.log( num11 ** 2);

// Task 11
let num12 = Math.floor(Math.random() * 10 + 1);
console.log(num12);
console.log(num12 ** 3);

// Task 12
let mile = Math.floor(Math.random() * 10 + 1);
console.log(mile);
console.log(mile * 1.6);

// Task 13
let kg = Math.floor(Math.random() * 100 + 1);
console.log(kg);
console.log(kg * 2.2);

// Task 14
let num13 = Math.floor(Math.random() * 3 + 1);
let num14 = Math.floor(Math.random() * 3 + 1);
console.log(num13,num14);
console.log(num13 === num14);

// Task 15
let age = Math.floor(Math.random() * 100 + 1);
console.log(age);
console.log(age >= 16);

// Task 16
let num15 = Math.floor(Math.random() * 10 + 1);
let num16 = Math.floor(Math.random() * 10 + 1);
console.log(num15,num16);
console.log(Math.min(num15,num16));

// TASK 17
let num17 = Math.floor(Math.random() * 10 + 1);
let num18 = Math.floor(Math.random() * 10 + 1);
let num19 = Math.floor(Math.random() * 10 + 1);
console.log(num17,num18, num19);
console.log(Math.min(num17,num18, num19));

// Task 18
let num20 = Math.floor(Math.random() * 10 + 1);
let num21 = Math.floor(Math.random() * 10 + 1);
console.log(num20,num21);
if (num20 > num21)console.log(num21)
else console.log(num20)

// TASK 19
let num22 = Math.floor(Math.random() * 10 + 1);
let num23 = Math.floor(Math.random() * 10 + 1);
let num24 = Math.floor(Math.random() * 10 + 1);
console.log(num22,num23, num24);

if (num22 < num23 && num22 < num24 ) console.log(num22)
else if (num23 < num22 && num23 < num24)console.log(num23)
else console.log(num24)

// Task 20
let num25 = Math.floor(Math.random() * 10 + 1);
let num26 = Math.floor(Math.random() * 10 + 1);
let num27 = Math.floor(Math.random() * 10 + 1);
console.log(num26,num25, num27);
console.log((num25 + num26 + num27)/3);

// Task 21
let num28 = Math.floor(Math.random() * 10 + 1);
let num29 = Math.floor(Math.random() * 10 + 1);
let num30 = Math.floor(Math.random() * 10 + 1);
console.log(num28,num29, num30);
console.log(Math.max(num28,num29,num30) - Math.min(num28,num29,num30));
  // TASK 22
let num31 = Math.floor(Math.random() * 100 + 1);
console.log(num31);

if (num31 <= 25) console.log("1st quarter");
else if (num31 <= 50) console.log("2nd quarter");
else if (num31 <= 75) console.log("3nd quarter");
else console.log("4th quarter");


// Task 23
let num32 = Math.floor(Math.random() * 100 + 1);
console.log(num32);
if (num32 <= 50) console.log("1st half");
else console.log("2nd half")

// Task
let num33 = Math.floor(Math.random()* 10 + 1);
let num34 = Math.floor(Math.random()* 10 + 1);
console.log(num33 + num34);
console.log((num33+num34) % 2 === 0);

// Task 24
let num35 = Math.floor(Math.random()* 10 + 1);
let num36 = Math.floor(Math.random()* 10 + 1);
console.log(num35 + num36);
console.log((num35+num36) % 2 !== 0);

// TASK 25

function rectangleArea(x,y){
    return x * y
}
console.log(rectangleArea(5,4))

// Task 26

function rectanglePerimeter(x,y){
    return 2 * (x + y)
}
console.log(rectanglePerimeter(4,5))

function squareArea(x){
   return  x * x
}
console.log(squareArea(5))

function squarePerimeter(x){
    return  4 * x
 }
 console.log(squarePerimeter(5))

 function doubleWorld(str){
    return str + str
 }
 console.log(doubleWorld("Hello"))

 function firstCharacter(str){
    return str[0]
 }
 console.log(firstCharacter("Hello"))

 function firstTwoCharacters(str){
    return str.slice(0,2)
 }
 console.log(firstTwoCharacters("Hello"))

 function lastCharacter(str){
    return str[str.length - 1]
 }
 console.log(lastCharacter("Hello"))

 function lastTwoCharacters(str){
    return str.slice(str.length-2)
 }
 console.log(lastTwoCharacters("Hello"))

 function firstLast(str){
    return str[0] + str[str.length-1]
 }
 console.log(firstLast("1"))

 function hasFive(str){
    return str.length >= 5
 }
 console.log(hasFive("Tecjho"))

 function middle(str){
    if (str.length % 2 === 0)
    return str.slice(str.length / 2 - 1, str.length / 2 + 1 );
    else return str[(str.length-1)/2]
 }
 console.log(middle("abc"))

 function longer(str1,str2){
    if (str1.length >= str2.length) return str1
    else return str2
 }

 console.log(longer("Hello", "World"))

 function shorter(str1,str2){
    if (str2.length <= str1.length) return str2
    else return str1
 }

 console.log(shorter("Hel", "World"))

 function concat(str1,str2){
    return str1 + str2
 }
 console.log(concat("Hello", "World"))

 function startsVowel(str){
    if (str.toLowerCase().startsWith("a") ||
        str.toLowerCase().startsWith("e") ||
        str.toLowerCase().startsWith("o") ||
        str.toLowerCase().startsWith("u") ||
        str.toLowerCase().startsWith("i"))
        return true
    else return false   
 }
 console.log(startsVowel("Oech"))

let num122 = Math.floor(Math.random()*11 - 5);
console.log(num122);
console.log(num122<0);

let number1 = Math.floor(Math.random() * 10 + 1 );
let number2 = Math.floor(Math.random() * 10 + 1 );
console.log((number1 + number2)% 2 === 0);


function hasFive(str){
  return str.length === 5 
}
console.log(hasFive("Tfch"))

let text = "My name is name";
console.log(text.search("name"))

let mile1 = Math.floor(Math.random()* 10 + 1 );
console.log(mile1 * 1.6)

function shorter(str1,str2){
   if (str1.length < str2.length) return str1
   else return str2
   }

   console.log(shorter("Tecccch", "Global"))

   /*
   Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23" 
 
*/
 function middle(str){
   if (str.length % 2 === 0) return str.slice(str.length/2-1, str.length);
   else return str[Math.floor(str.length/2)]
 }

 console.log(middle("12345"))

 let num = Math.floor(Math.random() * 100 + 1 );
if (num <= 50) console.log("1st half")
else console.log("2 half")


function startsVowel(str){
   if (str.toLowerCase().startsWith("a") ||
  str.toLowerCase().startsWith("e") ||
  str.toLowerCase().startsWith("o") ||
  str.toLowerCase().startsWith("u") ||
  str.toLowerCase().startsWith("i")) 
  return true
  else return false
  }
console.log(startsVowel("eyu"))  