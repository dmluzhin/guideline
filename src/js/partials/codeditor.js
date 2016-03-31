$(document).ready(function(){
	// Fullscreen Functionality
	// Put this together quickly so needs to be improved
	$('.code-editor .fullscreen').on( "click", function() {
		var windowHeight = $(window).height() - 132;
		if($('.code-editor').hasClass('fullscreen')){
			$('.code-editor').removeClass('fullscreen');
			$(this).addClass('fa-expand').removeClass('fa-compress');
			$('.code-editor pre').css({height: 'auto'});
		} else {
			$('.code-editor').addClass('fullscreen');
			$(this).removeClass('fa-expand').addClass('fa-compress');
			$('.code-editor pre').css({height: windowHeight});
		}
	});
	// Accordion functionality
	$('.code-editor .accordion').on( "click", function() {
		$(this)
				.toggleClass('fa-chevron-up')
				.toggleClass('fa-chevron-down')
				.parent().parent()
				.children()
				.not('.controls')
				.slideToggle();
	});
});