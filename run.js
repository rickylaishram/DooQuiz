(function(window) {
	var $ = window.jQuery;

	var init = function() {
		$("button[onclick*='nextQuestion']").each(function() {
			var newonclick = $(this).attr("onclick").replace('0','1');
			$(this).attr("onclick", newonclick);
		});
	};

	init();
})(window);