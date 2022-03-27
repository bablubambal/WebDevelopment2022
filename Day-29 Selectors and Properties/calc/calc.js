//selecting elements:
console.log("calc js")
// a = document.getElementById("a")
// b = document.getElementById("b")




function cal(){
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    c = document.getElementById("operator").value
    // c = "+"
    if ( c == "+"){
        ou  = document.getElementById("output")
    ou.innerHTML = Number(a)+Number(b)
    }
    else{
        alert("i only do addiotn")
    }

    

}