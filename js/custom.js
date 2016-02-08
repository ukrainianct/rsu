$('#menu-btn').click(function() {
	if($('.navbar-nav').is(":hidden")) 
		$('.navbar-nav').css("background-color", "rgba(19, 26, 16, 0.85)");
	else
		$('.navbar-nav').css("background-color", "transparent");
});
