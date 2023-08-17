//Instance Properties vs Prototype Properties
let user = {
  active: false,
  sayHello: function(){
    return this.name + " says hi!";
  }
};

let teacher = {
  name:"Caleb Curry",
  teaching:["math", "science"]
};
let student ={
  name:"Peasant student",
  major: "English"
};
Object.setPrototypeOf(teacher, user);
Object.setPrototypeOf(student, user);

student.active = true;
console.log("teacher", teacher.sayHello());
console.log("student", student.sayHello());
