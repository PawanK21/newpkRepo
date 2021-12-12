let arr = [
    {name: "A",age: 14, gender: "M"},
    {name: "B",age: 84, gender: "M"},
    {name: "J",age: 24, gender: "F"},
    {name: "C",age: 64, gender: "F"},
    {name: "D",age: 94, gender: "M"},
    {name: "E",age: 24, gender: "F"},
    {name: "F",age: 44, gender: "M"},
    {name: "G",age: 14, gender: "F"},
    {name: "H",age: 44, gender: "M"},
    {name: "I",age: 40, gender: "F"}
]

let ans = arr.filter(function(v, i, oarr) {
    if(v.gender == 'F') {
        return true;
    }
    else {
        return false;
    }
}).map(function(v, i, oarr){
    return v.age;
});

console.log(ans);