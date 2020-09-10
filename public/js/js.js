// show/hide back to top arrow when page is scrolled
$(document).scroll(function () {	
	if($(this).scrollTop() > 500){
		$("#arrow").removeClass("d-none");
	}else{
		$("#arrow").addClass("d-none");
	}	
});



// adds mobile class, and mobile os to html tag
jQuery(document).ready(function($){
var deviceAgent = navigator.userAgent.toLowerCase();

if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
$('.iparaxify').removeClass('paraxify');
}
});