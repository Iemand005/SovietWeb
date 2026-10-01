var  sloviet = document.getElementById("FALL");

function starLoading() {
	// sloviet.val
	// for (; ROTUNDPERCETSN < sloviet.max; ROTUNDPERCETSN++) {
		
	// 	sloviet.value = ROTUNDPERCETSN;
	
	// }
	
	var ROTUNDPERCETSN = 0
	
	var krick = setInterval(function() {
		if (!(sloviet instanceof HTMLProgressElement)) return;
		sloviet.value++
		if (sloviet.value >= sloviet.max) clearInterval(krick)
	}, 1);
}

document.addEventListener("load", function() {
	starLoading();


}, false);