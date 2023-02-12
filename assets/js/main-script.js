
$(document).ready(function(){

	// start owl-welcom
	$('.owl-welcom').owlCarousel({
		nav: true,
		items:1,
		margin:0,
		dots:true,
		loop:false,
		rtl: true,
		// animateOut: 'fadeOut',
		// animateIn: 'fadeIn',
		autoplay:true,
    	autoplayTimeout:8000,
        autoplayHoverPause:true,
		navText:[
			"<img src='./assets/img/arrow-left-line(2).svg' class='img-fluid'>",
			"<img src='./assets/img/arrow-left-line(1).svg' class='img-fluid'>"
		],
	});

	// Move In Verifcation inputs
	$(".verify-input").keyup(function () {
		if (this.value.length == this.maxLength) {
			$(this).next('input').focus();
		}
	});

	// Search Btn
	$('#search_btn').on('click', function(){
		$('#hold_search_form').toggleClass('active');
	});
	

});
