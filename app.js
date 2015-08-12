$(document).ready(function(){
	$('#submit').on('click', function(){
		var number = $('#numberValue').val();

				// check if number is "whole" integer
				if (number % 1 == 0);
				// check if number is greater than or equal to 1
				if (number >= 1);
				// check if number is less than or equal to 100
				if (number <= 100) {
		  		list(number);
		  		} 

		  		else {
		  		alert('Please enter a number between 1 and 100, without any decimal points');
		  		}
	});
})


	/*** This function pushes the results to the page ***/
 
 	var list = function (number) {
		for (var i = 1; i <= number; i++) {

			// Check if 'i' is divisible by both 3 and 5, print 'fizz buzz!'
			if (i % 3 == 0 && i % 5 == 0) {
				$('#numberList').append("<li>"+"fizz buzz!"+"</li>");
			}
			// Check if 'i' is divisible by 3, print 'fizz'
			else if (i % 3 === 0) {
				$('#numberList').append("<li>"+"fizz"+"</li>");
			}
			// Check if 'i' is divisible by 5, print 'buzz'
			else if (i % 5 === 0) {
				$('#numberList').append("<li>"+"buzz"+"</li>");
			}
			// If none of the above, print 'i'
			else {
				$('#numberList').append("<li>"+i+"</li>");
			}
		}
	}
	
/* Clears list */
$(document).on('click', '#reset', function(){
    $('#numberList').empty();
});