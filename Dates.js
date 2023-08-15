var start = new Date(1988,9, 27);// month is zero-based
//console.log(valentine);
let myDate = new Date('1977-11-14');
let myUTCDate = new Date(Date.UTC(2012, 11, 15, 10, 10, 10));
let myDate1 = Date.parse('12 Jan 1980');
console.log(myUTCDate.);
console.log(myDate1);
console.log(myDate);
let end = new Date(2023,7, 14);
//console.log(time);
let oneYear = 1000 * 60 * 60 * 24 * 365;
let total = (end - start)/oneYear;//(end-start) the result is in miliseconds
console.log("Time took: " + total);
