Array.prototype.myFind = function(cb) {

    for(let i = 0; i<this.length; i++) {
        let rv = cb(this[i], i, this);
        if(rv == true) {
            return this[i];
        }
    }
    return undefined;
}

let arr = [
    {name: "A",age: 14, gender: "M"},
    {name: "B",age: 29, gender: "M"},
    {name: "J",age: 24, gender: "F"},
    {name: "C",age: 64, gender: "F"},
    {name: "D",age: 94, gender: "M"},
    {name: "E",age: 32, gender: "F"},
    {name: "F",age: 44, gender: "M"},
    {name: "G",age: 14, gender: "F"},
    {name: "H",age: 44, gender: "M"},
    {name: "I",age: 40, gender: "F"}
]

let foundVal = arr.filter(v => v.age <= 30 && v.age >= 20).myFind((v, i, oarr) => v.gender == 'F');
console.log(foundVal);