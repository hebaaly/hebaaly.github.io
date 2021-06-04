jQuery(document).ready(function(){
    $('#morenews').click(function () {
		$('#lessnews').show();
        $('#news tr:hidden').slice(0, 5).show();
        if ($('#news  tr').length == $('#news tr:visible').length) {
            $('#morenews ').hide();
        }
		
    });
	
	$('#lessnews').click(function () {
		$('#morenews').show();
		
		$('#news tr:visible').slice(-5).hide();
		if (12 >= $('#news tr:visible').length) {
            $('#lessnews ').hide();
        }

    });
	
	    $('#moreawards2').click(function () {
		$('#lessawards2').show();
        $('#awards2 tr:hidden').slice(0, 5).show();
        if ($('#awards2  tr').length == $('#awards2 tr:visible').length) {
            $('#moreawards2 ').hide();
        }
		
    });
	
	$('#lessawards2').click(function () {
		$('#moreawards2').show();
		
		$('#awards2 tr:visible').slice(-3).hide();
		if (4 >= $('#awards2 tr:visible').length) {
            $('#lessawards2 ').hide();
        }

    });
});