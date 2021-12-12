//Custom map of array

Array.prototype.myMap = function(callback) {

    let resultArr = [];
    for(let i = 0; i<this.length; i++) {

        let value = this[i];
        let index = i;
        let orignalArray = this[i];

        let returnedVal = callback(value, index, orignalArray);
        resultArr.push(returnedVal);
    }

    return resultArr;
}

let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr1 = arr.map(function(v, i, oarr) {
    return v*v;
})
console.log(sqarr1);

let sqarr2 = arr.myMap(function(v, i, oarr) {
    return v*v;
})
console.log(sqarr2);


let narr = [
    "Sumeet Malik",
    "Arnav Jha",
    "Pawan Kumar",
    "Saurabh Sukla",
    "Vivek Bisla"
]

let ans1 = narr.map(function(v, i, oarr) {
    return v.split(" ")[0][0] + "." + v.split(" ")[1][0] + ".";
})

console.log(ans1);

let ans2 = narr.myMap(function(v, i, oarr) {
    return v.split(" ")[0][0] + "." + v.split(" ")[1][0] + ".";
})

console.log(ans2);
