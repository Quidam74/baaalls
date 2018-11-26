document.addEventListener("DOMContentLoaded", function(event) { 
	let socket = io("infobanana.iut-acy.local:8083")
	var monRole;
	var baaalls = document.querySelector(".baaalls")
	socket.on("giveRole",function(ordre){
        console.log(ordre)
		monRole = ordre;
	}

	socket.on("ChangeScreen",function(data){
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
}

});