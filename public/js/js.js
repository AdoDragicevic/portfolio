// show/hide back to top arrow when page is scrolled
document.body.addEventListener('scroll', function(){
	if($(this).scrollTop() > 500){
		$("#arrow").removeClass("d-none");
	}else{
		$("#arrow").addClass("d-none");
	}	
});

$("#arrow").click(function(){
	document.body.scrollTop();
});