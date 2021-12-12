let arr = [2,3,4,5,6,7,8];
let even = arr.filter(function(v, i) {
    if(v % 2 == 0) {
        return 1;
    }
    else {
        return 0;
    }
})
console.log(even);

// let odd = arr.filter(v => v % 2 == 1);
// console.log(odd);

let v1 = arr.filter(v => v % 2 == 1); // [3, 5, 7]
let v2 = arr.map(v => v % 2 == 1); // [false, true, false, true, false, true, false]
console.log(v1);
console.log(v2);

// square of even numbers
// let sqofeven = arr.filter(v => v % 2 == 0).map(v => v * v);
// console.log(sqofeven);