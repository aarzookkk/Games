let div = document.querySelector("#box");

// box.addEventListener("click", ()=> {
//     console.log("div is clicked");
//     document.querySelector("body").style.backgroundColor = "gray";
//     document.querySelector("#box").style.color = "pink";
// });

// box.onmouseover = () => {
//     console.log("the mouse is hovering on the div");
//     document.querySelector("body").style.backgroundColor = "gray";
//     document.querySelector("#box").style.color = "pink";
// };

box.addEventListener("mouseover", ()=> {
        console.log("the mouse is hovering on the div");
        document.querySelector("body").style.backgroundColor = "gray";
        document.querySelector("#box").style.color = "pink";
    });
    