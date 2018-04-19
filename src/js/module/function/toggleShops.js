(() => {
	let $shopsMap = $('#map');

	if (!$shopsMap.length) {
		return false;
	}

	let $shopItems = $('.js-shop');
	let minWidth = 992;
	let $window = $(window);

	$shopItems.on('click', () => {
		if ($window.width() < minWidth) {
			$shopsMap.arcticmodal();
		}
	});
})();
