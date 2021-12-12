
let arr = [f, g, h];
let val = arr.reduce(function(pv, cv, ci) {
    console.log(pv + " - " +cv +  " - " + ci);
    return cv(pv);
}, 5);


let f = (x) => x * x;
let g = (x) => 10 * x;
let h = (x) => x / 5;

// OR

// function f(x) {
//     return x * x;
// }

// function g(x) {
//     return 10 * x;
// }

// function h(x) {
//     return x / 5;
// }