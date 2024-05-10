const http = require("http");
const fs = require("fs");
const PORT = 2000;
const home = fs.readFileSync("./index.html", "utf8");
const hostname = "localhost";
const server = http.createServer((req,res)=>{
    if (req.url ==="/"){
        return res.end(home);
    }
    if (req.url ==="/about"){
        return res.end("<h1>about<h1/>");}
    if (req.url ==="/contact"){
        return res.end("<h1>contact<h1/>");}
    else{
        return res.end("<h1>404page not found<h1/>");
    }
})



server.listen(PORT,hostname,()=>{
    console.log(`server listening on http://${hostname}:${PORT}`);})