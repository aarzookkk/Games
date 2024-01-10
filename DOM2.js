// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let parah = document.querySelector("p");
// console.log(parah);

// let clas = parah.getAttribute("class");
// console.log(clas);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");// change in elements 
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "yellow";
// div.style.backgroundColor = "maroon";
// // div.style.visibility = "hidden";
// div.style.fontSize = "26px";

// div.innerText = "Hello!";


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// // div.append(newBtn); 
// // div.prepend(newBtn); 
// // div.before(newBtn); 
// div.after(newBtn); 

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I'm new</i>";

document.querySelector("body").prepend(newHeading);