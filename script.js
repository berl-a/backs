var inputCreated = false;

$(document).ready(
	function() {
		
		$('.element').click(
			function() {
				
				if(!inputCreated){
					var $t = $(this);
					var link = $t.find('div:nth-of-type(2)').css('background-image').replace('url(', '').replace(')', '');
					$t.find('div:nth-of-type(2)').append('<input type="text"></input>');
					$('input').val(link);
					inputCreated = true;
				}
			}
		);

	}
);

$(document).on('mouseout', 'input',
	function() {
		$(this).remove();
		inputCreated = false;
	}
 );

$(document).on('click', 'input',
	function() {
		$(this).select();
	}
 );