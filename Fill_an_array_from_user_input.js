let grades = [];

while(true){
  let input = prompt("Add a grade");
  if(input === "q" || input === null){
      break;
    }
  grades.push(Number(input));
  console.log(grades);
  grades.pop();//FILO
grades.push(5);
grades.splice(2, 3, 5, 6, 6, 6, 6);
console.log(grades);
grades.splice(2, 4, 0, 0, 0 ,0);
console.log(grades);
