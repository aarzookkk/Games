
// print 1 to 5
// for(let i = 1; i<= 5; i++) {
//     console.log("i =" , i);
// }

// console.log("loop has ended");

// // calculate sum of 1 to n
// let sum = 0;
// let n =5;
// for(let i=1; i<=n; i++) {
//     sum = sum + i;
// }

// console.log("sum = " , sum);
// console.log("loop has ended");

//  while loop
//  print 1 to 5

// let i = 1;
// while(i<=5) {
//     console.log("i = ", i);
//     i++;
// }

// let j = 1;
// while(j<=10){
//     console.log("Apna college");
//     j++;
// }

// let j = 20;
// do {
//     console.log("Apna college");
//     j++;
// } while(j<=10);

// //for - of loop : strings & arrays
let str = "Apna college";

let length = 0;
for(let val of str) { //iterator -> characters
    console.log("val =" , val);
    length++;
}

// console.log("string size = ", length);

// // for in loop : objects & arrays

// let student = {
//     name : "Saumya Srijan" ,
//     age : 21 ,
//     cgpa : 8.96 ,
//     isPass : true ,
// };

// for(let key in student) {
//     console.log("key =", key , "value = " , student[key]);
// }

// for (let num =0; num <= 100 ; num++ ) {
//     if(num % 2 === 0){
//         console.log("num = " , num);
//     }
// }


// Create a game where u start with any random number.
//Ask the user to keep guessing the game no. until the user enters the correct value.

// let gameNum = 55; //"55" !==
// let userNum = prompt("Guess the game number : ");

// while(userNum != gameNum) {
//     userNum = prompt("You've entered the wrong number. Guess again..");
// }

// console.log("congratulations, you entered the right number");

//STRINGS

// let str = "ApnaCollege";
// let str2 = 'Aarzoo';


// //obj.key -> str.length , obj[key]-> str[0]:index,indices
// console.log(str[5]);

//TEMPLATE LITERALS

// let obj = {
//     item : "pen",
//     price : 10,
// };

// let output = `The price of ${obj.item} is ${obj.price} rupees`; //string interpolation
// console.log(output);

// console.log("The price of the " , obj.item , "is " , obj.price, "rupees");

// let specialString = `this is a template literal ${1 + 2 + 3}`;
// console.log(specialString);


// //escape characters
// let str = "  Apna\t College "
// console.log("Apna \n college")
// console.log("Apna \t college")
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());

// let str1 = "01234567";
// console.log(str1.slice(1,6));

// let str2 = "apna";
// let str3 = "college";
// // let res = str2.concat(str3);
// let res ="I'm learning coding from " +  str2 + str3 ;
// console.log(res);

// let str = "hello";
// let str2 = "hellololo"
// console.log(str.replace("lo", "p"));
// console.log(str2.replaceAll("lo", "p"));


// let str1 = "IloveJS";

// console.log(str1.charAt(3));

let fullName = prompt("Enter your full name");

let Name = fullName;
let userName = "@" + Name + Name.length ;

console.log(userName);

