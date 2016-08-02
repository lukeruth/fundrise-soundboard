$(function() {
	$("[data-audio]").on("click", function() {
		var audio = new Audio($(this).data("audio"));
		audio.play();
	});
});
