Array.prototype.myEvery = function(cb) {

    for(let i = 0; i<this.length; i++) {
        let rv = cb(this[i], i, this);
        if(rv == false) {
            return false;
        }
    }
    return true;
}

let arr = [
    {name: "A",age: 14, gender: "M"},
    {name: "B",age: 29, gender: "M"},
    {name: "J",age: 24, gender: "F"},
    {name: "C",age: 64, gender: "F"},
    {name: "D",age: 94, gender: "M"},
    {name: "E",age: 24, gender: "F"},
    {name: "F",age: 44, gender: "M"},
    {name: "G",age: 14, gender: "F"},
    {name: "H",age: 44, gender: "M"},
    {name: "I",age: 40, gender: "F"}
]

let lage = arr.filter(v => v.age <= 30 && v.age >= 20).myEvery(function(v, i, oarr) {
    if(v.gender == 'F') {
        return true;
    }
    else {
        return false;
    }
});
console.log(lage);