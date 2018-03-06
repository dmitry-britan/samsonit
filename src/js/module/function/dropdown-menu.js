function dropdown(options) {
	let triger = options.triger;
	let subject = options.subject;
	let state = options.state || '';
	let parent = options.parent || '';

	$(triger).on('click', (event) => {
		$(event.currentTarget)
			.parents(parent).toggleClass(state)
			.find(subject).stop(true, true)
			.slideToggle(300);
	});
}
// Categories Group
dropdown({
	triger: '.categories-groups__icon',
	subject: '.categories-groups__sublist',
	state: 'is--active',
	parent: '.categories-groups__list-item',
});
// Filter Block
dropdown({
	triger: '.filter__header',
	subject: '.filter__body',
	state: 'is--active',
	parent: '.filter',
});
