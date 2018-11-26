var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = socketio(server);


var i = 0;
var vasVersDroit = true;
var currentScreen = 0;
io.on("connection", function(socket) {
	console.log("Connect!");
	socket.emit("giveRole", i)
	i++

	socket.emit("ChangeScreen", {"active" : currentScreen,"vasVersDroit" : vasVersDroit})

	socket.on("boum", function(data) {
		if (data.author != "")
			io.emit("boum",data)
	})
	socket.on("move", function(data) {
		if (data.author != "")
			io.emit("move",data)
	})
	socket.on("point", function(data) {
		if (data.author != "")
			io.emit("point",data)
	})


})

server.listen(8083);

