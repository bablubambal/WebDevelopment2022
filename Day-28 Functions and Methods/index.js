console.log("Function and Methods")
console.log("DRY --> dont repeat youself")
//Printing my name 100 times

//Defination of function
function printName10Times(){
    console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
console.log("bablu ")
}


// Calling of function
// printName10Times()
function myaddfunction(a,b){
    if(Number(a)>0){

        console.log(Number(a)+Number(b))
    }
    else{
        console.log("A cannot be less than 0")
    }
}

// a = prompt()
// b = prompt()
// console.log(Number(a)+Number(b))
// a = 23
// b = 23
// myaddfunction(a,b)
// c = 34
// d = 30
// myaddfunction(c,d)

// a = 1
// b = 20
// myaddfunction(a,b)
myaddfunction(10,30)
myaddfunction(0,23)




function findAverage(a,b){
    console.log("The average of ",a,"and ",b,"is ",(a+b)/2)
}
function mydivision (a,b){
    if(b<=0){
        console.warn("B cannot be zero or less than 0")
        alert('b cannot be less than 0')
    }
    else
    console.log("The division of ",a,"and ",b,"is ", a/b)


}

findAverage(5,10)
findAverage(344,299)
findAverage(100,100)

mydivision(10,10)





user = ["bablu", "ram ","shyaam","ramu"]

function verifyuser(username){
    a  = user.toString()
    if(a.includes(username)){
        console.log("you are a verfiied user and \nwelcome",username)
    }
    else{
        console.warn("Register with us to login",username,"Not found")
    }
}
login  = "ramu"
verifyuser(login)

// a = 10
// b = 20
// myaddfunction(10,20)
// myaddsubFUN

admin = "admin"
pass = "pass"

// create a login functionality function
user=  ""
upass = ""