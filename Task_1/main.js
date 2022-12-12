const http = require("http");
const fs = require('fs')
const port = process.env.port || 9000;

let server = http.createServer((request, response)=>{


     response.writeHead(200, "Success", {"Content-Type": "text/html"});

    fs.readFile("home.html",(err,data)=>{
        response.write(data)
        response.end()
        if(err)
        {
            console.log(err)
        }
    })
})

server.listen(port, ()=>{
    console.log("App is running at "+port)
});