// let arr = [1,2,3,4,5,6,7,8,9];
// let ans = [];

// for(let n of arr) {
//     if(n % 2 == 0) {
//         ans.unshift(n);
//     }
//     else {
//         ans.push(n);
//     }
// }
// console.log(ans);

let arr = [1,2,3,4,5,6]


let evenCount = 0;
let oddCount = 0;
let i=0;
while(i+evenCount<arr.length-oddCount){
    
    if(arr[i]%2==0){
        evenCount+=1;
    }
    else{
        arr.push(arr.shift());
        oddCount++;
    }
}
console.log(arr);