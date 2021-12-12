// some rturns true if someone in the array fullfills the criteria

let arr = [3,9,15,18,21];
let isThereSomeOneEven = arr.some(function(v, i) {
    console.log(v + "-" + i);
    if(v % 2 == 0) {
        return true;
    }
});

console.log(isThereSomeOneEven);

let isSomeValEven = arr.some((v, i) => v % 2 == 1);
console.log(isSomeValEven);