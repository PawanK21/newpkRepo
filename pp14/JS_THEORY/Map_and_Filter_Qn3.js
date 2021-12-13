let arr = [5,9,10,2,4,9, 10, 11, 7,6];

let ans = arr.filter(v => v * v <= 1000).map(v => v * v * v);
console.log(ans);