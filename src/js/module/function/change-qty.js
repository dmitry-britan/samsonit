function getQty($input) {
	return parseInt($input.val(), 10) || 0;
}
function validateQty($input, minValue) {
	if (getQty($input) < minValue) {
		$input.val(minValue);
	}
}
function changeQty(selector, minValue) {
	let $el = $(selector);

	$el.each((i, element) => {
		let $qty = $(element);
		let $minus = $qty.find('.js-qty-minus');
		let $plus = $qty.find('.js-qty-plus');
		let $input = $qty.find('.js-qty-value');

		$minus.on('click', () => {
			$input.val(getQty($input) - 1);
			validateQty($input, minValue);
		});

		$plus.on('click', () => {
			$input.val(getQty($input) + 1);
			validateQty($input, minValue);
		});

		$input.on('keyup', (event) => {
			if (
				!(event.keyCode > 95 && event.keyCode < 106
					|| event.keyCode > 47 && event.keyCode < 58
					|| event.keyCode === 8)
			) {
				$input.val(minValue);
			}
			validateQty($input, minValue);
		});
	});
}

changeQty('.js-qty', 1);
