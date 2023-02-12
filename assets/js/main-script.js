
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

	// start owl-products
	$('.owl-products').owlCarousel({
		nav: false,
		items:2,
		margin:0,
		dots:true,
		loop:false,
		rtl: true,
		autoplay:true,
    	autoplayTimeout:8000,
        autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
				stagePadding: 50,
				margin:30
			},
			400:{
				items:1,
				stagePadding: 100,
				margin:30
			},
			768:{
				items:1,
				stagePadding: 150,
				margin:30
			},
			992:{
				items:2
			}
		}
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
