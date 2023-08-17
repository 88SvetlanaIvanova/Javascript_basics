/methods for constructor

function User(name, interests){
  this.name = name;
  this.interests = interests;
}
User.prototype.greet = function(){
  console.log("my name is " + this.name, this.interests);
}
  


let me = new User("Svetla",["cooking", "reading"]);
let you = new User("Caleb",["hotWeels"]);

//console.log(me, you);

//me.greet();
//you.greet();

// set up a prototype of an object
let user = {
  active: true
};

let teacher = {
  teaching:["math", "science"]
};
let student ={
  major: "English"
};
Object.setPrototypeOf(teacher, user);
Object.setPrototypeOf(student, user);

student.active = false;



console.log("students",student.active);
console.log("teacher", teacher.active);
