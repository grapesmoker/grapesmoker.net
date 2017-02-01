$(function() {
	
	//$("#main").hide();
	$("#about").hide();
	$("#research").hide();
	
	$("#show-main").click(function() {
		$(".content").hide();
		$("#main").show();
	});
	
	$("#show-about").click(function() {
		$(".content").hide();
		$("#about").show();
	});
})
