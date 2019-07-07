/* =================================
------------------------------------
	Titile: Bluer 

	Project: Online Shopping

	Author: Rene Morales
 ------------------------------------ 
 ====================================*/


(function($) {



/*------------------
		Navigation
	--------------------*/


$('.toggle').on('click', function(event) {

	$(".nav-switch").hide();
        $(".nav-switch").show();


		$('.main-menu').slideToggle(600);
		event.preventDefault();
	});



})(jQuery);


