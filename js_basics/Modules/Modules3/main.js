//import {add} from "./math"
//import{add as dateAdd} from "./date"

// create a module object
import * as MATH from "./math.js"
import * as DATE from "./date.js"

//class example

import MathClass from "./math.js"

console.log(MATH.add(1, 2))
console.log(MATH.substract(4, 5))

console.log(DATE.add(4, 5))
console.log(DATE.getCurrentYear())

const mathObj = new MathClass(4,5)

console.log(mathObj.add())

