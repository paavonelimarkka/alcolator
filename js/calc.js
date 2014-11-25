$(document).ready(function() {

	// get variables from form elements
	var alc = $(document).get("alc");
	var cap = $(document).get("cap");
	var price = $(document).get("price");

	// var result = $(document).get("");

	$(document).get("count").click(function () {
		console.log(alc+cap+price);	
	});

});