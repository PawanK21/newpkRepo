//remove all prime from an array using 'splice'

let arr = [2,3,4,5,6,753,43,57,8,9,10,11,13,16,17,23];

// for(let i = arr.length - 1; i>=0; i--) {
//     let num = arr[i];

//     let flag = true;
//     for(let j = 2; j*j<=num; j++){
//         if(num % j == 0) {
//             //non-prime
//             flag = false;
//             break;
//         }
//     }

//     if(flag) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

arr.splice(1,0,100,110,120);// no value will be removing oly addition here
console.log(arr);