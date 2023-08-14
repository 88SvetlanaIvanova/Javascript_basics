let grades =  [
  [1, 2, 3, 40, 20, 10, 40],
  [1, 2, 3, 40, 54, 10, 40],
  [1, 2, 3, 40, 20, 10, 40]
];
//Label with Break and Continue
outerloop:for(let i = 0; i <grades.length;i++){
  for(let k = 0; k <grades[i].length;k++){
    console.log(grades[i][k]);
    if(grades[i][k] === 54){
      console.log("You found the value");
      //continue outerloop;
      break outerloop;
    }
    console.log("doing stuff");
  }
  console.log("~~~~~~~~~~~~~~~~~");//this code is ignored with continue outerloop
  //this code is not ignored with a break
}
