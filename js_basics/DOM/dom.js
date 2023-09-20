// dom

console.log(window)

//alert

//window.alert("Here is the alert message")

// promt - 1. null if you cancel it; 2. string value that user inputs
//let promtResult = window.prompt();
//console.log(promtResult)

//confim - returns true or false
//let confirmResult = window.confirm("Are you ready?")
//console.log(confirmResult)

// innerWidth and innerHeight
console.log(window.innerHeight)
console.log(window.innerWidth)

// scrollTo(x,y)

window.scrollTo(0,0)

// location object
//window.location.reload(); // reloads page

// localStorage

console.log(window.localStorage.length) // 0 empty

window.localStorage.setItem("name", "John")
window.localStorage.setItem("isLoggedIn", "false")
window.localStorage.setItem("UserID", 123)
window.localStorage.setItem("UserInfo", JSON.stringify({name: "John", email:"john@gmail.com"}))
window.localStorage.setItem("UseralletTypes", JSON.stringify(["apple", "google", "cc"]))

// get item in local storage
console.log(window.localStorage.getItem("name"))
console.log(window.localStorage.getItem("isLoggedIn"))
console.log(window.localStorage.getItem("UserID"))
console.log(window.localStorage.getItem("UserInfo"))
console.log(JSON.parse(window.localStorage.getItem("UserInfo")))
console.log(JSON.parse(window.localStorage.getItem("UseralletTypes")))

// remove
window.localStorage.removeItem("name")

window.localStorage.clear(); // clear everything

// activity

let username = window.prompt("What is your name?")
console.log(username)

if (username && username.length > 0){
    window.alert(`Hi ${username}`)
let confirm = window.confirm(`Do you confirm?`)
console.log(confirm)
if(confirm)  window.alert("You have chosen to continue")
else window.alert("You canceled the action")
const usserInnerH = window.innerHeight;
const usserInnerW = window.innerWidth;
console.log(`Height: ${usserInnerH} and width: ${usserInnerW}`);

console.log("Webpage will be reloaded in 10 seconds")
setTimeout(() =>{
    window.location.reload()
}, 10000)




}else{
    window.alert("You didn't provided your name")
}
