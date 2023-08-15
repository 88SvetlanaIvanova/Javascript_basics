//Functions as First Class Citizens (Objects)
// Memoization and Algorithms Optimization
pow.calculated={};

function pow(x, y){
  let stringVersion = x + "^" + y;
  console.log("string version: " + stringVersion);

if(stringVersion in pow.calculated){
  console.log("found!");
  return pow.calculated[stringVersion];
}

  console.log("CALCULATING!");
  let total = 1;
  for (let i = 0; i < y; i++) {
    total *= x;
  }
  //pow.calculated.push(total);
  pow.calculated[stringVersion] = total;
  console.log(pow.calculated);
  return total;
}

pow(3,3);
pow(3,3);
//console.log(pow(3,3));
//console.log(z);

var z = 10;
let coolFunctions = [pow];
//console.log(coolFunctions[0](3,3));

let mathFunctions = {
  power: pow
};

//console.log(mathFunctions.power(3,3));
pow.description = "Will raise numbers to a power";
console.log(pow.description);
function callbackExample (callback){
  return callback(3, 5);
}

//console.log(callbackExample(pow));

function returnAFunction(){
  return pow;
}


//console.log(returnAFunction()(3,5));
