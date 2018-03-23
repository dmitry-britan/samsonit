//
// Scroll pane Init
// =================================================================
(() => {
	let $scrollable = $('.js-scroll-list');

	if ($scrollable.length) {
		$scrollable.jScrollPane();
	}
})();

(() => {
	let $scrollable = $('.js-scroll-shops');

	$scrollable.jScrollPane();
	if ($scrollable.length) {
		$('.js-tabs-item').on('click', () => {
			$scrollable.jScrollPane();
		});
	}
})();

(() => {
	let $scrollable = $('.js-scroll-compare');

	$scrollable.jScrollPane();
	if ($scrollable.length) {
		$scrollable.jScrollPane();
	}
})();
