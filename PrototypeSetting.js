//  Setting Prototypes with Constructors

  function User() {
    this.active = false;
  }

  User.prototype.sayHello = function () {
    return this.name +" says hi!";
  }

  function Student(name, major){
    this.name = name;
    this.major=major;
  }
  Student.prototype = new User();

  function Teacher(name, teaching){
    this.name = name;
    this.teaching = teaching;
  }

  Teacher.prototype = new User();
// puts sayHello() closer to Teacher object in the hierarchy.
  Teacher.prototype.sayHello = function(){
    return "Teacher says hi!";
  }

  let student = new Student("Peasant student", "English");
  let teacher = new Teacher( "Calen Curry", ["math", "science"]);

  console.log(student, teacher);
