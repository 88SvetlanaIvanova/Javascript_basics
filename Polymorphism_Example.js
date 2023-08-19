function doSomething(){
  return 1 + 1;
}
let test = new doSomething();

if(doSomething.prototype === Object.getPrototypeOf(test)){
  console.log("match");
}

function Taco(){
  this.toppings = ["cheese"];
};

Taco.prototype.make = function(){
  console.log("Making a taco...");
};

let myTaco = new Taco();
