var http = require('http');
var fs = require('fs');

const port = process.env.port || 9000;

var server = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url=="/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./login.html", "UTF-8").pipe(res);
    } else if (req.method === "POST" && req.url == "/login") {
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            res.writeHead(200, {
                "Content-Type": "text/html"
            }); 
            res.end(body);
        });
    } else {
        res.end("This is error")
    }
})
server.listen(port, ()=>{
    console.log("App is running at "+port)
});
    

