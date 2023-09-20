// Accessing a dom elements
// get element by id

const pageHeading = document.getElementById("page-heading")
console.log(pageHeading)
console.log(typeof pageHeading)
const container = document.getElementsByClassName("container")
console.log(container)

for(let i=0; i<container.length; i++){
    console.log(`Node ${i}: ${container[i]}`)
}

// get element by nametag

const imagies = document.getElementsByTagName("img")
console.log(imagies)
for(let i=0; i<container.length; i++){
    console.log(imagies[i])
}

const part1 = document.querySelector("#part1")
const part2 = document.querySelector(".part2")
const section = document.querySelector("section")
console.log(part1)
console.log(part2)
console.log(section)

const allImages = document.querySelectorAll('img')
console.log(allImages)