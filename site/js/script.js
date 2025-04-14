$(document).ready(function(){
	colorBox = "<div class='colorBox'></div>";
	mySound = [];

	for(var i = 0; i < 50; i++){
		$('body').append("<div class='colorBox'></div>");
	}

	for(var i = 1; i <11; i++){
		mySound[i] = new buzz.sound( "sound/"+i, {
			formats: [ "ogg", "mp3" ]
		});
	}

	$('.colorBox').mouseenter(function(){
		var randomColor = Math.floor((Math.random() * 10) + 1);
		$(this).fadeTo(0,0).removeClass().addClass('colorBox color-' + randomColor).fadeTo('slow',1);
		mySound[randomColor].play();
	});

	$('.colorBox').mousedown(function(){
		$('.colorBox').fadeTo('slow',0);
	});
});