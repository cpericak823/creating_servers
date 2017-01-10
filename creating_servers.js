// * Using the previous example as a guide, create an app that has two web servers.*One that listens on port 7000 and one that listens on port 7500. 
//* The one listening on port 7000 will always tell the user something good about themselves.*The one listening on 7500 will always tell the user something bad about themselves.
//*Make sure you create a Github repo and commit this code!

//require http module
var http = require("http");

//define the ports to listen to
var port1 = 7000;
var port2 = 7500;

var server1 = http.createServer(function(request, response) {
    response.end("you are awesome: " + request.url);
});

server1.listen(port1, function() {
    console.log("server1 listening on: http://localhost:%s", port1);
});

var server2 = http.createServer(function(request, response) {
    response.end("you suck: " + request.url);
});

server2.listen(port2, function() {
    console.log("server2 listening on: http://localhost:%s", port2);
});

//     ** Bonus **
//     * Look
// for other ways to expand what your server can do .As possibilities:
//     * Generate the good / bad phrase randomly from a list of predefined phrases * Use the `twitter`
// package
// inside the response to also
// return a random tweet
