// three ways to create a string 

// let firstname = "pawan";
// let lastname = "kumar";

// console.log(firstname + " " + lastname);

// let fullname = `${firstname} ${lastname}`;

// console.log(fullname);

// console.log(`my full name ${fullname}`);

// Strings Methods
//let str = "Pawan kumar";
// console.log(str.length);

// console.log(str.slice(-8,9));
//  console.log(str.substring(2,8));
// console.log(str.substr(2,8));


// str.trim() method: it remove the trailing and leading spaces
// let string = '          Hello world             ';
// console.log(string);
// console.log(string.trim());


// str.replace(s1, s2) method: it replace the Substring s1 in to the string s2 in the string 'str'
// let str = 'pawan kumar';
// str.replace("an",'hi'); // now, no change in the original string 'str' 
// console.log(str);
// // so, to replace 'an' by 'hi' we have to assign the replaced string into the new string 's'
// s = str.replace("an", 'hi');
// console.log(s);

// str.toUpperCase() and str.toLowerCase() methods
// let str = "Pawan Kumar";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



// str.charAt(index): it gives the character value at the given index
// and  str.charCodeAt(): it gives the character integer value at the given index
let str = "PAwan";
console.log(str.charAt(2));
console.log(str.charCodeAt(1));
console.log(str[3]); // we can use the string as character array