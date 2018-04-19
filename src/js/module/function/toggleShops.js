(() => {
	$(document).ready(() => {
		let $shopsMap = $('#map');
		let $shopItems = $('.js-shop');

		if (!$shopsMap.length) {
			return false;
		}
		if ($('body').hasClass('page--checkout')) {
			$shopItems.on('click', (event) => {
				let $shop = $(event.currentTarget);
				let shopId = $shop.data('shop');

				$.arcticmodal('close');
				$('input[name="shop_id"]').val(shopId);
				$('.js-shop-selected').html( $shop.html() );
			});
		}
		if ($('body').hasClass('page--contacts')) {
			let minWidth = 992;
			let $window = $(window);

			$shopItems.on('click', () => {
				if ($window.width() < minWidth) {
					$.arcticmodal('close');
					$shopsMap.arcticmodal();
				}
			});
		}
	});
})();
