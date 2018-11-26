document.addEventListener("DOMContentLoaded", function(event) { 
	let socket = io("10.130.1.200:8083")
    console.log(socket)
    var monRole;
    var baaalls = document.querySelector(".baaalls")

    socket.on("giveRole",function(ordre){
        console.log(ordre);
        monRole = ordre;
    })

    

    socket.on("ChangeScreen",function(data){
        console.log(data)
    //recois un objet en json qui contient l'ecran actif et le sens sou form de bool, true c'est de gauche a droit et false c'est de droit a gauche
    if(data.active==monRole){
    	baaalls.classList.remove("hide");
    	if(data.vasVersDroit ===true)
    	{		
    		baaalls.classList.remove("baaalls-left")
    		baaalls.classList.add("baaalls-right")
    	}else{
    		baaalls.classList.remove("baaalls-right")
    		baaalls.classList.add("baaalls-left")
    	}

    }else{
    	baaalls.classList.add("hide");
    }
})

});