var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {

	$hamburger.toggleClass("is-active");
  
  if ($hamburger.is('.is-active')) {
  	$('.left-menu').parent().removeClass('hide')
  	$('.content').parent().removeClass('col-md-12').addClass('col-md-10');
  }
  else {
  	$('.left-menu').parent().addClass('hide')
  	$('.content').parent().removeClass('col-md-10').addClass('col-md-12');
  }
  
});