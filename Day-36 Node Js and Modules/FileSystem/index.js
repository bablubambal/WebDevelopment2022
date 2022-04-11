console.log("about file system")
//Inbuild moudle FS 
const fs = require("fs")

// console.log(fs)

//creating a file
// let myfile = fs.writeFileSync("myfile.txt","This is dynamic and created by server")

// appending a file appendSync

// deleting a file
// reading a file readSync


// fs.unlinkSync("one.txt")

let a = fs.unlinkSync("./hello.txt",(errr,resp)=>{
    if(errr){
        "we go error"
    }
})
console.log(a)

console.log(myfile)