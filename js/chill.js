

document.getElementById('menu-icon').addEventListener("click",button);

var active_chill = false;
var list_music = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
"15","16","17","18","19","20","21"]


function button(){
	if (active_chill === false){
		document.getElementById('menu').style.display = "flex";
		document.getElementById('menu-icon').style.opacity = "0.7";
	}
	else{
		document.getElementById('menu').style.display = "none";
		document.getElementById('menu-icon').style.opacity = "1";
	}

	active_chill = !active_chill;
}



 function audioPlayer(){
        alert("Press F11 to have a good experience!")
        var currentSong = 0;
        $("#audioPlayer")[0].src = $("#menu-button li a")[0];
        $("#audioPlayer")[0].play();
        $("#menu-button li a").click(function(e){
           e.preventDefault(); 
           currentSong = $(this).parent().index();
           $("#audioPlayer")[0].src = this;
           $("#container")[0].src = "../video/" + list_music[currentSong] + ".mp4"
           $("#audioPlayer")[0].play();
           $("#menu-button li").removeClass("current-song");
            $(this).parent().addClass("current-song");
        });
        
        $("#audioPlayer")[0].addEventListener("ended", function(){
            currentSong++;
            if(currentSong == $("#menu-button li a").length)
                currentSong = 0;

            $("#container")[0].src = "../video/" + list_music[currentSong] + ".mp4"
            $("#menu-button li").removeClass("current-song");
            $("#menu-button li:eq("+currentSong+")").addClass("current-song");
            $("#audioPlayer")[0].src = $("#menu-button li a")[currentSong].href;
            $("#audioPlayer")[0].play();
        });
}
