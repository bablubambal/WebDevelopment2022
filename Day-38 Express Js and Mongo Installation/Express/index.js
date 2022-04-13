const express = require('express')
const path = require("path")
const app = express()
const port = 3000

// get --> to get something from the server
// post --> to send something to the server
app.get("/",(req,res)=>{
    // res.send("hi i am your first server homepage")
    console.log("the path is",__dirname)
   res.sendFile(path.join(__dirname,"index.html"))
   
})
app.get("/about",(req,res)=>{
    // res.send("this is my about page")
    res.sendFile(path.join(__dirname,"about.html"))
    
})
app.get("/me",(req,res)=>{
    res.send("this is my about  page my self")
})
app.get("/contact/:id",(req,res)=>{
    console.log(req.params.id)
    res.send("this is my about  page my self")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Express js mostly this

// Templating engine
//