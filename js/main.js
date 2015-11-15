(function($){
	var defaults = {
		duration : 500,
		rotate : true
	};

	$.fn.imgSlide = function(options){
		var option = $.extend({}, defaults, options);
		var $el = $(this);
		var $wrap = $el.find('ul');
		var $items = $el.find('li');
		var _length = $items.length;
		var currentIndex = 0;

		var isMoving = false;


		var moveSlide = function(nextIndex){
			if(!isMoving){
				if(option.rotate){
					nextIndex = (nextIndex + _length) % _length;
				}else{
					if(nextIndex < 0){
						nextIndex = 0;
					}else if(nextIndex > _length -1){
						nextIndex = _length -1;
					}else{
						nextIndex = nextIndex;
					}


					// nextIndex = (nextIndex < 0 || nextIndex > _length -1) ? (nextIndex < 0 ? 0 : _length -1 ) : nextIndex ;
				}


				$wrap.stop(true).animate({
					left: -100* nextIndex + "%"
				}, {
						duration : option.duration;
						complete : function(){ isMoving = false; }
						
					});
					currentIndex = nextIndex;
				}
			};

		// 
		$items.each(function(index){
			$(this).css('left', 100 * index+ "%");
		});

		$el.on('click','.btn', function(){
			if( $(this).hasClass('prev') ){
				// 왼쪽으로 이동
				moveSlide(currentIndex - 1);
			}else {
				// 오른쪽으로 이동
				moveSlide(currentIndex + 1);
			}
		});
	};

	$('#slider1').imgSlide({
		// duration : 500,
		rotate : false
	});
	$('#slider2').imgSlide({
		duration: 700
	});
	$('#slider3').imgSlide({
		duration : 200,
		rotate : false

	});
})(jQuery);