// function


//Normal function
function show(){
    console.log("i am show function")
}

//Mordern Way
const showing = ()=>{
    console.log("i am showing function")
}

function myfun(a,callback){
    console.log("My function",a);
    callback();
}


//Call backfunction
myfun(23, ()=>{
    console.log("i am inside small function")
})

//Arrow function or anonymous function --> one who doesn't have name
myfun(23, ()=>{
    console.log("i am inside small function")
})

//one statement i dont need brackets also
myfun(23, ()=>  console.log("i am inside small function"))