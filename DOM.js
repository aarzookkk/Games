// console.log("hello!");
// alert("apna college");

// console.log(window);

// console.log("hello");
// // window.console.log("hello2");
// alert("hello");


// console.log --> print js console
// console.dir --> document -> prop & methods

// console.log(window);
// console.dir(window);
// console.log(document);
// console.dir(document);
// console.dir(window.document);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);
// console.log(document.head);
// console.log(document.body.childNodes);
// console.dir(document.body.childNodes);
// console.dir(document.body.childNodes[1]);
// console.log(document.body.childNodes[1]);


// // document.body.style.background = "green"; temporary in js console

// document.body.childNodes[3].innerText = "abcd";

// console.dir(document.body);

// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

// let heading2 = document.getElementById("myId");
// console.log(heading2);
// console.dir(heading2);

// // let headings = document.getElementsByClassName("heading-class");
// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let firstEl = document.querySelector("#myId");//1st element
// console.log(firstEl);
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");//all element
// console.log(allEl);
// console.dir(allEl);

// TagName --> returns tagname : firstEl.tagName
// mdn -> Node:firstChild property and lastChild property
      


// DOM Tree
// * text nodes
// * Comment
// * elements
// console.dir(document.body.firstChild);

// let child = document.querySelector("div").children;
// console.dir(child);
// console.log(child);


// let div = document.querySelector("div");
// console.dir(div);

// // div.innerText
// // div.innerHTML
// // div.innerText = "adcd"
// // div.innerText = <div>inner div </div>

// let heading = document.querySelector("h1");
// console.dir(heading);
// console.log(heading);

// heading.innerHTML = "<i>new Heading</i>"
// textContent : hidden ; heading.innerText
// heading.textContent


// let Heading = document.querySelector("h2");
// Heading.innerText = Heading.innerText  +  " from Apna College";
// console.log(Heading);


let divs = document.querySelectorAll(".box");


let idx = 1;
for (div of divs) {
    // console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}      
                                   

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
// console.log(divs);   



