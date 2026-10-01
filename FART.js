var  sloviet ;

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

window.addEventListener("load", function() {
	sloviet = document.getElementById("FALL");
	starLoading();


}, false);