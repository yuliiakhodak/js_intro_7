
function ptintName(name) {
    console.log(name)
}
ptintName("Ulan")


const person = {
    name: "Alan",
    age: 29,
    printName() {
        console.log(this.name)
    },
    Mother: {
        hobies: ["running", "baking"],
        name: "Jane",
        printName() {
            console.log(this.name)
        }
    }
}
person.printName();
person.Mother.printName();

// this keyword inside "normal function"  vs "arrow function"

function logMessage() {
    console.log("this is normal function", this)
}

logMessage()

const logMessage2 = () => {
    console.log("this is normal function", this)
}

logMessage2()

const person3 = {
    name: "Bali",
    languages: ["English", "Aracic", "Chinese"],
    printLanguages() {

        const modLang = this.languages.map(function (lang) {
            console.log(lang)
            //console.log(this)
            return `---${lang}`
        }.bind(this))
        console.log(modLang)
    }
}
person3.printLanguages();

var a = 5;
(function () {
     a = 12
    console.log(a)
})();

let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(state) {
    return innerFunction('Illinois');

    function innerFunction(country) {
      city = 'Chicago';
      return innermostFunction();
      function innermostFunction() {
        return 'Techglobal is at ' + place + ', ' +  country + ', ' + city + ', ' + state;
      }
    
    } 
  }
}
console.log(fullstackHQ())

/*
Define a function incrementalChange that accepts a number and increments the global variable counter 
by that amount. The function should also return the current value of the counter after the increment
 operation.
Each successive call to incrementalChange should progressively change the value held by the counter.
let counter = 0;
*/
var counter = 0;
function incrementalChange (x){
       return   counter += x 
       
}
console.log(incrementalChange(2))
console.log(incrementalChange(6))
console.log(incrementalChange(-1))

let sum = 0;

function sumThings(num1, num2) {
  sum += num1;
  sum = 0;
  sum += num2;
  return sum;
}

console.log(sumThings(2,4)); // is it 6 ?
console.log(sumThings(4,6));   // is it 10 ?
// if not how to fix it?

/*
1. Create a "Course" class which has three properties: "title", "length" and "price" (all set up in 
    the constructor). Instantiate the class twice (two dummy courses of your choice). Output the 
    objects to the console.
2. Add two methods to the "Course" class: A method which calculates the length/price value ("how much 
length do you get for the amount paid") and one method that outputs a nice course summary (including
     title, length and price). Call these methods thereafter (and output the result to the console).
3. Create two new, more specialized, classes: "PracticalCourse" and "TheoreticalCourse". Both should
 be based on the "Course" class but "PracticalCourse" should also have a "numOfExercises" property, 
 "TheoreticalCourse" should have a "publish()" method (which just prints something to the console).
  Instantiate both and use the new AND old properties and methods.
4. Use getters and setters to ensure that the "price" property can only be set to a positive value 
and is returned with a "$" in front of it.
*/

class Course {
    constructor(title, length, price){
     this.title = title,
     this.length = length,
     this._price = price
    }
    get price() {
        return "$" + this._price
    }
    set price(val){
        if (val < 0){
            console.log("Error")
        } 
         this._price = val
    }
    lenghtToPrice(){
        return this.length / this._price
    }
    summery(){
    console.log(`This is ${this.length} ${this.title} course for ${this._price}` )
    }
}

const course1 = new Course("Java", 60, 1000)
const course2 = new Course("C++", 60 , 1200)
console.log(course1)
console.log(course1.lenghtToPrice())
course1.summery()
console.log(course2)
console.log(course2.lenghtToPrice())
course2.summery()
console.log(course1.price) // 1000
console.log(course2.price)//1200

course1.price = 14
console.log(course1.price)

class PracticalCourse extends Course {
    
    constructor(title,length,price, numOfExercises){
       super(title,length,price,)
        this.numOfExercises = numOfExercises;
    }
}
const pCourse = new PracticalCourse("Practical course", 2, 1000,12)
console.log(pCourse)

class TheoreticalCourse extends Course{
    publish () {
       return "Course published today"
    }

}
const tCourse = new TheoreticalCourse("gg", 5, 2220, 10)
console.log(tCourse)


