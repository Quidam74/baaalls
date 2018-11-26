var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = socketio(server);

var activeClients = []
var currentClient = 0
var i = 0;
var vasVersDroit = true;
var currentScreen = 0;
io.on("connection", function(socket) {
	console.log("Connect!");
	socket.emit("giveRole", i)
	i++
	activeClients.push(i)
	


})
setInterval(function(){
	currentScreen = activeClients[currentClient]
	if(currentClient==0)
		vasVersDroit = true
	if(currentClient == activeClients.length)
		vasVersDroit = false
	socket.emit("ChangeScreen", {"active" : currentScreen,"vasVersDroit" : vasVersDroit})
},2000)


server.listen(8083);

