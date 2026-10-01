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
		sloviet.style.backgroundColor = hueColor(sloviet.value / 1000)
	}, 1);
}

function sandwichTime() {
	var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
	while (walk.nextNode()) {
		if (walk.currentNode.nodeValue) {
			walk.currentNode.nodeValue = walk.currentNode.nodeValue.replace(/bandwidth|bandwith/gi, "sandwich");
		}
	}
}

function goCrazy() {
	if (Math.random() < 0.5) {
		sandwichTime();
	}
}

window.addEventListener("load", function() {
	sloviet = document.getElementById("FALL");
	starLoading();
	setInterval(goCrazy, 500);
}, false);