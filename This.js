//this
let me = {
  name:"Svetla",
  outputMe:outputMe
}
 function outputMe(){
  console.log(this);
}
function outputMeStrict(){
  'use strict';
  console.log(this);
}

function Person(){
  console.log(this);
  this.name = "Svetla";
  console.log(this);
}

me.outputMe();// method

outputMe();// function
outputMeStrict();// function strict

let person = new Person();// constructor

//call and apply

function doStuff(input, input2){
  console.log(input, input2);
  console.log(this);
}
let args = [5, 10];
//doStuff.call("hello",5, 10);
//doStuff.apply("hello!", args);


//bind

let newFunction = doStuff.bind("hello", 5, 10);

newFunction();


// Arrow Function
function cube(x){
  return x * x * x;
}
let cubeArrow = (x) => x * x * x;

console.log(cube(5));
console.log(cubeArrow(5));

// this with Arrow Functions
let arrow = () => this;
function normal(){
  return this;
}
console.log(arrow());
console.log(normal());

let functions = {
  arrow: arrow,
  normal: normal, 
  arrowTest:() => this
};

console.log(functions.arrow());
console.log(functions.normal());

// this with Arrow Methods and Object Literals

console.log(functions.arrowTest());
