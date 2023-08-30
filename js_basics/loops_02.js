
for (let i = 1; i <= Math.floor(Math.random()* 11 + 10); i++){
    if (i % 2 !== 0) console.log(i);
}


let random1 = Math.floor(Math.random()* 10 + 1);
let random2 = Math.floor(Math.random()* 10 + 1);
 
for (let i = Math.min(random1,random2); i <= Math.max(random1,random2); i++ ){
    console.log(i)
}

let school = "TechGlobal School";
for (let i = 0; i <= school.length - 1; i++){
    console.log(school[i]);
}
let count = 0;
for (let i = 0; i <=school.length - 1; i++ ){
    if (school[i].toLowerCase() === "o") count++;
}
console.log(count);