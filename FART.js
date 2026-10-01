var  sloviet ;

function hueColor(value) {
    const hue = value * 360;
    return `hsl(${hue}, 100%, 50%)`;
}

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
		sloviet.style.backgroundColor
	}, 1);
}

window.addEventListener("load", function() {
	sloviet = document.getElementById("FALL");
	starLoading();


}, false);