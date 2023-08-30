const person = {
    fName : "John",
    age : 25,
    city : "Chicago"
};
console.log(person); // { fName: 'John', age: 25, city: 'Chicago' }

person.lName = 'Doe'
person ['gender'] = 'Male'

console.log(person); //{ fName: 'John', age: 25, city: 'Chicago', lName: 'Doe' gender: 'Male' }

console.log(person.age); // 25

const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
}
car.color = 'Black'
console.log(car.color)
console.log(car.year)
console.log(car.make)
console.log(car.model)
