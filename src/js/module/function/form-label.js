//
// Material Effect for form elements
//---------------------------------------------------------------------------------------
(() => {
	let $inputs = $('.popup__form-input');

	if ($inputs.length) {
		$inputs.each((index, element) => {
			if ($(element).val() !== '') {
				$(element).parent().find('label').addClass('is--active');
			}
		});

		$inputs.focus((event) => {
			let $element = $(event.currentTarget);

			$element.parent().find('label').addClass('is--active');
		}).blur(() => {
			let $element = $(event.currentTarget);

			if ($element.val() === '') {
				$element.parent().find('label').removeClass('is--active');
			}
		});
	}
})();
