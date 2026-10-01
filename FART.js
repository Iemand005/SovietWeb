var  sloviet = document.getElementById("FALL");

function starLoading() {
	// sloviet.val
	if (!(sloviet instanceof HTMLProgressElement)) return;
	// for (; ROTUNDPERCETSN < sloviet.max; ROTUNDPERCETSN++) {
		
	// 	sloviet.value = ROTUNDPERCETSN;
		
	// }

	var ROTUNDPERCETSN = 0

	setInterval(function() {
		sloviet.value = ROTUNDPERCETSN++;
	}, 1000);
}

document.onload = function() {
	starLoading();


};