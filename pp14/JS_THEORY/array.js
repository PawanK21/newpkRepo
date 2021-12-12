// new array 
//let arr = [];
//let arr = new Array();

// let arr = [];
// arr.push(24);
// console.log(arr);

// let str1 = "pawan";
// let str2 = "pawan kumar";
// let str3 = "Apple,Mango,Banana";

// console.log(str1.split(" "));
// console.log(str2.split(" "));
// console.log(str3.split(","));

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.join(" "));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

// let arr1 = ['a','b','c'];
// let arr2 = ['d','e','f'];
// console.log(arr2.concat(arr1));


// let arr = [1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

// use of 'in' to treverse  the indeces of the array
// for(let i in arr) {
//   //console.log(i);
//   console.log(arr[i]);
// }


// use of 'of' to treverse in the array -> array element
// for(let i of arr) {
//   //console.log(i);
//   console.log(typeof(i)); // typeof(): it is used to 
//                       //tell about the type of the value;
// }

// console.log('a' + 1 + 2); // string concatenaton
// console.log(1 + 2 + 'a'); 

// console.log(String.fromCharCode("a".charCodeAt(0) + 3));


// const a = [1,2,3,4];
// a[2] = 10;
// // a = [1,2,3];// Error
// console.log(a);


// Use of forEach() method:
// let arr = ["a","b","c","d"];

// arr.forEach(function(value, index, array) {
//   console.log(value, index, array);
// })

// arr.forEach(function(value, index, array) {
//   console.log(value);
// })

// arr.forEach((data, index, array, fourth) => {
//   console.log(data, index, array, fourth);
// })


// 
// function temp (data, myarg1,myarg2,myarg3) {
//   console.log(data, myarg1, myarg2, myarg3);
// }
// arr.forEach(temp.bind(this, "hello", "hello2","hello3"));


// Own forEach function
//  function myForEach(array, callbackfn){
//    for(let i=0; i<array.length; i++){
//      callbackfn(array[i], i, array);
//    }
//  }

//  let a = [1,2,3,4,5];
// myForEach(a, function (value, index, array){
//   console.log(value, index, array);
// });

// ****************** 03 August 2021 ****************
// let arr = [4,5,9,10,14,2,3,20,65,61,60];
// METHOD: array.map(function(){}): To write any logic on a every value value of the array
// -> Map is itself a fn
// -> Map takes as input a callback fn (with v and i)
// -> Map will call the callback multiple time (once for each value)
// -> for each run of callback, map will pass v and i to callback
// -> callback will process the value nad index and return a slingle value
// -> values returned by each  run of callback will be collected in a new array
// -> Map return that new array
// -> ***Map is similer to "$$eval() uses in automationz"
let arr = [2,5,9,8,15,11,6]
let sqarr = arr.map(function(v, i) {
  return v * v;
})
console.log(sqarr);

let a = [
  "Pawan Kumar",
  "Aryan Malik",
  "Suresh Kumar",
  "Pramod Singh",
  "Keshav Malohtra"
]
let na  = a.map(function(v, i) {
  let sa = v.split(" ");
  return sa[0][0] + ". " + sa[1][0] + ". ";
});
console.log(na);
// for(let i=0; i<arr.length; i++){
//   arr[i] += 2;
// }
// console.log(arr);

// let newarr = arr.map(function(value) {
//   return arr;
// })
// console.log(newarr);


// delete the odd element form the array ?
// let newarr = [];
// let j =0 ;
// for(let i=0; i<arr.length; i++){
//   if(i % 2 != 0){
//     newarr[j] = arr[i];
//     j++;
//   }
// }
// console.log(newarr);


// Use of splice(si, no. of steps)
// console.log(arr.splice(1,2)); // it can slice and delete from original array
// console.log(arr);

// Use of slice(si, ei(exclude)) : it can not delete from the original array
// console.log(arr.slice(1,3));
// console.log(arr);


// delete the odd element from the array using splice
// let arr = [4,5,9,10,14,2,3,20,65,61,23];
// for(let i=arr.length-1; i>=0; i--){
//   if((arr[i] % 2) != 0){
//     arr.splice(i,1);
//   }
// }

// sparsing of array:   [ ...arr ]// copy of array
// let temparr = [...arr];
// console.log(arr);

//************************************************
// METHOD: filter(function(){}) -> return: true/false:- To write any logic on a particular value of the array

// let arr = [4,5,9,10,14,2,3,20,65,61,23];
// arr = arr.filter(function(value){
//   // if(value % 2 == 1){
//   //   return false;
//   // } else return true;
//   return value % 2 == 0;
// })
// console.log(arr);

// delete all prime element using filter
// newarr = arr.filter(function(value, idx){
//   let bool = true;
//   for(let i=2; i*i<= idx; i++){
//     if(value % i == 0){
//       bool = false;
//     }
//   }
//   return bool;
// })
// console.log(newarr);



// let arr = [2,5.4,5,34.3,4,-1.11];
// // console.log(arr.sort());
// console.log(arr.sort(function(a,b){
//   // return a - b;
//   // return b - a;
//   // if(a > b){
//   //   return 1;
//   // } else if(a == b){
//   //   return 0;
//   // } else {
//   //   return -1;
//   // }

//   if(a > b){
//     return true;
//   } else {
//     return false;
//   }
// }))

// let arr = [100,20];
// console.log(arr.sort());

//******************************************** */
// let arr = [2,5.4,5,34.3,4,-1.11];
// // METHOD: arr.includes(value);
// console.log(arr.includes(55.4));