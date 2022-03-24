console.log("MY Recipies")

//selecting the button:
// var tea = document.getElementById("tea")


var recipeSelecting = document.getElementById("recipe")


function makeTea(){
    a = "step 1 make tea \n"
    recipeSelecting.innerHTML = a
}

function makeCoffee(){
    // makingCoffe = "setp1 making cooffien \n step 2 pour cofferr"
    // recipeSelecting.innerHTML  ="setp1 making cooffien \n step 2 pour cofferr"
    recipeSelecting.innerHTML =`<h2> Making Coffee</h2> 
    
    <ol>
    <li> take coffe</li>
    <li> take switch on gas</li>
    </ol>
    
    ` 
    // recipeSelecting.innerText =`<h2> Making Coffee</h2> 
    
    // <ol>
    // <li> take coffe</li>
    // <li> take switch on gas</li>
    // </ol>
    

    // `
    // recipeSelecting.innerHTML = "get lost" 
}