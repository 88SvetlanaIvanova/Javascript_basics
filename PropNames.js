let user = {
    active: false,
    sayHello: function () {
      return this.name + " says hi!";
    }
  };

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
 
  //How to Get an Array of Property Names from an Object

  let properties = [];
  let propertiesObj = [];

  for (let prop in teacher) {
    properties.push(prop);
  }
  console.log(properties);
  for(let propOb in teacher){
    if(teacher.hasOwnProperty(propOb)){
      propertiesObj.push(propOb);
    }
  }
  console.log(propertiesObj);
