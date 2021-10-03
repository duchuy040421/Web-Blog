$(window).load(function() {
	$('#loader').delay(1900).fadeOut('slow');
});

document.getElementById('button-element').addEventListener("click",button);

var active = false;

function button(){
	if (active === false){
		document.getElementById('menu-button').style.display = "flex";
		document.getElementById('button-element').style.opacity = "0.7";
	}
	else{
		document.getElementById('menu-button').style.display = "none";
		document.getElementById('button-element').style.opacity = "1";
	}

	active = !active;
}

(function() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	if(window.innerHeight<=801 && window.innerWidth <= 1280){
		document.getElementById('check').style.display = "flex";
	}
	else
		document.getElementById('check').style.display = "none";
})();