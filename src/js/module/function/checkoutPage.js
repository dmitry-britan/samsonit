if ($('.checkout__login-form').length) {
	$('.js-checkout-user-old').on('click', () => {
		$('.checkout__login-form').arcticmodal({
			beforeOpen: () => $('body').addClass('is--login-show'),
			beforeClose: () => $('body').removeClass('is--login-show'),
		});
	});
}
