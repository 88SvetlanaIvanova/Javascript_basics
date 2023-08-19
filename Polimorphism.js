let user = {
  active: false,
  sayHello: function(){
    return this.name + " says hi!";
  }
};

let teacher = {
  name:"Caleb Curry",
  teaching:["math", "science"],
  sayHello: function(){
    let message = this.name + " teaches ";
    this.teaching.forEach(function(e){
      message += e + " ";
    })
    return message ;
  }
};
let student ={
  name:"Peasant student",
  major: "English"
};
Object.setPrototypeOf(teacher, user);
Object.setPrototypeOf(student, user);

student.active = true;
//console.log("teacher", teacher.sayHello());
//console.log("student", student.sayHello());

//Polimorphism

let newMembers = [teacher, student];

newMembers.forEach(function(e){
  console.log(e.sayHello());
});
