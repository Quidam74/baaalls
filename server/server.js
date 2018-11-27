var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = socketio(server);

var activeClients =[]
var currentIndex = 1
var estOk = false
var currentScreen = 5
var vasVersDroit = true
var pas = 1
var i = 0
io.on("connection", function(socket) {
	console.log("Connect!");
	socket.emit("giveRole", i)
	
	activeClients.push(socket)

	if(i == 1)
		estOk = true

	i++


})


setInterval(function(){
	if(estOk != false ){
		console.log("aaa")
		//console.log(currentScreen)
		activeClients[currentIndex].emit("ChangeScreen", {"active" : currentScreen,"vasVersDroit" : vasVersDroit})
	}
	},2000)


server.listen(8083);

