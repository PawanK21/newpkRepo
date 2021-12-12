let arr = [2, 19, 34, 72, 11, 64, 55, 98];

let sqarr = arr.map(v => v * v);
console.log(sqarr);

let sqarr2 = arr.map( (v, i) => v * v);
console.log(sqarr2);

let oearr  = arr.map(v => v % 2 != 0);
console.log(oearr);