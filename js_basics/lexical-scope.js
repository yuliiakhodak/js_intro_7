// Scope
const schoolName = "Tech Global";
function schoolProfile(){
    const schoolname = "Global Tech"
    function saySchoolName(){
        function writeSchoolName(){
            return schoolName;
        }
        return writeSchoolName();
    }
   return  saySchoolName();
    
}

console.log(schoolProfile()); // Tech Global
//console.log(writeSchoolName()); error

// Define a function
function getCityName(){
    const cityName = "Des Plaines";
    return cityName
}
function showAddress(){
   return "2860 S River Rd " + getCityName();
}

console.log(showAddress())

hello();
// bye(); 
function hello(){
    bye()
    console.log("Hello");

    function bye(){
        console.log("Bye");
    }
}

// bind()

let nameObj = {
    name: "Tony"
}
let PrintName = {
    name: "steve",
    sayHi: function (){
        // Here "this" points to nameObj
        console.log(this.name); 
    }
}

PrintName.sayHi(); //steve
const sayHiBind = PrintName.sayHi.bind(nameObj)
sayHiBind(); // Tony