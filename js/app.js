$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(e){
		if(e.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).keyup(function(e){
		if(e.which == 88) {
			$('.ryu-ready').show();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
		}
	});
	$('.ryu').mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			}

			);
	});
	$('.ryu').mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	
});
function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}