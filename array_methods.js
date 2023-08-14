
/* Iterate through an array
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 43];
let found = false;
let search = 43;
let largest = grades[0];
let indexLargest;

for (let i = 0; i < grades.length; i++) {
  if(grades[i] > largest){
    //replace largest
    largest = grades[i]
    indexLargest = i;
  }
}
console.log(indexLargest);

if(found){
  //do something
}*/


//Average of array values
/*
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 43];

let count = 0;
let total = 0;

for (let i = 0; i < grades.length; i++) {
  if(grades[i] !== undefined){
    //legit value
    count++;
    total += grades[i];
  }
}
console.log(total/count);*/

/*Fill an array from user input
let grades = [];

while(true){
  let input = prompt("Add a grade");
  if(input === "q" || input === null){
      break;
    }
  grades.push(Number(input));
  console.log(grades);
}*/
// Array methods

let grades = [1, 2, 3, 40, 20, 10, 40];
grades.pop();//FILO
grades.push(5);
grades.splice(2, 3, 5, 6, 6, 6, 6);
//console.log(grades);
grades.splice(2, 4, 0, 0, 0 ,0);
//console.log(grades);
grades.reverse();
//console.log(grades);
grades.sort();
console.log(grades);
grades.sort(function(a, b){return a-b});
console.log(grades);
grades.fill(-1, 0, grades.length);
console.log(grades);
grades.copyWithin();
let gradesB = [1, 2, 3, 40, 20, 10, 40];
let tacos = grades.concat(gradesB);
console.log(tacos);
console.log(grades.includes(22));
console.log(grades.indexOf(3));
console.log(grades.join(" "));

console.log(grades.slice(3, 5));
