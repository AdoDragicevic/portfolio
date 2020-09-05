// show/hide back to top arrow when page is scrolled
$(document).scroll(function () {	
	if($(this).scrollTop() > 500){
		$("#arrow").removeClass("d-none");
	}else{
		$("#arrow").addClass("d-none");
	}	
});



