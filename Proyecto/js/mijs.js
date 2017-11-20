$(document).ready(function() {

	$("img").width(60).height(40).click(function(){
		$(this).animate({

			marginLeft:"150px",
			width:"300px",
			height:"200px"


		},2000).delay(4000);//termina animate

		$(this).animate({

			marginLeft:"0px",
			width:"60px",
			height:"40px"

		},2000);
	});//termina la funcion click

});