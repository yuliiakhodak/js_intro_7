
let name = "John";
if(name[0] === "J" || name[0] === "j"){
    console.log("PARTY")
}
else console.log("SORRY")

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let randomNumber = getRandomNumber(-3,3);
console.log(randomNumber);

if( randomNumber > 0) console.log("POS");
else if (randomNumber < 0) console.log("NEG");
else console.log("ZERO");
if(randomNumber%2 === 0) console.log("EVEN");
else console.log("ODD");


function checDLAge (age){
    if (age > 15) return true;
    return false
}
console.log(checDLAge(10));

let age = 63;
if (age < 65){
   if (65 - age === 1 ) console.log("You have 1 year left to get retired!");
   else console.log("You have " + (65 - age) + " years left to get retired!");
}
else console.log("You can be retired!");

