
//bind

function normal(){
  return this;
}
let arrow = () => this;
let newFunc = arrow.bind("hello");
console.log(newFunc());
console.log(normal.bind("this")());
