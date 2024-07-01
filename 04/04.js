document.addEventListener("DOMContentLoaded", ()=>{
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    const bt3 = document.querySelector("#bt3");
    const bt4 = document.querySelector("#bt4");
    const bt5 = document.querySelector("#bt5");
    const bt6 = document.querySelector("#bt6");

    var comDice = document.querySelector(".computer-dice");
    var userDice = document.querySelector(".user-dice");

    let comNum = 1;

    bt1.addEventListener("click", ()=>{
        comNum = Math.floor(Math.random() * 6) + 1;
        comDice.src = `./img/${comNum}.png`;
        userDice.src = "./img/1.png";

    });

    bt2.addEventListener("click", ()=>{
        comNum = Math.floor(Math.random() * 6) + 1;
        comDice.src = `./img/${comNum}.png`;
        userDice.src = "./img/2.png";

    });

    bt3.addEventListener("click", ()=>{
        comNum = Math.floor(Math.random() * 6) + 1;
        comDice.src = `./img/${comNum}.png`;
        userDice.src = "./img/3.png";

    });

    bt4.addEventListener("click", ()=>{
        comNum = Math.floor(Math.random() * 6) + 1;
        comDice.src = `./img/${comNum}.png`;
        userDice.src = "./img/4.png";

    });

    bt5.addEventListener("click", ()=>{
        comNum = Math.floor(Math.random() * 6) + 1;
        comDice.src = `./img/${comNum}.png`;
        userDice.src = "./img/5.png";

    });

    bt6.addEventListener("click", ()=>{
        comNum = Math.floor(Math.random() * 6) + 1;
        comDice.src = `./img/${comNum}.png`;
        userDice.src = "./img/6.png";

    });
})