//return array of productes in uppercase whose prices >= 100 and in lowercase whose prices < 100
let arr = [
    {name: "T-Shirt", price:25},
    {name: "Headphones", price:125},
    {name: "Keyboard", price:75},
    {name: "Monitor", price:200}
];

let ans = arr.map(v => (v.price >= 100) == true ? v.name.toUpperCase() : v.name.toLowerCase());
console.log(ans);