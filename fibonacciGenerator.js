function fibonacciGenerator(n){
   
    var output;
    
    if(n === 0 ||n === 1){
        output = [0];
    }
    
    else if(n > 1) {
        output = [0, 1, 1];
        var next;
        while(n > output.length){
        next = output[output.length-1] + output[output.length-2];
        output.push(next);
        }   
    }
    return output;
} 

fibonacciGenerator(3);
