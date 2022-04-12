const http = require('http');
const fs = require("fs")
http.createServer(function (req, res) {
    // let data = fs.readFileSync("./index.html", "utf-8");
    // res.write("<h1>Hello World</h1>");
    // res.end(data )
    console.log(req.url)
    if(req.url =="/"){
        res.write("<h1>Hello World home page</h1>");

    }
    if(req.url =="/about"){
        res.write("<h1>Hello World i am about page</h1>");

    }


//   
  
}).listen(8000,()=>{console.log("server is running on port 8000")});

