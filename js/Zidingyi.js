 $(document).ready(function(){
	  $("input").focus(function(){
	    $(this).css("background-color","#BBDDBB");
	  });
	  $("input").blur(function(){
	    $(this).css("background-color","#FFFFFF");
	  });
	  $("textarea").focus(function(){
	        $(this).css("background-color","#BBDDBB");
	      });
	      $("textarea").blur(function(){
	        $(this).css("background-color","#FFFFFF");
	      });
	});