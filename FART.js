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
		var rand = Math.random();
		if (rand < 0.3) {
			sloviet.value += Math.floor(Math.random() * 5) + 1;
		} else if (rand < 0.5) {
			sloviet.value -= Math.floor(Math.random() * 2) + 1;
			if (sloviet.value < 0) sloviet.value = 0;
		} else {
			sloviet.value += Math.floor(Math.random() * 2) + 1;
		}
		if (sloviet.value >= sloviet.max) {
			sloviet.value = sloviet.max;
			clearInterval(krick);
		}
		sloviet.style.backgroundColor = hueColor(sloviet.value / 1000);
	}, Math.floor(Math.random() * 50) + 10);
}

function sandwichTime() {
	var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
	while (walk.nextNode()) {
		if (walk.currentNode.nodeValue) {
			walk.currentNode.nodeValue = walk.currentNode.nodeValue.replace(/bandwidth|bandwith/gi, "sandwich");
		}
	}
}

function goLrazy() {
	if (Math.random() < 0.4) {
		sandwichTime();
	}
}

window.addEventListener("load", function() {
	sloviet = document.getElementById("FALL");
	starLoading();
	setInterval(goLrazy, 5000);
}, false);