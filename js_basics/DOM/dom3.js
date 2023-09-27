// import all elements

const parentElement = document.getElementById("parent")

// get all the child nodes of parentElement

const childLI = parentElement.childNodes
console.log(childLI)
const children = parentElement.children;
console.log(children)

//get parent element

const countriesHeading = document.getElementById("Countries")
const parentOfHeading = countriesHeading.parentElement
console.log(parentOfHeading)

const firstLi = parentElement.firstChild
const lastLi = parentElement.lastChild

console.log(firstLi)
console.log(lastLi)

const firstLiElement = parentElement.firstElementChild
const lastLiElement = parentElement.lastElementChild

console.log(firstLiElement)
console.log(lastLiElement)

// get siblings element

const leftSibling  = firstLiElement.previousElementSibling
console.log(leftSibling)// null
const rightSibling  = firstLiElement.nextElementSibling
console.log(rightSibling)
const leftSiblingOfLast = lastLiElement.previousElementSibling
console.log(leftSiblingOfLast)

// node attributes

const container = document.querySelector(".container")
const images = document.querySelectorAll("img")
//const images = container.children
const firstImage = images[0]

console.log(firstImage.src)
console.log(firstImage.alt)

const newUrl = "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
firstImage.src = newUrl

console.log(firstImage)

//getAttribute

const imgUrl = firstImage.getAttribute("src")
console.log(imgUrl === newUrl) // true 

//setAttribute

firstImage.setAttribute("alt", "Beautiful nature")

const altText = firstImage.getAttribute("alt")
console.log(altText === "Beautiful nature") // true

const bodyEl = document.querySelector("body")
console.log(bodyEl)
bodyEl.style.backgroundColor = "lightgray"

bodyEl.style.textAlign = "center"

for(let i = 0; i < images.length; i++){
    let imageEl = images[i]
    imageEl.style.width = "250px"
    imageEl.style.height = "150px"
    imageEl.style.border = "4px solid green"
}

const boxEl = document.querySelector(".box")
console.log(boxEl.className)
console.log(boxEl.classList)

boxEl.className = "box2"

boxEl.classList.add("box3")

//bodyEl.innerHTML = " "

parentElement.innerHTML = `
<li>USA</li>
<li>Nigeria</li>
<li>Japan</li>
<li>Germany</li>
<li>France</li>
`

const p2 = document.createElement("p")
console.log(p2)
p2.innerHTML = "Box 2"
console.log(p2)

const textNode = document.createTextNode("Box 3")
p2.appendChild(textNode)
console.log(p2)


//append p2 to box element
bodyEl.append(p2)

