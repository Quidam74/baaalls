var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = socketio(server);

var activeClients =[]
var currentIndex = 1
var estOk = false
var currentScreen = 1
var vasVersDroit = true
var pas = 1
var i = 0
io.on("connection", function(socket) {
	console.log("Connect!");
	socket.emit("giveRole", i)
	
	activeClients.push(socket)

	if(i >= 1)
	{
		activeClients.push(socket)
		estOk = true
	}

	i++


})


setInterval(function(){
	if(estOk != false ){
		console.log(activeClients.length)
		
		activeClients[currentIndex].emit("ChangeScreen", {"active" : currentScreen,"vasVersDroit" : vasVersDroit})

		if(activeClients.length >=2){
			currentScreen += pas

			if(currentScreen == 1)
			{
				vasVersDroit = true
				pas = -pas
			}
			if(currentScreen == activeClients.length-1)
			{
				vasVersDroit = false
				pas = -pas
			}
			
		}else{
			if(vasVersDroit)
				vasVersDroit=false
			else
				vasVersDroit=true
		}


	}
},2000)


server.listen(8083);

