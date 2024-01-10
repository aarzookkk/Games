// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

let div = document.querySelector("#box");

box.onmouseover = () => {
    console.log("you're inside div");
};

let button2 = document.querySelector("#btn2");


// event object
btn2.ondblclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
};

// let button1 = document.querySelector("#btn1");


// addEvent Listener
// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler2");
// }); // event listener method helps to do multiple tasks/works with the same event & it prevents overriding which was happening in the js event method, whereas the inline event method makes the code so bulky 


// removeEvent Listener

// let button1 = document.querySelector("#btn1");


// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler1");
// });
    

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler2");
// });


// const handler3 = () => {
//     console.log("button was clicked - handler3");
// };
// btn1.addEventListener("click", handler3);
        

// btn1.addEventListener("click", () => {
//             console.log("button was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);

//wrongg --practice ques

// let button3 = document.querySelector("#toggle");

// // toggle.onclick = () => {
// //     console.log("changes the screen to dark-mode");
// // };


// // toggle.ondblclick = () => {
// //     console.log("changes the screen to light-mode");
// // };

// toggle.addEventListener("click", ()=> {
//     console.log("change the screen to dark mode");
// });
// wronggggg end


let modebutton = document.querySelector("modebtn");
let currMode = "light";

modebtn.addEventListener("click", () => {
    // console.log("change the mode");
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light"; 
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});