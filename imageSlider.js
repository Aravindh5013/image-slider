(function($){
	
	$('#slider-nav').show();
	$('div.slider').css('overflow','hidden');
	var slideUp = $('div.slider').children('ul');
	var imgs = slideUp.find('img');
	var imgLen = imgs[0].width;
	var current = 1;
	var	imgList = imgs.length
	var totalLength = imgList * imgLen;
	
	$('#slider-nav').find('button').on('click',function(){
		var direction = $(this).attr('data-dir');
		var loc =imgLen;
		if(direction == 'next')
		{
			current += 1;
		}else
		{
			current -= 1;
		}
		if(current == 0)
		{
			current = imgList;
			loc = totalLength - imgLen;
			direction = 'next';
		}else if(current - 1 == imgList)
		{
			current == 1;	
			loc = 0;
		}
		
		transition(slideUp,loc,direction);
		
		function transition(container,loc,direction)
		{
		/*	var unit;
		if ( direction && loc !== 0 ) {
			if(direction == 'next')
			{
				unit = '-=';
			}else{
				unit = '+=';
			}
		} if(loc == 0)
		{
			container.animate({
				'margin-left': loc
			});
		}*/
				var unit; // -= +=

		if ( direction && loc !== 0 ) {
			unit = ( direction === 'next' ) ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit + loc) : loc
		});
	}
		
		
	})
	
	
	
	
})(jQuery);