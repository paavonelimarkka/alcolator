$(document).ready(function() {

	$("#count").on("click", function () {
		var alc = parseFloat($("#alc").val());
		var cap = parseFloat($("#cap").val());
		var price = parseFloat($("#price").val());
		
		$("#result").val((cap*(alc/100)/price).toFixed(2));
	});

});