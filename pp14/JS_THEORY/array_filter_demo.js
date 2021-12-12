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

// age of all lediea
let ladies = arr.filter(p => p.gender == 'F');
console.log(ladies);
let lages = arr.filter(p => p.gender == 'F').map(l => l.age);
console.log(lages);