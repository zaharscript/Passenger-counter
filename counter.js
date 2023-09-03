// let name = "Faizal";
// let greeting = "Hello, my Name is ";
// let myGreeting = greeting + name

// console.log(myGreeting)

// let points = 6;
// let bonusPoint = 13
// let totalPoint = points + bonusPoint
// console.log(totalPoint);

//  let welcomeEl = document.getElementById('welcome-el')

//  let greeting = "Welcome Back "
//  let nama = "Zaharudin"

//  welcomeEl.innerText = greeting + nama



//  welcomeEl.innerText +=  " 😀"
let countPsgr = document.getElementById("counter-el")
let count = 0

function counter(){
    count ++
    countPsgr.textContent= ` ${count}`
}


let saveCount = document.getElementById("save")
// let myCounter = []


function save(){
    // let newValue = count
    // myCounter.push(newValue)
    // saveCount.innerText = myCounter.join("-")
    // console.log(countRecord)
    let psgr = count  + " - "
    saveCount.textContent += psgr 
    
    countPsgr.textContent = 0
    count = 0
}
