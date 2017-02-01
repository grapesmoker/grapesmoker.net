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

	$('#act-r').click(function() {
		$.get('html/actr.html', function(data) {
			$('#main').html(data)
		})
	})
})
