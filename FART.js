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
	}, Math.floor(Math.random() * 50) + 1);
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
	if (Math.random() < 0.4)
		sandwichTime();
}

var mx = 0, my = 0, cx = 0, cy = 0;
document.addEventListener("mousemove", function(e) { mx = e.clientX; my = e.clientY; });
(function followMouse() {
	cx += (mx - cx) * 0.05;
	cy += (my - cy) * 0.05;
	var c = document.getElementById("circ");
	if (c) { c.style.left = cx + "px"; c.style.top = cy + "px"; }
	requestAnimationFrame(followMouse);
})();

window.addEventListener("load", function() {
	sloviet = document.getElementById("FALL");
	starLoading();
	setInterval(goCrazy, 500);
	document.body.style.backgroundColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
}, false);