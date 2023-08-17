// objects

function User(name, interests){
  this.name = name;
  this.interests = interests;
}

let meToo = new User("Svetla",["cooking", "reading"]);

let you = new User("Caleb",["hotWeels"]);
//console.log(meToo);
//console.log(you);

// factory function
function newUser(name, interests){
  let person = {
    name:name,
    interests: interests
  };
  return person;
}
let meToo1 = newUser("Svetla",["cooking", "reading"]);

let you1 = newUser("Caleb",["hotWeels"]);
console.log(meToo1);
console.log(you1);
