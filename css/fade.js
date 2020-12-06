$(function(){

	var documentEl= $(document),
		fadeElem = $('.fade-scroll');

	documentEl.on('scroll',function(){

		var currScrollPos = documentEl.scrollTop();
		fadeElem.each(function(){

			var $this=$(this),
				elemOffSetTop = $this.offset().top;
			if (currScrollPos > elemOffSetTop) $this.css('opacity',1 -(currScrollPos- elemOffSetTop)/650) 
		});
	});
});