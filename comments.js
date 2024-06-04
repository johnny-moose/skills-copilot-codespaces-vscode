// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

var comments = [];

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    console.log(urlObj.pathname);
    if (urlObj.pathname == "/comment") {
        console.log("comment route");
        if (req.method === "POST") {
            console.log("POST comment route");
            // Read the request data
            var jsonData = "";
            req.on('data', function (chunk) {
                jsonData += chunk;
            });
            req.on('end', function () {
                var reqObj = JSON.parse(jsonData);
                // Output the data to the console
                console.log(reqObj);
                // Store the data in the comments array
                comments.push(reqObj);
                // Send the data back to the client
                res.writeHead(200);
                res.end(JSON.stringify(reqObj));
            });
        } else if (req.method === "GET") {
            console.log("GET comment route");
            res.writeHead(200);
            res.end(JSON.stringify(comments)