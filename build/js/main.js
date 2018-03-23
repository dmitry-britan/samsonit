'use strict';

var _createClass = function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function getQty($input) {
	return parseInt($input.val(), 10) || 0;
}

function validateQty($input, minValue) {
	if (getQty($input) < minValue) {
		$input.val(minValue);
	}
}

function changeQty(selector, minValue) {
	var $el = $(selector);

	$el.each(function(i, element) {
		var $qty = $(element);
		var $minus = $qty.find('.js-qty-minus');
		var $plus = $qty.find('.js-qty-plus');
		var $input = $qty.find('.js-qty-value');

		$minus.on('click', function() {
			$input.val(getQty($input) - 1);
			validateQty($input, minValue);
		});

		$plus.on('click', function() {
			$input.val(getQty($input) + 1);
			validateQty($input, minValue);
		});

		$input.on('keyup', function(event) {
			if (!(event.keyCode > 95 && event.keyCode < 106 || event.keyCode > 47 && event.keyCode < 58 || event.keyCode === 8)) {
				$input.val(minValue);
			}
			validateQty($input, minValue);
		});
	});
}

changeQty('.js-qty', 1);

(function() {
	$('a[href="#search"]').on('click', function(event) {
		event.preventDefault();

		$('.search-modal').addClass('open');
		$('.search-modal > form > input[type="search"]').focus();
	});

	$('.search-modal').on('click keyup', function(event) {
		if (event.target === event.currentTarget || event.target.className === 'close' || event.keyCode === 27) {
			$(event.currentTarget).removeClass('open');
		}
	});
})();

//
// Tabs
//---------------------------------------------------------------------------------------
if ($('.js-tabs').length) {
	var $tabs = $('.js-tabs-item');
	var $panes = $('.js-tabs-content');

	$tabs.on('click', function(event) {
		event.preventDefault();

		var id = $(event.currentTarget).attr('href');

		$tabs.removeClass('is--active');
		$(event.currentTarget).addClass('is--active');

		$panes.removeClass('is--active');
		$(id).addClass('is--active');
	});
}

function dropdown(options) {
	var triger = options.triger;
	var subject = options.subject;
	var state = options.state || '';
	var parent = options.parent || '';

	$(triger).on('click', function(event) {
		$(event.currentTarget).parents(parent).toggleClass(state).find(subject).stop(true, true).slideToggle(300);
	});
}
// Categories Group
dropdown({
	triger: '.categories-groups__icon',
	subject: '.categories-groups__sublist',
	state: 'is--active',
	parent: '.categories-groups__list-item'
});
// Filter Block
dropdown({
	triger: '.filter__header',
	subject: '.filter__body',
	state: 'is--active',
	parent: '.filter'
});

var $productSinglePhoto = $('.product-single__photo');

if ($productSinglePhoto.length) {
	$productSinglePhoto.find('[rel="gallery"]').fancybox();
}

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
		slidesToScroll: 1
	});
}
//
// Slider - Product Thumbs
// =================================================================
if ($('.js-thumbs-slider').length) {
	$('.js-thumbs-slider').slick({
		arrows: true,
		vertical: true,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: $('.js-thumbs-slider-next'),
		prevArrow: $('.js-thumbs-slider-prev'),
		responsive: [{
			breakpoint: 1500,
			settings: {
				vertical: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				adaptiveHeight: false
			}
		}, {
			breakpoint: 1184,
			settings: {
				vertical: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				adaptiveHeight: false
			}
		}, {
			breakpoint: 992,
			settings: {
				vertical: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				adaptiveHeight: false
			}
		}, {
			breakpoint: 660,
			settings: {
				vertical: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				adaptiveHeight: false
			}
		}]
	});
}

