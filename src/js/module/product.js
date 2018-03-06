if ($('.js-product').length) {
	$('.js-product').hover(
		() => {
			$('body').addClass('is--product-over');
		},
		() => {
			$('body').removeClass('is--product-over');
		}
	);
}
