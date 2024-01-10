// let marks = [97,73,67,98,81];
// console.log(marks);
// console.log(marks.length);//property
// console.log(marks[0]);
// console.log(marks[5]); 

// marks[2] = 68;
// console.log(marks);

// str = "hello";
// str[0] = "y";
// console.log(str); //it wont change cuz string is immutable 
// // and to do this change we use str.replace method("h","y")
// console.log(str.replace("h","y"));


// let heroes = ["ironman", "hulk", "thor", "loki", "spiderman"];
// console.log(heroes);

// special type of object(typeof):  array,
// Array is a linear collection of similar items.


// for(let idx = 0; idx<heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

//for loop;
// for(let i = 0; i<heroes.length; i++) {
//     console.log(heroes[i]);
// }

//for of

// for(let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["delhi", "mumbai", "hyderabad", "gurgaon", "banglore"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [85,97,44,37,76,60];
// let sum = (marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5]);
// let avg = sum/6 ;
// console.log(avg);

// let sum = 0;

// for(let val of marks){
//     // console.log(val);
//     sum += val;
// }

// // console.log(sum);
// let avg = sum/ marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items = [250,645,300,900,50];

// for(let i=0; i<items.length; i++) {
//     let offer = items[i] /10;
//     items[i] -= offer;
// }

// console.log(items);

// let foodItems = ["pizza","burger","pasta","sandwich"];
// console.log(foodItems);
// console.log(foodItems.toString());

// foodItems.push("chips", "mad angles");
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log("deletedItems =" , deletedItem);


// console.log(foodItems.toString());

// let marks = [66,45,75,76];
// console.log(marks);
// // let newMarks = marks.toString();
// console.log(newMarks);


// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superheroes","batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);


// let add = marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// let deleted = marvelHeroes.shift();
// console.log(marvelHeroes);

// slice method: returns a piece of array
// let marvelHeroes = ["thor","spiderman","antman","Dr.Strange"];
// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1,2));
// console.log(marvelHeroes.slice(1,3));
// console.log(marvelHeroes.slice(1));

//splice: change original array(add,remove,replace)
// let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// arr.splice(2,2,101,102);
// console.log(arr);


// arr.splice(2,0,103);
// console.log(arr);

// arr.splice(3,1);
// console.log(arr);


// arr.splice(3,1,101);
// console.log(arr);

// arr.splice(4);
// console.log(arr);

let companies = ["Bloomberg", "Microsoft","Uber","Google", "IBM", "Netflix"];
console.log(companies);
// companies.shift("Bloomberg");
// console.log(companies);

companies.splice(2,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);