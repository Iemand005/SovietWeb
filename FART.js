var  sloviet = document.getElementById("FALL");

function starLoading() {
	// sloviet.val
	if (!(sloviet instanceof HTMLProgressElement)) return;
	for (let ROTUNDPERCETSN = 0; ROTUNDPERCETSN < sloviet.max; ROTUNDPERCETSN++) {
		
		sloviet.value = ROTUNDPERCETSN;
	}
}

document.onload = function() {
	starLoading();


};