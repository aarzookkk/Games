console.log("Aarzoo Kaushik");
console.log("Welcome to JavaScript");
console.log("I love JS");
fullName = "Hare Krishna";
// console.log("fullName");
console.log(fullName);

age = 24;
price = 99.99;
radius = 14;
x = null;
y = undefined;
console.log(y);
isFollow = false;

fullName = 25;

console.log(fullName);


// var name = "Aarzoo"; This won't give eny error but as a good programmer we'll never use var as we can can always update and re-declare var. It was used before 2015. 
var age = 24;
var age = 25;
var age = 54;
console.log(age);

// After 2015 we got smth in JS called ES6 where let and const keywords were introduced

let name = "Aarzoo";
console.log(name);
// we can use let. let can be updated but can't be redeclared.

// const can't be redeclared or updated
const rad = 13;
// rad = 34; error

let a;
a = 10;
console.log(a);

{
    let a = 5;
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}

let age1 = 76;

let z;
let k = null;

let x1 = BigInt("123");
let y1 = Symbol("Hello");


const student = {
    fullName : "Rishab Sharma",
    age : 20,
    cgpa : 8.82,
    isPass : true 
};


// const name2 = "Rohit Sharma";
// name2 = "Sachin"; // can't make changes to a const var but can make changes to a const key inside an object

student["age"] = student["age"] + 1;
student["fullName"] = "Rahul Sharma";
console.log(student["age"]);
console.log(student.fullName);

const product = {
    name : "Parker Jotter Standard CT Ball Pen(Black)" ,
    rating : 4.5 ,
    highlight : "Deal of the Day",
    price : 270
};

console.log(product);
console.log(product.name);

const profile = {
    username : "@aarzookaushik",
    isFollow : true,
    followers : 123,
    following : 123
};
console.log(profile);

console.log(typeof profile);
console.log(typeof profile["username"]);