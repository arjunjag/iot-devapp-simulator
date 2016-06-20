
$(function()
	{
		 // works for left bar sliding
		 $("#streamButton").click(function()
		 { 
			 $("#slideStreamInfo").animate({width: 'toggle'});
			 $(this).find('span').toggleClass('glyphicon glyphicon-menu-right').toggleClass('glyphicon glyphicon-menu-left');
			 return false;
		 });
		 //works for logs dropdown
		$('#logButton').click(function() {
			$('html,body').animate({
			scrollTop: $("#incomingTable").offset().top+ '300px'},
			'slow');
			$(this).find('span').toggleClass('glyphicon glyphicon-chevron-down').toggleClass('glyphicon glyphicon-chevron-up');

			});		 
	});
