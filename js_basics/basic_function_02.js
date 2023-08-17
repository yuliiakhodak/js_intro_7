
function product3(arg0, arg1, arg3) {
   return arg0 * arg1 * arg3;
}

console.log(product3(1, 2, 3)); // 6
console.log(product3(5, 6, 10)); // 300

// Tricky

console.log(product3("2", "5","3")); // 30
console.log(product3(null, "", false)); // 0 
console.log(product3("  ", true, "10abc")); // NaN

function isOdd (arg){
return arg % 2!== 0
}

console.log(isOdd(5)); // true
console.log(isOdd(10)); // false
console.log(isOdd(-5)); // true 

console.log(isOdd(2.3)); // true


function isEven (arg){
    return arg % 2 === 0
    }

console.log(isEven(5)); //  false
console.log(isEven(10)); //  true
console.log(isEven(-5)); //  false
     
// Tricky

console.log(isOdd ("")); // false
console.log(isEven ("")); // true
console.log(isOdd ("" * 5 + true)); // true
console.log(isEven ("2" / 1 + 8)); // true