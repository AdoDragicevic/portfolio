// show/hide back to top arrow when page is scrolled
$(document).scroll(function () {
	
	$("#arrow").toggleClass("fixed-bottom", $(this).scrollTop() > 500);
	
});




