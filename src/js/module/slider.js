//
// Slider - on main page
// =================================================================
if ($('.js-slider').length) {
	$('.js-slider').slick({
		arrows: false,
		adaptiveHeight: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
}
// 
// Slider - Product Single
// =================================================================
if ($('.js-slider-product-single').length) {
	$('.js-slider-product-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-slider-product-single-nav',
	});

	$('.js-slider-product-single-nav').slick({
		arrows: true,
		infinite: false,
		asNavFor: '.js-slider-product-single',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: $('.js-thumbs-slider-next'),
		prevArrow: $('.js-thumbs-slider-prev'),
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					vertical: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					adaptiveHeight: false,
				},
			},
			{
				breakpoint: 1184,
				settings: {
					vertical: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					adaptiveHeight: false,
				},
			},
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					adaptiveHeight: false,
				},
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	});
}

//
// Slider - Products Recommend
// =================================================================
if ($('.js-recommend-slider').length) {
	let $recommend = $('.js-recommend-slider');
	let slideCount = null;

	$recommend.on('init', function(event, slick){
		
		slideCount = slick.slideCount;
		setSlideCount();
		setCurrentSlideNumber(slick.currentSlide);
	});

	$recommend.slick({
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 5,
		adaptiveHeight: true,
		nextArrow: $('.js-recommend-slider-next'),
		prevArrow: $('.js-recommend-slider-prev'),
		responsive: [
			{
				breakpoint: 1680,
				settings: {
					vertical: false,
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1400,
				settings: {
					vertical: false,
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1080,
				settings: {
					vertical: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 840,
				settings: {
					vertical: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$recommend.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setCurrentSlideNumber(nextSlide);
	});

	function setSlideCount() {
		let $el = $recommend.parents('.slider').find('.slider__pagination-total');

		$el.text(slideCount);
	}

	function setCurrentSlideNumber(currentSlide) {
		let $el = $recommend.parents('.slider').find('.slider__pagination-current');

		$el.text(currentSlide + 1);
	}
}

//
// Slider - Features
// =================================================================
if ($('.js-features-slider').length) {
	let $features = $('.js-features-slider');
	let slideCount = null;

	$features.on('init', function(event, slick){
		
		slideCount = slick.slideCount;
		setSlideCount();
		setCurrentSlideNumber(slick.currentSlide);
	});

	$features.slick({
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: $('.js-features-slider-next'),
		prevArrow: $('.js-features-slider-prev'),
	});

	$features.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setCurrentSlideNumber(nextSlide);
	});

	function setSlideCount() {
		let $el = $features.parents('.slider').find('.slider__pagination-total');

		$el.text(slideCount);
	}

	function setCurrentSlideNumber(currentSlide) {
		let $el = $features.parents('.slider').find('.slider__pagination-current');

		$el.text(currentSlide + 1);
	}
}

//
// Slider - Promo
// =================================================================
if ($('.js-promo-slider').length) {
	let $promo = $('.js-promo-slider');
	let slideCount = null;

	$promo.on('init', function(event, slick){
		
		slideCount = slick.slideCount;
		setSlideCount();
		setCurrentSlideNumber(slick.currentSlide);
	});

	$promo.slick({
		arrows: true,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: $('.js-promo-slider-next'),
		prevArrow: $('.js-promo-slider-prev'),
	});

	$promo.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setCurrentSlideNumber(nextSlide);
	});

	function setSlideCount() {
		let $el = $promo.parents('.promo-slider').find('.promo-slider__pagination-total');

		$el.text(slideCount);
	}

	function setCurrentSlideNumber(currentSlide) {
		let $el = $promo.parents('.promo-slider').find('.promo-slider__pagination-current');

		$el.text(currentSlide + 1);
	}
}