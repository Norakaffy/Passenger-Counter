/*

let lapsCompleted = 0

function Completed () {
    console.log(lapsCompleted + 1)
}

Completed ()
Completed ()
Completed ()



let lapsCompleted = 0

function Completed () {
    lapsCompleted = lapsCompleted + 1
    
}

Completed()
Completed()
Completed()

console.log(lapsCompleted)



let countel = document.getElementById("count-el")
console.log(countel)

let lapsCompleted = 0


function Completed () {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}

*/
let saveEl = document.getElementById("save-el")
let countel = document.getElementById("count-el")   //This method refers to as working with the DOM
let lapsCompleted =0

console.log(saveEl)


function increment () {
    //lapsCompleted = lapsCompleted + 1, note that the code below are the same
    lapsCompleted += 1
    countel.textContent = lapsCompleted
}

function save() {

let countSep = lapsCompleted  + " - "
/* innerText gives out only what is readable as in it return what is readable, but textContent
it can create the space in the - space properly in the previous entries */

saveEl.textContent += countSep
countel.textContent = 0
lapsCompleted = 0

}


/*
function increment () {
    //lapsCompleted = lapsCompleted + 1, note that the code below are the same
    lapsCompleted += 1

    countel.innerText = lapsCompleted
}


function save() {
    console.log(lapsCompleted)
}

let username = "per"
let message = "You have 3 new notifications"

console.log(message +", "+ username)

let a = ""

let messageToUser = message +", "+ username

console.log(messageToUser)

let name2 = "Kafibebe"
let greeting = "Hi, my name is"

let myGeeting = greeting +" "+ name2
console.log(myGeeting)
*/


 
