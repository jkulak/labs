$(function(){
	infinity.apihandler.init('#body');
	infinity.timeline.init('#main-list');
	infinity.statbox.init('#statbox');
	infinity.ui.init();
	infinity.apihandler.getTracks();
	
	
	// bind event bus events
	$.subscribe('apihandler:gettracks:success', function(data) {

		infinity.timeline.append(data);

		// TODO: use Model, and not DOM :/
		infinity.statbox.updateTracksCount($('#main-list ul').children().size());
	});

	// bind DOM events
	$(window).bind('resize', infinity.ui.init);
	
	$(window).bind('scroll', function() {

		if($(window).scrollTop() + $(window).height() > $(document).height() - (0.125*$(document).height())) {
			infinity.apihandler.getTracks();
		}
	});
	
	$('#action-reaload-tracks').bind('click', function() {
		infinity.timeline.clearList();
		infinity.apihandler.getTracks();
	});

	// img error handling
	$('#main-list ul li img').bind('error', function () {
		$(this).attr('src', 'images/imgerror.png');
	});
})