//
// Slider - Products Recommend
// =================================================================
if ($('.js-recommend-slider').length) {
	var setSlideCount = function setSlideCount() {
		var $el = $recommend.parents('.slider').find('.slider__pagination-total');

		$el.text(slideCount);
	};

	var setCurrentSlideNumber = function setCurrentSlideNumber(currentSlide) {
		var $el = $recommend.parents('.slider').find('.slider__pagination-current');

		$el.text(currentSlide + 1);
	};

	var $recommend = $('.js-recommend-slider');
	var slideCount = null;

	$recommend.on('init', function(event, slick) {

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
		responsive: [{
			breakpoint: 1680,
			settings: {
				vertical: false,
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}, {
			breakpoint: 1400,
			settings: {
				vertical: false,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 1080,
			settings: {
				vertical: false,
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 840,
			settings: {
				vertical: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$recommend.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		setCurrentSlideNumber(nextSlide);
	});
}

//
// Slider - Features
// =================================================================
if ($('.js-features-slider').length) {
	var _setSlideCount = function _setSlideCount() {
		var $el = $features.parents('.slider').find('.slider__pagination-total');

		$el.text(_slideCount);
	};

	var _setCurrentSlideNumber = function _setCurrentSlideNumber(currentSlide) {
		var $el = $features.parents('.slider').find('.slider__pagination-current');

		$el.text(currentSlide + 1);
	};

	var $features = $('.js-features-slider');
	var _slideCount = null;

	$features.on('init', function(event, slick) {

		_slideCount = slick.slideCount;
		_setSlideCount();
		_setCurrentSlideNumber(slick.currentSlide);
	});

	$features.slick({
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: $('.js-features-slider-next'),
		prevArrow: $('.js-features-slider-prev')
	});

	$features.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		_setCurrentSlideNumber(nextSlide);
	});
}

//
// Slider - Promo
// =================================================================
if ($('.js-promo-slider').length) {
	var _setSlideCount2 = function _setSlideCount2() {
		var $el = $promo.parents('.promo-slider').find('.promo-slider__pagination-total');

		$el.text(_slideCount2);
	};

	var _setCurrentSlideNumber2 = function _setCurrentSlideNumber2(currentSlide) {
		var $el = $promo.parents('.promo-slider').find('.promo-slider__pagination-current');

		$el.text(currentSlide + 1);
	};

	var $promo = $('.js-promo-slider');
	var _slideCount2 = null;

	$promo.on('init', function(event, slick) {

		_slideCount2 = slick.slideCount;
		_setSlideCount2();
		_setCurrentSlideNumber2(slick.currentSlide);
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
		prevArrow: $('.js-promo-slider-prev')
	});

	$promo.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		_setCurrentSlideNumber2(nextSlide);
	});
}
//
// CLASS - Mobile Menu
// =================================================================

var Menu = function() {
	function Menu() {
		var _this = this;

		_classCallCheck(this, Menu);

		this.closeMobileMenuOnOutOfClick();
		$('.js-nav-toggle').on('click', function() {
			_this.toggleMenuVisibility();
			_this.toggleMenuTriggerClass();
			_this.toggleBodyBackground();
		});
	}
	/* eslint class-methods-use-this: ["error", { 
 	"exceptMethods": [
 		"toggleMenuVisibility",
 		"toggleBodyBackground",
 		"toggleMenuTriggerClass",
 		"closeMobileMenuOnOutOfClick",
 	] }] 
 */

	_createClass(Menu, [{
		key: 'toggleMenuVisibility',
		value: function toggleMenuVisibility() {
			$('.mobile-nav').toggleClass('is--visible');
		}
	}, {
		key: 'toggleBodyBackground',
		value: function toggleBodyBackground() {
			$('body').toggleClass('is--mobile-active');
		}
	}, {
		key: 'toggleMenuTriggerClass',
		value: function toggleMenuTriggerClass() {
			$('.js-nav-toggle').toggleClass('is-active');
		}
	}, {
		key: 'closeMobileMenuOnOutOfClick',
		value: function closeMobileMenuOnOutOfClick() {
			var _this2 = this;

			$('body').mouseup(function(e) {
				var subject = $('.is--visible');

				if (subject.length && !$(e.target).hasClass('js-nav-toggle') && !$(e.target).hasClass('hamburger__inner') && e.target.className !== subject.attr('class') && !subject.has(e.target).length) {
					_this2.toggleMenuVisibility();
					_this2.toggleBodyBackground();
					_this2.toggleMenuTriggerClass();
				}
			});
		}
	}]);

	return Menu;
}();

function initMenu() {
	return new Menu();
}
initMenu();

//
// Modal Popup
// =================================================================
$.arcticmodal('setDefault', {
	afterClose: function afterClose() {
		$('body').css({
			'overflow': 'auto',
			'margin-right': '0px'
		});
	}
});

$('[data-modal]').on('click', function(e) {
	e.preventDefault();
	var link = $(e.currentTarget).data('modal');

	if (link) {
		$('#' + link).arcticmodal();
	}
});

//
// Обработка элемента формы input[type=file]
// =================================================================
function showUploadThumb(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			var $thumb = $('img[data-upload="' + $(input).attr('id') + '"]');

			$thumb.attr('src', e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	}
}
$('input[type=file]').on('change', function(event) {
	var str = $(event.currentTarget).val();
	var i = void 0;

	if (str.lastIndexOf('\\')) {
		i = str.lastIndexOf('\\') + 1;
	} else {
		i = str.lastIndexOf('/') + 1;
	}

	showUploadThumb(event.currentTarget);
});

//
// Валидация формы "Задать вопрос"
// =================================================================
var validateFormLogin = {
	rules: {
		email: {
			required: true,
			email: true
		},
		password: {
			required: true
		}
	},
	messages: {
		email: {
			email: 'Введите корректный e-mail адрес',
			required: 'Введите Ваш e-mail'
		},
		password: {
			required: 'Введите Ваш пароль'
		}
	},
	focusCleanup: true,
	focusInvalid: false
};

// Login Form
$('.js-form-login').validate(validateFormLogin);

//
// Валидация формы "Задать вопрос"
// =================================================================
var validateFormAsk = {
	rules: {
		name: {
			required: true
		},
		email: {
			required: true,
			email: true
		},
		comment: {
			required: true
		}
	},
	messages: {
		name: {
			required: 'Введите Ваше имя'
		},
		email: {
			email: 'Введите корректный e-mail адрес',
			required: 'Введите Ваш e-mail'
		},
		comment: {
			required: 'Введите Ваше сообщение'
		}
	},
	focusCleanup: true,
	focusInvalid: false
};

// ASK FORM
$('.js-form-ask').validate(validateFormAsk);

//
// Валидация формы "Задать вопрос"
// =================================================================
var validateFormQuestion = {
	rules: {
		name: {
			required: true
		},
		question: {
			required: true
		}
	},
	messages: {
		name: {
			required: 'Введите Ваше имя'
		},
		question: {
			required: 'Введите Ваш вопрос'
		}
	},
	focusCleanup: true,
	focusInvalid: false
};

// QUESTION FORM
$('.js-form-question').validate(validateFormQuestion);

//
// Валидация формы "Ответить на сообщение"
// =================================================================
var validateFormAnswer = {
	rules: {
		answer: {
			required: true
		}
	},
	messages: {
		answer: {
			required: 'Введите Ваше сообщение'
		}
	},
	focusCleanup: true,
	focusInvalid: false
};

// ANSWER FORM
$('.js-form-answer').validate(validateFormAnswer);

//
// Валидация формы "Заказать обратный звонок"
// =================================================================
var validateFormCallback = {
	rules: {
		name: {
			required: true
		}
	},
	messages: {
		name: {
			required: 'Введите Ваше имя'
		}
	},
	focusCleanup: true,
	focusInvalid: false
};

// CALLBACK FORM
$('.js-form-callback').validate(validateFormCallback);

// 
// Валидация формы "Быстрая Регистрация"
// =================================================================
var validateFormRegistration = {
	rules: {
		name: {
			required: true
		},
		email: {
			required: true,
			email: true
		}
	},
	messages: {
		name: {
			required: 'Введите Ваше имя'
		},
		email: {
			email: 'Введите корректный e-mail адрес',
			required: 'Введите Ваш e-mail'
		}
	},
	submitHandler: function submitHandler(form) {
		// ////////////////////
		//  AJAX CODE GOES HERE
		// ////////////////////
		form.reset();
	},
	focusCleanup: true,
	focusInvalid: false
};

// REGISTRATION FORM
$('.js-form-registration').validate(validateFormRegistration);

//
// Валидация формы "Задать вопрос"
// =================================================================
var validateFormProfileData = {
	rules: {
		email: {
			required: true,
			email: true
		},
		name: {
			required: true
		},
		city: {
			required: true
		},
		country: {
			required: true
		},
		account: {
			required: true
		}
	},
	messages: {
		email: {
			email: 'Введите корректный e-mail адрес',
			required: 'Введите Ваш e-mail'
		},
		name: {
			required: 'Введите Ваше имя'
		},
		city: {
			required: 'Введите Ваш город'
		},
		country: {
			required: 'Введите Вашу страну'
		}
	},
	focusCleanup: true,
	focusInvalid: false
};

// ProfileData Form
$('.js-form-profile-data').validate(validateFormProfileData);

//
// Подключаем fancybox для фото товара
//---------------------------------------------------------------------------------------
var $gallery = $('[rel="gallery"]');

if ($gallery.length) {
	$gallery.fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		helpers: {
			title: {
				type: 'inside'
			}
		}
	});
}

if ($('.js-product').length) {
	$('.js-product').hover(function() {
		$('body').addClass('is--product-over');
	}, function() {
		$('body').removeClass('is--product-over');
	});
}

//
// Scroll pane Init
// =================================================================
(function() {
	var $scrollable = $('.js-scroll-list');

	if ($scrollable.length) {
		$scrollable.jScrollPane();
	}
})();

(function() {
	var $scrollable = $('.js-scroll-shops');

	$scrollable.jScrollPane();
	if ($scrollable.length) {
		$('.js-tabs-item').on('click', function() {
			$scrollable.jScrollPane();
		});
	}
})();
