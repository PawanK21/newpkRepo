//********************************************** */
//  # HashMaps: { key:value} pairs
// bydefault 'key' is string


const { stringify } = require("querystring");

// let person = {
//   "name" : "Pawan",
//   age : 23,
//   0 : "hello"
// }
// console.log(person["name"]);
// console.log(person.name);// here after person. should be string not numeric
// console.log(person.age);
// console.log(person[0]);
// person["company"] = "pepcoding";
// person.gender = "male";
// console.log(person);

// let arr = [1,2,3,4];
// let obj = {
//   0:1,
//   1:2,
//   2:3,
//   3:4
// }
// arr["name"] = "Pawan";
// console.log(arr);
// console.log(arr.length);
// console.log(arr["name"]);


// ARRAYS OBJECT:- prototype
// console.log(Array.prototype);
// Array.prototype.name = "Pawan";
// let arr = [ 1,2,3,4];
// console.log(arr.name);

// STIRNG OBJECT:- prototype
// String.prototype.len = function() {
//   return(this.length);
// }
// let str = "hello world pawan kumar";
// console.log(str.len());


// NESTED OBJECTS:
// let obj = {
//   obj2: {
//     "hello":"1"
//   }
// }
// console.log(obj.obj2.hello);


// let obj = {
//   "hello": function() {
//     console.log("hello method");
//   }
// }
// obj.hello();


//BLOCK LEVEL SCOPE:
// {
//   var a = 30;
//   console.log(a);
// } console.log(a); // ERROR


// //FUNCTION LEVEL SCOPE:
// function xyz(){
//   var a = 30;
//   console.log(a);
// } console.log(a);


//***************10 Aug 2021******************** */
// Objects Traversing:
/*
# Object.keys(object): it gives the array of the keys of the object
# Object.values(object): it gives the array of the values of the object
# Copy of the arrays objects
# DeepCopy of the arrays objects

*/

// let obj = {
//   1:"hello1",
//   2: "hello2",
//   3: {a: 'a'},
//   4: {b: 'b'}
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// // for(let key of Object.keys(obj)){
// //   // console.log(obj[key]);
// //   console.log(key);
// // }

// let keys_arr = Object.keys(obj); // 'Array' of the all keys present in the object 'obj'
// let values_arr = Object.values(obj);  // 'Array' of the all values present in the object 'obj'

// // for(let i=0; i<keys_arr.length; i++){
// //   console.log(obj[ keys_arr[i] ]);
// // }
// for(let key of keys_arr){
//   console.log(obj[key]);
// }


// *************************************************
// NESTED OBJECT
// question: print all keys of the nested object ?
// let obj = {
//   obj1 : {
//     "obj11" : {1 : "k1"}
//   },
//   obj2 : {
//     "obj21" : {2 : "k2"},
//     "obj22" : {3 : "k3"}
//   }
// }

// Nesting upto the level 2 of the objects
// for(let key in obj){
//   console.log(key);
//   if(typeof(obj[key]) == "object"){
//     for(let key1 in obj[key]){
//       console.log(key1);
//     }
//   } 
// }


// upto genral level nesting of the objects using Recursive function
// let getKeys = function(obj){
//   for(let key in obj){
//     console.log(key);
//     if(typeof(obj[key]) == "object"){
//       getKeys(obj[key]);
//     }
//   }
// }
// getKeys(obj);

// DEEP COPY
 let obj = {
   "hello1" : {},
   "hello2" : 2
 }
 
// // address of the object 'hello1' as it is copy in the new object 'newobj' so that 
// // in future changes in the 'newobj' nested object " 'hello1' object" will affect the 'hello1' of the 'obj'
//  let newobj = {...obj}; 
//  newobj.hello1["hello1.1"] = "pawan";
//  newobj.hello2 = 'hi';
//  console.log(obj);
//   console.log(newobj);
//  console.log(typeof(obj));   :Object



// // DEEP COPY OF THE OBJECTS
 let newObj = {};
 for(let key in obj){
   if(typeof(obj[key] == "object")){
     newObj[key] = {};
   } else {
     newObj[key] = obj[key];
   }
 }
 console.log(newObj);

 let deep  = JSON.parse(JSON>stringify(obj))