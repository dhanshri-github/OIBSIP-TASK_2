$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scroLLY > 20){
			$('.navbar').addClass("sticky");
		}else
		{
			$('.navbar').removeClass("sticky");
		}
	})
});