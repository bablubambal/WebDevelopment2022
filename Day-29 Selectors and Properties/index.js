console.log("Selectors in console")

// To get whole document
// var ba = document.all
// console.log(ba)


// Element selector


b = document.getElementsByTagName("h1")

// console.log(b)
b[0].innerText = "I am hero"
// console.log(b[0].innerText)


color = "green"
id = "h1"
//Id selector
// console.log(document.getElementById("p1"))
selectedElement = document.getElementById(id)
 selectedElement.style.color =  color
// console.log(selectedElement)


//Class selecotr:
cls = document.getElementsByClassName("para")
console.log(cls)
cls[0].style.color = "purple"


// console.log(cls)




sel = document.getElementsByTagName("P")

console.log(sel)

//qUERY Selector:
sel  = document.querySelector(".para")
sel  = document.querySelector("#p1")
console.log(sel)

 
  a = 10

a = document.querySelectorAll(".para")
console.log(a)