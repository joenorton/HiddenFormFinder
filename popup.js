$.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.
	var result_arr = new Array();
	$('input[type=hidden]').each( function () {
	    var name = $(this).prop("name");
	    var value = $(this).val();
	    result_arr.push("Name: " + name + "\nValue: " + value);
	});
	if (result_arr.length > 0){ 
		console.log("[HFF] - Hidden Form Fields Found: \n\n" + result_arr.join("\n\n"));
		$(document.body).append('<div class="hff"> [HFF] - Hidden Form Fields Found: \n\n" + result_arr.join("\n\n")</div>');
	} else {
		console.log("[HFF] - No Hidden Form Fields Found");
		$(document.body).append('<div class="hff"> [HFF] - No Hidden Form Fields Found</div>');
	}
});