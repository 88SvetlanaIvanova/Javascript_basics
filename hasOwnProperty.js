let teacher = {
    name: "Caleb Curry",
    teaching: ["math", "science"],
    sayHello: function () {
      let message = this.name + " teaches ";
      this.teaching.forEach(function (e) {
        message += e + " ";
      })
      return message;
    }
  };
  let student = {
    name: "Peasant student",
    major: "English"
  };
  Object.setPrototypeOf(teacher, user);
  Object.setPrototypeOf(student, user);

  student.active = true;
 
  //hasOwnProperty method
  console.log();
  console.log("in teacher? ", teacher.hasOwnProperty("active"));
  console.log("in teacher? ", "active" in teacher);
  console.log("in teacher? ", teacher.active !== undefined);
