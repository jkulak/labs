$(function(){

	jkl.infinity.apihandler.init('#body');
	jkl.infinity.apihandler.getTracks();
	jkl.infinity.timeline.init('#main-list');
	jkl.infinity.statbox.init('#statbox');
	jkl.infinity.ui.init();
	
	// bind event bus events
	$.subscribe('apihandler:gettracks:success', function(data) {

		jkl.infinity.timeline.append(data);

		// TODO: user Model, and not DOM :/
		jkl.infinity.statbox.updateTracksCount($('#main-list ul').children().size());
	});

	// bind DOM events
	$(window).bind('resize', jkl.infinity.ui.init);
	
	$(window).bind('scroll', function() {

		if($(window).scrollTop() + $(window).height() > $(document).height() - (0.125*$(document).height())) {
			jkl.infinity.apihandler.getTracks();
		}
	});
	
	$('#action-reaload-tracks').bind('click', function() {
		jkl.infinity.timeline.clearList();
		jkl.infinity.apihandler.getTracks();
	});

	// img error handling
	$('#main-list ul li img').bind('error', function () {
		$(this).attr('src', 's/imgerror.png');
	});
})