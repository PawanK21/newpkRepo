// q-1
// let frames = function(nof, nom) {
//   return (nof * nom * 60)
// };
// console.log(frames(1,1));
// console.log(frames(10,1));
// console.log(frames(10,25));



// q-2
// let addUp = function(n){
//   let ans = 0;
//   for(let i=1; i<=n; i++){
//     ans += i;
//   }
//   return ans;
// };
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));



// q-3
// let binary = function(n) {
//   let pow = 1;
//   let ans = 0;
//   while(parseInt(n) > 0){
//     let r = parseInt(n) % parseInt(2);
//     ans += r * pow;
//     pow = pow * 10;
//     n /= parseInt(2);
//   }
//   return ans;
// };
// console.log(binary('1'));
// console.log(binary('5'));
// console.log(binary('10'));


// q-4
// let tuckIn = function(arr1, arr2){
//   arr = [];
//   arr[0] = arr1[0];
//   let j = 1;
//   for(let i of arr2){
//     arr[j] = i;
//     j++;
//   }
//   arr[arr1.length + arr2.length - 1] = arr1[1];
//   return arr;
// };
// console.log(tuckIn([1,10],[2,3,4,5,6,7,8,9]));
// console.log(tuckIn([15,150],[45,75,35,60]))
// console.log(tuckIn([[1,2], [5,6]], [[3,4]]));



// q-5
// let countTrue = function(arr) {
//   let count = 0
//   for(let i of arr){
//     if(i) count++;
//   }
//   return count;
// };
// console.log(countTrue([true, false, false,false, true]));
// console.log(countTrue([false, false,false]));


// q-6
// let arrOfMul = function(num, len) {
//   let arr = [];
//   let j = 0;
//   for(let i=1; i<=len; i++){
//     arr[j] = num * i;
//     j++;
//   }
//   return arr;
// };
// console.log(arrOfMul(7,5));
// console.log(arrOfMul(12,10));
// console.log(arrOfMul(17,6));


// q-7
// let getLen = function(arr){
//   let count = 0;
//   for(let i of arr){

//     if(isNaN(i)){
//       count += getLen(i);
//     } else {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(getLen([1,[2,3]]));
// console.log(getLen([1,[2,[3,[4,5]]]]));
// console.log(getLen([1,[2],1, [2],1]));


//q-8
// let isContNum = function(s) {
//   for(let i =0; i<s.length; i++){
//     if(s[i] == ' ') continue;
//     if(!isNaN(s[i])){
//       return true;
//     }
//   }
//   return false;
// }

// let numInStr = function(arr) {
//   let ans = [];
//   let j = 0;
//   for(let i of arr) { 
//     if(isContNum(i)){
//       ans[j] = i;
//       j++;
//     }
//   }
//   return ans;
// };
// console.log(numInStr(["1a","a","2b","b"]));
// console.log(numInStr(["test is the test","test12","sd34","abs", "a2"]));


// q-9
// let missing = function(arr1, arr2) {
  
//     for(let j=0; j<arr1.length; j++){
//       if(!arr2.includes(arr1[j])){
//         return arr1[j];
//       } 
//     }
  
//   return arr1[0];
// };
// console.log(missing([1,2,3,4,5,6,7],[1,3,4,5,6,7]));
// console.log(missing([10,34, 5, 6, 9],[34,6,5,10]));
// console.log(missing(["jone","is","pretty","ugly"],["jone","is","pretty"]));




// q-4
// const turnIn = (arr1, arr2) => {
 
//   arr2.reverse();
//   let idx = 1;
//   for (const i of arr2) {
//       // console.log(i);
//       arr1.splice(idx, 0, i);

//   }

//   return arr1;
// }

// console.log(turnIn([1, 10], [2, 3, 4, 5]));
// console.log(turnIn([15, 150], [45, 75, 35]));
// console.log(turnIn([[1, 2], [5, 6]], [[3, 4]]));