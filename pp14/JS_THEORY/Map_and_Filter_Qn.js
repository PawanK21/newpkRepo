//return array of products name in uppercase whose prices >= 100
let arr = [
    {name: "T-Shirt", price:25},
    {name: "Headphones", price:125},
    {name: "Keyboard", price:75},
    {name: "Monitor", price:200}
];

//Approach - 1: SMART APPROACH
let ans = arr.filter((v, i, oarr) => v.price >= 100).map((v, i, oarr) => v.name.toUpperCase());
console.log(ans);

//Approach - 2: SIMPLE APPROACH
let ans1 = arr.filter(function(v, i, oarr) {
    if(v.price >= 100) {
        return true;
    }
    else {
        return false;
    }
}).map(function(v, i, oarr) {
    return v.name.toUpperCase();
});
console.log(ans1);