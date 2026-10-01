var  sloviet = document.getElementById("FALL");

function starLoading() {
	// sloviet.val
	if (!(sloviet instanceof HTMLProgressElement)) return;
	for (let ROTUNDPERCETSN = 0; ROTUNDPERCETSN < sloviet.max; ROTUNDPERCETSN++) {
		
		sloviet.value = ROTUNDPERCETSN;
		
	}

	setInterval(function() {
		
	}, 1000);
}

document.onload = function() {
	starLoading();


};