var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = socketio(server);

var pas = 1
var activeClients = []
var currentClient = 0
var i = 0;
var vasVersDroit = true;
var currentScreen = 1;
io.on("connection", function(socket) {
	console.log("Connect!");
	socket.emit("giveRole", i)
	
	if(i!=0)
		activeClients.push(socket)

	i++



})


setInterval(function(){
	currentScreen = activeClients[currentClient]
	currentClient+=pas
	if(currentClient==0)
	{
		vasVersDroit = true
		pas =-pas
	}
	if(currentClient == activeClients.length)
	{
		vasVersDroit = false
		pas =-pas
	}
	console.log({"active" : currentScreen,"vasVersDroit" : vasVersDroit})
	socket.emit("ChangeScreen", {"active" : currentScreen,"vasVersDroit" : vasVersDroit})
},2000)


server.listen(8083);

