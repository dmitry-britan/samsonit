if ($('.js-filter-toggler').length) {
	let $toggler = $('.js-filter-toggler');
	let $sidebar = $('.sidebar');

	$toggler.on('click', (event) => {
		event.preventDefault();

		$('body').toggleClass('is--sidebar-active');
		$sidebar.toggleClass('is--opened');
	});
}
