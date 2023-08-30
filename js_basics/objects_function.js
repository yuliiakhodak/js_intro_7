const student = {
  fName: "Alex",
  lname: "Smith",
  age : 30,
  fullName: function(){
            return `${this.fName} ${this.lname}`
  },
  info: function(){
            return `${this.fullName()}'s age is ${this.age}`
  }
};
console.log(student.fName);
console.log(student.fullName); //[Function: fullName]
console.log(student.fullName()); //Alex Smith
console.log(student.info()); //Alex Smith