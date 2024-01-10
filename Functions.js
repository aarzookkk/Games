// function myFunction() {
//     console.log("Welcome to APNA COLLEGE");
//     console.log("We are learning JS");
// }

// myFunction();
// myFunction();


// function myFunction(msg) { //function definition ke andr use krne wali input value is parameter
//     //parameter -> input
//     console.log(msg);
// }


// myFunction("I love JS"); //argument : while calling the function the input value we use we call it argument
// myFunction("I love JS");

// MULTIPLE INPUTS
// function myFunction(msg, n) { 
//         // console.log(msg,n);
//         console.log(msg*n); //Nan : not a no.
//     }
    
// myFunction("I love JS", 100);


//Function --> 2 numbers , sum

// function sum(x,y) {
//     console.log(x+y);
// }

// sum();

//return a value
// function sum(x,y) {
//     //local variables-->scope
//     s = x+y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }

// let val = sum(3,4);
// console.log(val);


//sum function
// function sum(a,b){
//     return a + b;
    // console.log(a+b);
// }

// sum(4,5);

// const arrowSum = (a,b) => {
//     console.log(a + b);
// };

// // multiplication function
// function mul(a,b) {
//     console.log(a * b);
// }

// let arrowMul = (a,b) => {
//     // console.log(a *  b);
//     return a * b;
// };


// function functions(String) {
//     console.log(String);
// }

// functions("JavaScript");


// function countVowels(Str) {
//     let count = 0;
//     for(const char of Str) {
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ) {
//             count++;
//         }
//     }
    
//    console.log(count);
// }

// const countVow = (str) => {
//     let count = 0;
//     for(const char of str) {
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ) {
//             count++;
//         }
//     }
    
//    return count;
// }


//  forEach Loop -> We only use this method for arrays not for strings
// arr.forEach(callBackFunction )
// higher order functions : The functions which either
// take another funstion as a parameter inside them
//  or they return another function as their output.

// let arr = [1,2,3,4,5];
//  arr.forEach((val) => {
//     console.log(val);
//  });

// let arr = ["delhi","gurgaon","bangalore"];
//  arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
//  });


// let arr = [3,4,2,2,6,9];

// // arr.forEach((sqr) => {
// //     console.log(sqr * sqr);
// // });

// let calcSqr = (sqr) => {
//     console.log(sqr * sqr);
// };

// arr.forEach(calcSqr);

//map -> to create a new array
// let nums = [34,78,56,87];

// let newArr = nums.map((val) => {
//     return val* 2;
// });

// console.log(newArr);

//Filter method

// let num = [7,0,3,8,6,2,1];

// let evenArr = num.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);

//Reduce Method

// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr) => {
//     return res + curr ;
// });

// console.log(output);

// let arr = [1,2,3,4];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);

// let marks = [86,98,75,67,99,75,45,90];

// let newArr = marks.filter((val) => {
//     return val > 90;
// });

// console.log(newArr);

let n = prompt("enter a no. : ");

let arr = [];

for(i=1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev,curr) => {
    return prev + curr;
});

console.log(sum);

let product = arr.reduce((prev, curr) => {
    return prev * curr;
});

console.log(product);