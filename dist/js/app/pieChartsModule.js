(function($) {

	$('#demo-pie-1').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'round',
        lineWidth: 8,
        onStep: onStep
    });

    $('#demo-pie-2').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'butt',
        lineWidth: 8,
        onStep: onStep
    });

    $('#demo-pie-3').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'square',
        lineWidth: 8,
        onStep: onStep
    });
	
	$('#demo-pie-4').pieChart({
        barColor: '#44c7f4',
        trackColor: '#fff',
        lineCap: 'square',
        lineWidth: 8,
        onStep: onStep
    });

	function onStep(from, to, percent) {
		$(this.element).find('.pie-value').text(Math.round(percent) + '%');
	}


})(jQuery);