$('.timesinput').on('input', function() { 
		var value = $(this).val();
	 if (value != '') {
	  $('.times').text(value);
	 }
	else {
		$('.times').text('Times');
	}
});

$('.totalinput').on('input', function() { 
		var value = $(this).val();
	 if (value != '') {
	  $('.total').text(value);
	 }
	else {
		$('.total').text('be total');
	}
});

$('.crazyinput').on('input', function() { 
		var value = $(this).val();
	 if (value != '') {
	  $('.crazy').text(value);
	 }
	else {
		$('.crazy').text('crazy');
	}
});