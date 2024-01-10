console.log("Hello World");
// This is a single line comment
/* This 
is
a 
multi
line
comment */

//  Arithmetic Operators


//  console.log("a + b = " , a + b);
//  let c = a - b;
//  console.log("a - b = ", c);
//  console.log("a * b = " , a * b);
//  let d = a / b;
//  console.log("a / b = " , d);
//  console.log("a % b = ", a % b); // Modulus
//  console.log("a ** b = " , a ** b);//exponentiation a^b=2^4

 //UNARY OPERATORS
//  let a = 2;
//  let b = 4;
// console.log("a =" , a , " & b =", b);
// // a ++;
// console.log("a++ = " ,a++);
// console.log("a++ =" , a);
// // b--;
// console.log("++b = " ,++b);
// console.log("--b = " ,--b);
// console.log("--b = " ,b);


// ASSIGNMENT OPERATORS
// let a = 2;
// let b = 4;

// a+=4; //a = a+4
// console.log("a =",a);
// a-=4;
// console.log("a =",a);
// a*=4;
// console.log("a =",a);
// a/=4;
// console.log("a =",a);
// a%=4;
// console.log("a =",a);
// a**=4;
// console.log("a =",a);


// Comparison Operators
// let a = 2;
// let b = 4;
// console.log("a == b " , a == b);
// console.log("a != b " , a != b);
// console.log("a > b " , a > b);
// console.log("a <= b " , a <= b);
// let x = 6; //number
// let y = "6"; //string ; string -> number

// console.log("a === b " , a === b);
// console.log("a !== b " , a !== b);
// console.log("a <= b " , a <= b);


// logical operators
// let a = 5;
// let b = 6;

// let cond1 = a<b; //true
// let cond2 = a==5; //true

// console.log("cond1 && cond2 = " , cond1 && cond2);
// console.log("cond 1 && cond3 = " , a<b && a>b);
// let cond3 = a>b; //false
// let cond4 = b == 3; //false
// console.log("cond1 || cond4 = ", cond1 || cond4);
// console.log("!(cond1) = ",  !(cond1));


// conditional statements
// let age = 18;

// if(age >= 18) {
//     console.log("you can vote");
// }

// if(age < 18) {
//     console.log("you CANNOT vote")
// }

// let mode = "light";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if(mode === "light") {
//     color = "white";
// }

// console.log(color);

// let mode = "light";
// let mode = "blue";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }


// console.log(color);

// let age = 34;

// if(age < 18) {
//     type = "junior";
// } else if (age > 60){
//     type = "senior";
// } else {
//     type = "middle";
// }

// console.log(type);

// let mode = "dark";
// let color;

// if(mode="dark"){
//     color = "black";
// } else if(mode = "blue"){
//     color = "blue";
// } else if(mode="pink"){
//     color = "pink";
// } else{
//     color="white";
// }
// console.log(color);

// ternary operators : 3 operands

// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// switch

// alert("hello!"); // one time pop-up
// let name = prompt("hello");
// console.log(name); // temporary way to take input from the user

// let number = prompt("Enter a number: ");

// if(number % 5 === 0) {
//     console.log("multiple");
// } else {
//     console.log("not-mutiple");
// }

let num = prompt("  Enter your score: ");
let grade;

if(80<=num && num<=100) {
    grade = 'A';
} else if (70<=num && num<=89) {
    grade = 'B';
} else if (60<=num && num<=69) {
    grade = 'C';
} else if (50<=num && num<=59) {
    grade = 'D';
} else if (0<=num && num<=49) {
    grade = 'E';
} 
 
console.log(grade);