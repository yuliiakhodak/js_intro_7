
let num = 75;
if (num <= 50) console.log(num + " is in the 1st half");
else console.log(num + " is in the 2nd half");
if (num <= 25) console.log(num + " is in the 1st quarter");
else if (num > 25 && num <= 50) console.log(num + " is in the 2nd quarter");
else if (num > 50 && num <= 75) console.log(num + " is in the 3rd quarter");
else  console.log(num + " is in the 4th quarter");
/// 2 way
if (num <= 50) {
    console.log(num + " is in the 1st half");
    if (num <= 25) console.log(num + " is in the 1st quarter");
    else console.log(num + " is in the 2nd quarter") 
}
else console.log(num + " is in the 2nd half");{
    if ( num <= 75) console.log(num + " is in the 3nd quarter")
    else console.log(num + " is in the 4th quarter");
}
// TERNARY 3 way

if (num <= 50) {
    console.log(num + " is in the 1st half");
    console.log (num <= 25 ? (num + " is in the 1st quarter"): console.log(num + " is in the 2nd quarter")) 
}
else console.log(num + " is in the 2nd half");{
  console.log (num <= 75 ? (num + " is in the 3nd quarter") : console.log(num + " is in the 4th quarter"));
}

// task 2

let num21, num22;
// 1 way
num21 = 1, num22 = 1;
console.log(num21 === num22 ? true : false);
// prof way 
console.log(num21 === num22);

//  task 3

let num31, num32, num33;
num31 =2, num32 = 4, num33 = 4
// 1 way
console.log (num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0);
// 2 way
console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0 ? true : false);
// 3 way
if(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0) console.log(true);
else console.log(false);

// task 4 

let var4 ="1";

if ( var4.charCodeAt(0) > 47 && var4.charCodeAt(0) < 58 ) console.log(`"${var4}" is a number`);
else console.log(`"${var4}" is a letter`);

/* 32 means the character is space
48 - 57 (both inclusive) means the character is digit [0-9]
65 - 90 (both inclusive) means the character is uppercase letter [A-Z]
97 - 122 (both inclusive) means the character is lowercase letter [a-z]
*/

// Task 
let character = "a";
if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) console.log(`"${character}" is a uppercase letter`);
else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) console.log(`"${character}" is a lowercase letter`);
else console.log(`"INVALID INPUT"`);

// 6

let var5 = "&";
let firstChar = var5.charCodeAt(0);

if(firstChar !== 32 && !(firstChar >= 48 && firstChar <= 57) 
&& !(firstChar >= 65 && firstChar <= 90) && !(firstChar>= 97 && firstChar<=122)){
    console.log(var5 + " is a specail character")
}
else{
    console.log(var5 + " is a not specail character")
}

// task 7

let var6 ="k" 

if((var6.charCodeAt(0)>=65 && var6.charCodeAt(0)<= 90) || 
 (var6.charCodeAt(0)>=97 && var6.charCodeAt(0)<= 122)) {
    if ("aeiouAEIOU".includes(var6)) console.log(`"${var6}"  is a vowel`)
    else console.log(`"${var6}"  is not  a vowel`)
 }
 else console.log("INVALID INPUT");

 //8 
let var7 = "H"
let first = var7.charCodeAt(0);

if (first === 32) console.log(`"${var7}" is a whitespace`)
else if (first >= 48 && first <= 57) console.log(`"${var7}" is a digit`)
else if ((first >= 65 && first <= 90) || (first >= 97 && first <= 122)) console.log(`"${var7}" is a letter`)
else console.log(`"${var7}" is a special character`)

