const http = require('node:http');
let port = 3000
const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url==="/"){
        res.end("Done")
    }else{
        res.end("404 Page not found")
    }
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})