console.log("events in Js")


//Click Event
function clickbtn(){
    console.log("button is clicked")
}

//Double Click Event
function dblclick(){
    console.log("I am called when you double clcik")
}


//On Change Event

//ES6 =>
// function chgeInput(e){
//     console.log("funnn runn")
//     console.log(e.target.value)


// }

function myfun(val){
    console.log("my fun workd",val)
}

function mouseOverFunction(){
    a = document.getElementById("id")
    a.style.backgroundColor= "green";
    console.log("you mouse overed the div")
}

function mouseLeft(){
    a = document.getElementById("id")
    a.style.backgroundColor= "yellow";
    console.log("you mouse left the div")

}

//Onload function to body
function docloaded(){
    console.log("your document is ready")
}


//onfocus
function f(){
    console.log("your input box is in focus")
}

//onBlur
function b(){
    console.log("input blureed")
}

function keyd(){
    console.log("key is pressed")
}