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


body.addEventListener("click", off());

function off(){
  for (var i=0; i<5; i++){
      stars[i].classList.remove('checked');
      stars[i].classList.add('unchecked');
}
}
