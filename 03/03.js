// document.addEventListener("DOMContentLoaded", function(){
//     console.log("hello")
// });

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("arrow function");

    // declare variable
    const msg = document.querySelector("#msg");
    const bt = document.querySelector("button");

    // msg.innerHTML = '<h1>Hello</h1>';
    // msg.textContent = "Hello";

    bt.addEventListener("click", ()=>{
        if(msg.innerHTML == 'Hello') msg.innerHTML = 'Bye';
        else msg.innerHTML = 'Hello';
    });
});