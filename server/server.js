var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = socketio(server);

var activeClients =[]
var currentIndex = 1
currentScreen = 5
var pas = 1
var i = 0
io.on("connection", function(socket) {
	console.log("Connect!");
	socket.emit("giveRole", i)
	
	activeClients.push(socket)
	i++



})


setInterval(function(){
	if(activeClients[0] != undefined ){
		console.log(activeClients)
		activeClients[currentIndex].emit("ChangeScreen", {"active" : currentScreen,"vasVersDroit" : vasVersDroit})
	}
	},2000)


server.listen(8083);

