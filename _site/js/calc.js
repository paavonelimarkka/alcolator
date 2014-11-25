$(document).ready(function() {

	$("#count").on("click", function () {
		var alc = parseInt($("#alc").val());
		var cap = parseInt($("#cap").val());
		var price = parseInt($("#price").val());
		// console.log(alc+cap+price);
		$("#result").val(cap*(alc/100)/price);
		//console.log( cap*(alc/100)/price );
	});

});