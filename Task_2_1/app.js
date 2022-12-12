var http = require('http');
var fs = require('fs');

let itemArray = [
    {id: 1, name: "mobile", price: 26000, rating: 3.7},
    {id: 2, name: "laptop", price: 86500, rating: 4.7},
    {id: 3, name: "game", price: 6000, rating: 4.2},
    {id: 4, name: "comim", price: 26, rating: 4.9}
]



const port = process.env.port || 9000;

var server = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url=="/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./login.html", "UTF-8").pipe(res);
    }
    else if(req.method==="GET" && req.url=="/item?name=%27Mobile%27&price=800") {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(itemArray))
    } 
    else if (req.method === "GET" && req.url == "/submit") {
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
    

