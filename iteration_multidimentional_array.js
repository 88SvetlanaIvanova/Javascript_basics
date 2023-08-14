
let grades =  [
  [1, 2, 3, 40, 20, 10, 40],
  [1, 2, 3, 40, 20, 10, 40],
  [1, 2, 3, 40, 20, 10, 40]
];
/*
for(let i = 0; i <grades.length;i++){
  for(let k = 0; k <grades[i].length;k++){
    console.log(grades[i][k]);
  }
  console.log("~~~~~~~~~~~~~~~~~");
}*/
grades.forEach(
  function(row){
    row.forEach(function(col){
        console.log(col);
    });
    console.log("~~~~~~~~~~");
  });
