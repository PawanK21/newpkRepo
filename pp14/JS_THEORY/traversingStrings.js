// traversing of string using for loop
  // let str = "Pawan kumar";
  // for(let i=0; i<str.length; i++){
  //   console.log(str.charAt(i));
  // }

  // let str = "Pawan Kumar";
  // let ans = "";
  // for(let i=0; i<str.length; i++){
  //   ans += str.charAt(i);
  // }
  // console.log(ans);


// print the frequency of character

// let str = "jalsjdfljljsgafbffffasfakjsdfj";
// let cnt = 0;
// for( let i=0; i<str.length; i++){
//   if(str.charAt(i) == 'a'){
//     cnt++;
//   }
// }
// console.log(cnt);

//sum of the all character of the string
// let str = "123";
// let ans = 0;
// for(let i=0; i<str.length; i+=2){
//   ans += parseInt(str.substr(i,2));
// }
// console.log(ans);

// str = "1A2"; find the sum all character of the str
// let str = "1A2";
// let ans = 0;
// for(let i=0; i<str.length; i++){
//   //if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
//   if(!isNaN(str[i])){
//     ans += parseInt(str[i]);
//   } else {
//     ans += parseInt(str.charCodeAt(i));
//   }
// }
// console.log(ans);




// 1. reverse String
// let str = "pawan kumar";
// let s = "";
// for(let i=str.length-1; i>=0; i--){
//   s += str[i];
// }
// console.log(s);



// reverse the string letters by letters
let str = "pawan kumar";
let s = "";
for(let i=str.length-1; i>=0; i--){
  s += str[i];
}

// let sp = undefined;
// let ep = s.length;
// let ans = "";
// for(let i=s.length-1; i>=0; i--){
//   if(s[i] == " "){
//     sp = i+1;
//     ans += s.substring(sp,ep) + " ";
//     ep = i;
//     sp = undefined;
//   } else if(i == 0){
//     sp = 0;
//     ans += s.substring(sp,ep);
//   }  
// }
// console.log(ans);


// let str1 = "pawan kumar Hello world";
// let revstr = "";
// for(let i=str1.length-1; i>=0; i--){
//   revstr += str1.charAt(i); 
// }

// let sp1 = 0;
// let ep1 = undefined;
// let ans1 = "";
// for(let i=0; i<str1.length; i++){
//   if(revstr[i] == " "){
//     ep1 = i;
//     ans1 = " " + revstr.substring(sp1,ep1) + ans1;
//     sp1 = i+1;
//     ep1 = undefined;
//   } else if(i == revstr.length-1){
//     ep1 = revstr.length;
//     ans1 = revstr.substring(sp1, ep1) + ans1;
//   }
// }
// console.log(ans1);



// 3. is string palindromic
// let str = "pawan nawap";
// let lo = 0;
// let hi = str.length-1;
// while(lo < hi){
//   if(str[lo] != str[hi]){
//     console.log(false);
//     return;
//   }
//   lo++;
//   hi--;
// }
// console.log(true);
