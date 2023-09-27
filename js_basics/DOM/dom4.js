const clickBtn = document.getElementById("clickBtn")

clickBtn.addEventListener("click", (event) => {
    console.log(event.target)
    console.log("You Clicked!", event.target)
})

const dblclick = document.getElementById("dblclick")
dblclick.addEventListener("dblclick", (event) =>{
    console.log("You double clicked", event.target)
})

const mousedownBtn = document.getElementById("mousedownBtn")
mousedownBtn.addEventListener("mousedown", (event) =>{
    console.log("You pressed down =>", event.target)
})

const mousemove = document.getElementById("mousemove")

mousemove.addEventListener("mousemove", (event) =>{
    console.log("You moving inside button", event.target)
})

// keyword 

const body = document.querySelector("body")

// keydown

body.addEventListener("keydown", (event) =>{
    console.log("Keydown event", event.target)
})
// keyup

body.addEventListener("keyup", (event) =>{
    console.log("Keyup event", event.target)
})


const changeInput = document.getElementById("changeInput")

changeInput.addEventListener("change", (event) =>{
    console.log(event.target.value)
})


const formInput = document.getElementById("formInput")

formInput.addEventListener("focus", (event)=>{
    event.target.style.backgroundColor = "darkred"
    event.target.style.color = "white"
})

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) =>{
    console.log(" fORM SUCCESSFULLY submitted!")
    console.log({
        name: "Joe",
        email: "joe@gmail.com"
    })
})

window.addEventListener("scroll", (event) =>{
console.log("you are scrolling the page")
console.log(`and your coordinates are X: ${window.scrollX} and Y: ${window.scrollY}`)
})