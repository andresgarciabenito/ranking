function clearRates() { //primer paso limpiar todos los rates
    for(var i=1; i<=5; i++) {
        document.getElementById("star"+i).classList.remove("checked");
    }
}

function on(value){
	clearRates();
	for(var i=1; i<=value; i++) {
        document.getElementById("star"+i).classList.add("checked");
    }
}


window.addEventListener("click", function(e) {
    if (!document.getElementById("ratings").contains(e.target)){
       clearRates();
    }
})
