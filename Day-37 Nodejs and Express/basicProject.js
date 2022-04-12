const http = require("http")
const fs = require("fs")

//create server
http.createServer(function(req,res){
    if(req.url === "/"){
        let data = fs.readFileSync("./index.html", "utf-8");
        res.write(data);
        res.end()
    }
    else if (req.url =="/about"){
        let data = fs.readFileSync("./about.html", "utf-8");
        res.write(data);
        res.end()

    }
    else if (req.url =="/contact"){
        let data = fs.readFileSync("./contactus.html", "utf-8");
        res.write(data);
        res.end()
    }
    else{
        res.write("<h1>Page not found</h1>")
    }

}).listen(9090,()=>{console.log("server is running on port 9090")})