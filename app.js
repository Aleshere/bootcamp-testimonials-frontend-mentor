

(function () {

	let slides = document.querySelectorAll('.carousel-wrap'),
		 arrows = document.querySelectorAll('.arrow'),
		 carouselCount = 0,
		 scrollInterval,
		 interval = 5000;

	arrows[0].addEventListener('click', function (e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount -= 200;
		slider();
		if (e.type !== 'autoClick') {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	});
	arrows[1].addEventListener('click', sliderEvent);
	arrows[1].addEventListener('autoClick', sliderEvent);
	
	function sliderEvent(e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount += 200;
		slider();
		if (e.type !== "autoClick") {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	}
	
	function slider() {
		switch (carouselCount) {
			case -200:
				carouselCount = 200;
				break;
			case 400:
				carouselCount = 0;
				break;
			default:
				break;
		}
		console.log(carouselCount);
		for (var i = 0; i < slides.length; i += 1) {
			slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
		}
	}
	
	// create new Event to dispatch click for auto scroll
	var autoClick = new Event('autoClick');
	function autoScroll() {
		arrows[1].dispatchEvent(autoClick);
	}
	
	// set timing of dispatch click events
	scrollInterval = setInterval(autoScroll, interval);
	
})();