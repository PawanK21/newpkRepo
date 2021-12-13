//gives the cubes of numbers whose cubes are <= 1 lakh

let arr = [54,94,100,28,40,90, 10, 11, 70,60];

let ans = arr.filter(v => (v * v * v) <= 100000).map(v => v * v * v);
console.log(ans);

//Qn
let arr2 = [1,2,3,4,5];
let ans2 = arr2.map(v => v * v).filter(v => v <= 1000).map(v => v * v * v);
console.log(ans2);