$(function(){

	var oldVal, newVal, id;
	$('.edit').focus(function(){
		oldVal = $(this).text();
		id = $(this).data('id');
	});

	$('.edit').keypress(function(e){
		if(e.which == 13){
			newVal = $(this).text();
			if(newVal != oldVal){
				$.ajax({
					url: 'index.php',
					type: 'POST',
					data: {new_val: newVal, id: id},
					beforeSend: function(){
						$('#loader').fadeIn();
					},
					success: function(res){
						$('#mes-edit').text(res).delay(500).fadeIn(1000, function(){
							$('#mes-edit').delay(1000).fadeOut();
						});
					},
					error: function(){
						alert('Error!');
					},
					complete: function(){
						$('#loader').delay(500).fadeOut();
					}
				});
			}
			return false;
		}
	});

});