console.log("Calc")

inp = document.getElementById("output")
console.log(inp)

// on = document.getElementById("1")

// two = document.getElementById("2")
// plus = document.getElementById("+")

function one(){
    on = document.getElementById("1").value
    inp.value =inp.value+on
    inp.value += on


}

function two(){
    on = document.getElementById("2").value
    inp.value =inp.value+on


}
function minus(){
    on = document.getElementById("-").value
    inp.value =inp.value+on


}
function pl(){
    on = document.getElementById("+").value
    inp.value =inp.value+on


}
function cls(){
    inp.value =""
}

function calc(){
    // console.log(inp.value)
    output = eval(inp.value)
    console.log(output)

    inp.value = output


}
