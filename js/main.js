let ball = document.querySelector(".ball");
let ballA = document.querySelector(".ballon");
// let ballB = document.querySelector(".balltwo");
// let main = document.querySelector(".countainer::before");
// let sec = document.querySelector(".countainer::after");
// let color = ["#36d1f4","rgb(226, 71, 10)", "rgb(226 179 10)", "rgb(14, 229, 68)"];
let colorA = ["rgb(249 22 22)", "#f57011"]
let colorb = ["rgb(10 226 66)", "rgb(10, 226, 219)"]
setInterval(() => {
    // let random = Math.floor(Math.random() * color.length); 
    // let randomA = Math.floor(Math.random() * color.length); 
    // let randomB = Math.floor(Math.random() * color.length); 
    let randomD = Math.floor(Math.random() * colorA.length); 
    let randomb = Math.floor(Math.random() * colorb.length); 
    console.log(ballA)
    // let randomC = Math.floor(Math.random() * colorb.length); 
    ball.style.backgroundColor = colorA[randomD];
    ballA.style.backgroundColor = colorb[randomb];
    // .stlye.backgroundColor = 
    // ballB.stlye.backgroundColor = color[randomB];
    // main.stlye.backgroundColor = colorA[randomD];
    // sec.stlye.backgroundColor = colorb[randomD];
}, 9000);