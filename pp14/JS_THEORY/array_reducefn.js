// it is a function which tackes the callback

//array ki pheli value pe jo work hoga uska reflection agge ki values pe padega right sir??
let arr = [10, 20, 30, 40, 50];

let val = arr.reduce(function(pv, cv,ci) {
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
})
// console.log(val);

let val2 = arr.reduce((pv, cv, ci) => pv * cv);
console.log(val2);