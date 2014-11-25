$(document).ready(function() {

	$("#count").on("click", function () {
		var alc = parseInt($("#alc").val());
		var cap = parseInt($("#cap").val());
		var price = parseInt($("#price").val());
		
		$("#result").val((cap*(alc/100)/price).toFixed(2));
	});

});